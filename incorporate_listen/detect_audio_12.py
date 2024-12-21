import pyaudio
import numpy as np
from datetime import datetime
import requests
import json
import pyttsx3
import sys
import os
import time

# Audio monitoring constants
CHUNK = 1024
FORMAT = pyaudio.paFloat32
CHANNELS = 1
RATE = 48000
THRESHOLD = 0.01
DEVICE_INDEX = 4  # VB-Cable index
SILENCE_WAIT = 4  # Seconds to wait for silence after audio detection

# Move tracking
LAST_SPOKEN_MOVE = None

# Load chess game credentials
try:
    with open('game_id_txt.txt', 'r') as f:
        GAME_ID = f.read().strip()
    
    with open('auth_token_txt.txt', 'r') as f:
        AUTH_TOKEN = f.read().strip()
        
except FileNotFoundError:
    print("Error: One or both credential files not found.")
    sys.exit(1)
except Exception as e:
    print(f"Error reading credentials: {e}")
    sys.exit(1)

def speak_text(text):
    try:
        engine = pyttsx3.init()
        engine.setProperty('rate', 150)
        engine.setProperty('volume', 1.0)
        engine.say(text)
        engine.runAndWait()
        engine.stop()
        del engine
    except Exception as e:
        print(f"Error in text-to-speech: {e}")

def get_stored_move():
    try:
        if os.path.exists('last_move_stored.txt'):
            with open('last_move_stored.txt', 'r') as f:
                return f.read().strip()
    except Exception as e:
        print(f"Error reading stored move: {e}")
    return None

def store_move(move):
    try:
        with open('last_move_stored.txt', 'w') as f:
            f.write(move)
    except Exception as e:
        print(f"Error storing move: {e}")

def get_last_move(game_id, auth_token):
    url = f"https://lichess.org/api/stream/game/{game_id}"
    headers = {"Authorization": f"Bearer {auth_token}"}
    
    try:
        response = requests.get(url, headers=headers, stream=True, timeout=5)
        response.raise_for_status()
        
        for line in response.iter_lines():
            if line:
                game_data = json.loads(line)
                response.close()
                return game_data.get('lastMove')
            
        response.close()
        return None
        
    except requests.exceptions.RequestException as e:
        print(f"Error connecting to Lichess API: {e}")
        return None
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON data: {e}")
        return None
    finally:
        if 'response' in locals():
            response.close()

def convert_move_to_speech(move):
    if len(move) < 4:
        return move
    
    files = {'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 
             'e': 'E', 'f': 'F', 'g': 'G', 'h': 'H'}
    
    from_square = move[:2]
    to_square = move[2:4]
    from_file = files.get(from_square[0], from_square[0])
    from_rank = from_square[1]
    to_file = files.get(to_square[0], to_square[0])
    to_rank = to_square[1]
    
    return f"Move from {from_file} {from_rank} to {to_file} {to_rank}"

def check_and_speak_move():
    """Check for new moves and speak them immediately if found"""
    global LAST_SPOKEN_MOVE
    
    current_move = get_last_move(GAME_ID, AUTH_TOKEN)
    stored_move = get_stored_move()
    
    if current_move and current_move != stored_move:
        print(f"New move detected: {current_move}")
        store_move(current_move)
        
        # If this is a new move we haven't spoken yet
        if current_move != LAST_SPOKEN_MOVE:
            print(f"Speaking move: {current_move}")
            spoken_move = convert_move_to_speech(current_move)
            speak_text(spoken_move)
            LAST_SPOKEN_MOVE = current_move
            return True
    return False

def monitor_audio():
    p = pyaudio.PyAudio()
    last_audio_time = 0
    audio_detected = False
    check_scheduled = False
    
    try:
        stream = p.open(format=FORMAT,
                       channels=CHANNELS,
                       rate=RATE,
                       input=True,
                       frames_per_buffer=CHUNK,
                       input_device_index=DEVICE_INDEX)
        
        print("Monitoring audio through VB-Cable...")
        print("Press Ctrl+C to stop monitoring")
        
        while True:
            try:
                current_time = time.time()
                
                # Read audio data
                data = stream.read(CHUNK, exception_on_overflow=False)
                audio_data = np.frombuffer(data, dtype=np.float32)
                volume = np.abs(audio_data).mean()
                
                if volume > THRESHOLD:
                    last_audio_time = current_time
                    if not audio_detected:
                        print(f"\n[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Audio detected! Waiting for silence...")
                        audio_detected = True
                        check_scheduled = True
                elif audio_detected and (current_time - last_audio_time > SILENCE_WAIT):
                    if check_scheduled:
                        print("Checking for moves...")
                        check_and_speak_move()
                        check_scheduled = False
                    audio_detected = False
                    last_audio_time = current_time
                    
            except IOError as e:
                print(f"IOError: {e}")
                continue
                
    except KeyboardInterrupt:
        print("\nStopping audio monitoring.")
    finally:
        stream.stop_stream()
        stream.close()
        p.terminate()

if __name__ == "__main__":
    monitor_audio()

import requests
import json
import pyttsx3

# Initialize these variables with your values
GAME_ID = "1y9OLBfE"  # Replace with your game ID
AUTH_TOKEN = "Insert_your_token_here"  # Replace with your actual token

#from lichess_moves import check_move
#check_move()

def initialize_tts():
    """Initialize text-to-speech engine"""
    engine = pyttsx3.init()
    # Optional: Configure voice settings
    engine.setProperty('rate', 150)    # Speed of speech
    engine.setProperty('volume', 1.0)  # Volume (0.0 to 1.0)
    return engine

def get_last_move(game_id, auth_token):
    """
    Get the last move from a specific Lichess game.
    
    Args:
        game_id (str): The Lichess game ID
        auth_token (str): Your Lichess API token
    
    Returns:
        str: The last move made in the game, or None if not found/error occurs
    """
    url = f"https://lichess.org/api/stream/game/{game_id}"
    headers = {
        "Authorization": f"Bearer {auth_token}"
    }
    
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



def check_move():
    engine = initialize_tts()
    last_move = get_last_move(GAME_ID, AUTH_TOKEN)
    if last_move:
        message = f"Last move was: {last_move}"
        print(message)
        # Convert chess notation to more natural speech
        spoken_move = convert_move_to_speech(last_move)
        engine.say(spoken_move)
        engine.runAndWait()
    else:
        message = "No move found or error occurred"
        print(message)
        engine.say(message)
        engine.runAndWait()

def convert_move_to_speech(move):
    """Convert chess notation to more natural speech"""
    if len(move) < 4:
        return move
    
    # Split the move into from and to squares
    from_square = move[:2]
    to_square = move[2:4]
    
    # Convert file (column) from letter to spoken form
    files = {'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 
             'e': 'E', 'f': 'F', 'g': 'G', 'h': 'H'}
    
    from_file = files.get(from_square[0], from_square[0])
    from_rank = from_square[1]
    to_file = files.get(to_square[0], to_square[0])
    to_rank = to_square[1]
    
    return f"Move from {from_file} {from_rank} to {to_file} {to_rank}"
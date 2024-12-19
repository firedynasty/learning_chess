Here’s a polished and rewritten version of your README.md to make it more user-friendly and clear:

Lichess Game Text-to-Speech

Purpose

This script enables text-to-speech functionality for chess moves when playing a game on Lichess.org. By running the function check_moves() in the terminal, you can stream moves in real-time and hear them spoken aloud.

How It Works
	1.	Play a game against the computer on Lichess.org.
	2.	Use the game ID from your Lichess game URL, for example:
	•	URL: https://lichess.org/cKggVpTC
	•	Game ID: cKggVpTC
	3.	Configure the script with your game ID and authentication token.

Setup

Step 1: Edit lichess_moves.py

Update the following variables with your game details:

# Initialize these variables with your values
```python
GAME_ID = "cKggVpTC"  # Replace with your game ID
AUTH_TOKEN = "Insert_your_token_here"  # Replace with your actual token
```

Step 2: Install Required Dependencies

Ensure you have the necessary libraries installed:

pip install requests pyttsx3

Step 3: Run the Script
	1.	Launch an interactive Python shell, such as ipython:

ipython


	2.	Import the check_moves function:

```python
from lichess_moves import check_moves
```

	3.	Start the move checking process:

```python
check_moves()
```

Example

For a Lichess game with the URL https://lichess.org/cKggVpTC:
	•	Update GAME_ID in the script to cKggVpTC.
	•	Start the script, and it will fetch moves as they happen in the game and announce them via text-to-speech.

Features
	•	Real-Time Move Announcements: Hear each move as it happens.
	•	Customizable: Easily update the script with a new game ID and authentication token for any game.

Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements or new features!

License

This project is licensed under the MIT License. See the LICENSE file for details.

This version provides clarity, highlights setup steps, and ensures a polished presentation for anyone reading your README. Let me know if you’d like to make further edits!
# Lichess Game Text-to-Speech

## Purpose

This script enables text-to-speech functionality for chess moves when playing a game on Lichess.org. By running the function check_moves() in the terminal, you can stream moves in real-time and hear them spoken aloud.

## How It Works

* **Start a Game**: Play a game against the computer on Lichess.org
* **Get Game ID**: Use the game ID from your Lichess game URL
  * Example URL: `https://lichess.org/cKggVpTC`
  * Example Game ID: `cKggVpTC`
* **Configure Script**: Set up the script with your game ID and authentication token

## Setup

### Step 1: Edit lichess_moves.py

Update the following variables with your game details:

```python
# Initialize these variables with your values
GAME_ID = "cKggVpTC"  # Replace with your game ID
AUTH_TOKEN = "Insert_your_token_here"  # Replace with your actual token
```

### Step 2: Install Required Dependencies

```bash
pip install requests pyttsx3
```

### Step 3: Run the Script

1. Launch an interactive Python shell:
   ```bash
   ipython
   ```

2. Import the check_moves function:
   ```python
   from lichess_moves import check_moves
   ```

3. Start the move checking process:
   ```python
   check_moves()
   ```

## Example

For a Lichess game with URL `https://lichess.org/cKggVpTC`:

* **Update Game ID**: Set `GAME_ID = "cKggVpTC"` in the script
* **Run Script**: The script will fetch and announce moves via text-to-speech, need to be run each time. 

## License

This project is licensed under the MIT License. See the LICENSE file for details.
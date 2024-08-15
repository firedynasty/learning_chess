


```python

import chess.pgn
import pyperclip
import io

# Assume pgn_string is your multi-line PGN content string
pgn_string = """1.d4 d5 2.e3 Nf6 3.Bd3 c5 4.c3 Nc6 5.f4 g6 6.Nf3 *"""

# Use io.StringIO to treat the PGN string as a file-like object
pgn_io = io.StringIO(pgn_string)

# Loop through each game in the PGN string
while True:
    # Read the next game from the PGN string
    game = chess.pgn.read_game(pgn_io)
    if game is None:
        break

    # Loop through each move in the game
    board = game.board()
    string_html = ""
    move_list = ['']
    count_ = 0
    for i, move in enumerate(game.mainline_moves()):
        count_ += 1 
        # Append the FEN position after each move and the word "pink" to the output string
        uci = move.uci()
        move_list.append(uci)
        string_html += f"{board.fen()}\n"
        board.push(move)

    # Print the final output string for the game
    print(string_html)
    print('\n')  # Print a new line after each game
    print(len(move_list))

# Copy the final output string of the last game to clipboard
pyperclip.copy(string_html)



```



there is a file called generating_template.md under data_ucB/33-prev_projects/stack/6-website/git_trial/firedynasty.github.io/side_projects/chess_analysis

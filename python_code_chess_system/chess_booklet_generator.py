#!/usr/bin/env python3
"""
Chess Booklet Generator
Reads from pgnForGenerate.txt and creates chess position images every N moves with notes
"""

import chess
import chess.pgn
import chess.svg
import io
import os
import re
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPDF
import matplotlib.pyplot as plt
import matplotlib.patches as patches


class ChessBookletGenerator:
    def __init__(self, move_interval=3, start_count=1):
        """
        Initialize the booklet generator

        Args:
            move_interval: Show position every N moves (default: 3)
            start_count: Starting number for image files (default: 1)
        """
        self.move_interval = move_interval
        self.start_count = start_count
        self.board_size = 350
        self.orientation = self.read_board_orientation()  # Read from board_orientation.txt
        self.output_dir = "./generated_images_for_booklet"
        os.makedirs(self.output_dir, exist_ok=True)

    def read_board_orientation(self, filename="board_orientation.txt"):
        """Read board orientation from file (white/black)"""
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read().strip().lower()

            if 'white' in content:
                print(f"Board orientation: WHITE (white pieces at bottom)")
                return chess.WHITE
            elif 'black' in content:
                print(f"Board orientation: BLACK (black pieces at bottom)")
                return chess.BLACK
            else:
                print(f"Unknown orientation in {filename}, defaulting to BLACK")
                return chess.BLACK

        except FileNotFoundError:
            print(f"File {filename} not found, defaulting to BLACK orientation")
            return chess.BLACK
        except Exception as e:
            print(f"Error reading {filename}: {e}, defaulting to BLACK orientation")
            return chess.BLACK

    def read_pgn_file(self, filename="pgnForGenerate.txt"):
        """Read PGN data from file"""
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                return f.read()
        except FileNotFoundError:
            print(f"File {filename} not found!")
            return None

    def parse_input_text(self, text):
        """
        Parse input text - only process content before first ### (twice)
        """
        # Find first occurrence of ### ### and only process content before it
        delimiter_pattern = r'###\s*###'
        match = re.search(delimiter_pattern, text)

        if match:
            # Only process content before the first ### ###
            content = text[:match.start()].strip()
        else:
            # No delimiter found, process entire text
            content = text.strip()

        if not content:
            return []

        lines = content.split('\n')
        pgn_lines = []
        note_lines = []
        tags = []

        # Extract tags (lines starting with @)
        for line in lines:
            line = line.strip()
            if line.startswith('@'):
                tags.append(line[1:])  # Remove @ symbol

        # Separate PGN from notes
        in_pgn = True
        for line in lines:
            line = line.strip()
            if not line or line.startswith('@'):
                continue

            # If line contains move numbers and chess notation, it's PGN
            if re.search(r'\d+\.\s*[a-zA-Z]', line) and in_pgn:
                pgn_lines.append(line)
            else:
                in_pgn = False
                note_lines.append(line)

        pgn_text = ' '.join(pgn_lines)
        notes_text = '\n'.join(note_lines)

        # Return single game data
        if pgn_text:
            return [(pgn_text, notes_text, tags)]
        else:
            return []

    def create_note_image(self, text, filename, width=8, height=6):
        """Create an image with text notes"""
        fig, ax = plt.subplots(figsize=(width, height))

        # Clean up text
        text = text.replace('\\n', '\n')

        # Set up the plot
        ax.text(0.5, 0.5, text,
               fontsize=14,
               ha='center',
               va='center',
               wrap=True,
               bbox=dict(boxstyle="round,pad=0.5", facecolor="lightblue", alpha=0.8))

        ax.set_xlim(0, 1)
        ax.set_ylim(0, 1)
        ax.axis('off')

        # Add a border
        border = patches.Rectangle((0.05, 0.05), 0.9, 0.9,
                                 linewidth=2, edgecolor='navy',
                                 facecolor='none')
        ax.add_patch(border)

        plt.tight_layout()
        plt.savefig(filename, bbox_inches='tight', pad_inches=0.2, dpi=150)
        plt.close(fig)

        print(f"Note image created: {filename}")

    def svg_to_pdf(self, svg_data, filename):
        """Convert SVG chess board to PDF"""
        drawing = svg2rlg(io.StringIO(svg_data))
        renderPDF.drawToFile(drawing, filename)

    def extract_variations(self, pgn_text):
        """Extract variations from PGN text in parentheses"""
        variations = []

        # Find all variations in parentheses
        import re
        pattern = r'\(([^()]+(?:\([^()]*\)[^()]*)*)\)'

        for match in re.finditer(pattern, pgn_text):
            variation_text = match.group(1).strip()

            # Extract the move number where this variation starts
            start_pos = match.start()
            preceding_text = pgn_text[:start_pos]

            # Find the last move number before this variation
            move_matches = list(re.finditer(r'(\d+)\.', preceding_text))
            if move_matches:
                start_move = int(move_matches[-1].group(1))
            else:
                start_move = 1

            variations.append({
                'text': variation_text,
                'start_move': start_move,
                'full_match': match.group(0)
            })

        return variations

    def process_variation(self, variation_text, start_move, base_board, variation_id):
        """Process a single variation and create position images"""
        positions = []

        try:
            # Create a note image for the variation header
            variation_note = f"VARIATION {variation_id}\nStarting from move {start_move}\n\n{variation_text}"
            note_filename = os.path.join(self.output_dir, f"image{self.start_count:02d}.png")
            self.create_note_image(variation_note, note_filename, width=10, height=4)

            positions.append({
                'type': 'variation_note',
                'filename': note_filename,
                'variation_id': variation_id,
                'start_move': start_move,
                'text': variation_text
            })
            self.start_count += 1

            # Process variation moves manually by parsing each move
            board = base_board.copy()

            # Clean up the variation text and split into moves
            clean_variation = re.sub(r'\$\d+', '', variation_text)  # Remove annotations like $1, $2
            clean_variation = re.sub(r'\([^)]*\)', '', clean_variation)  # Remove nested parentheses
            clean_variation = re.sub(r'\s+', ' ', clean_variation).strip()  # Clean whitespace

            # Split by move numbers and extract moves
            move_pattern = r'(\d+)\.\s*([a-zA-Z0-9+#=\-x]+)(?:\s+([a-zA-Z0-9+#=\-x]+))?'
            moves = re.findall(move_pattern, clean_variation)

            move_count = start_move
            for move_num, white_move, black_move in moves:
                # Process white move
                if white_move:
                    try:
                        move = board.parse_san(white_move)
                        board.push(move)

                        # Create position image
                        svg = chess.svg.board(board, size=self.board_size, orientation=self.orientation)
                        filename = os.path.join(self.output_dir, f"image{self.start_count:02d}.pdf")
                        self.svg_to_pdf(svg, filename)

                        positions.append({
                            'type': 'variation_position',
                            'filename': filename,
                            'move_number': move_count,
                            'variation_id': variation_id,
                            'fen': board.fen()
                        })
                        self.start_count += 1
                        print(f"Created variation {variation_id} position after {move_count}. {white_move}: {filename}")

                    except Exception as e:
                        print(f"Could not parse white move '{white_move}': {e}")
                        continue

                # Process black move if it exists
                if black_move:
                    try:
                        move = board.parse_san(black_move)
                        board.push(move)

                        # Create position image
                        svg = chess.svg.board(board, size=self.board_size, orientation=self.orientation)
                        filename = os.path.join(self.output_dir, f"image{self.start_count:02d}.pdf")
                        self.svg_to_pdf(svg, filename)

                        positions.append({
                            'type': 'variation_position',
                            'filename': filename,
                            'move_number': f"{move_count}...{black_move}",
                            'variation_id': variation_id,
                            'fen': board.fen()
                        })
                        self.start_count += 1
                        print(f"Created variation {variation_id} position after {move_count}...{black_move}: {filename}")

                    except Exception as e:
                        print(f"Could not parse black move '{black_move}': {e}")
                        continue

                move_count += 1

        except Exception as e:
            print(f"Error processing variation: {e}")

        return positions

    def process_pgn_to_positions(self, pgn_text, notes_text="", tags=None):
        """Process a PGN game and create position images with notes and variations"""
        if tags is None:
            tags = []

        try:
            # Extract variations first
            variations = self.extract_variations(pgn_text)
            print(f"Found {len(variations)} variations")

            # Clean PGN text by removing variations for main line processing
            clean_pgn = pgn_text
            for var in variations:
                clean_pgn = clean_pgn.replace(var['full_match'], '')

            # Parse main line PGN
            pgn_io = io.StringIO(clean_pgn)
            game = chess.pgn.read_game(pgn_io)

            if not game:
                print("Could not parse PGN")
                return []

            # Initialize board
            board = game.board()
            positions = []
            file_index = self.start_count

            # Skip starting position - start with first move
            # Adjust file_index to account for removed starting position
            # Now first move (previously image02) becomes image01
            print(f"Skipping starting position, beginning with first move")

            # Store board states for variation processing
            board_states = {0: board.copy()}

            # Process main line moves
            move_count = 0
            for move in game.mainline_moves():
                board.push(move)
                move_count += 1

                # Store board state for potential variation processing
                board_states[move_count] = board.copy()

                # Create position image at intervals
                if move_count % self.move_interval == 0:
                    svg = chess.svg.board(board, size=self.board_size, orientation=self.orientation)
                    filename = os.path.join(self.output_dir, f"image{file_index:02d}.pdf")
                    self.svg_to_pdf(svg, filename)

                    positions.append({
                        'type': 'position',
                        'filename': filename,
                        'move_number': move_count,
                        'fen': board.fen()
                    })
                    file_index += 1
                    print(f"Created position after move {move_count}: {filename}")

            # Debug: Print some board states
            print(f"Board states available: {list(board_states.keys())}")
            if 14 in board_states:
                print(f"Board state at move 14: {board_states[14].fen()}")

            # Add final position if not already added
            if move_count % self.move_interval != 0:
                svg = chess.svg.board(board, size=self.board_size, orientation=self.orientation)
                filename = os.path.join(self.output_dir, f"image{file_index:02d}.pdf")
                self.svg_to_pdf(svg, filename)

                positions.append({
                    'type': 'position',
                    'filename': filename,
                    'move_number': move_count,
                    'fen': board.fen()
                })
                file_index += 1
                print(f"Created final position after move {move_count}: {filename}")

            # Update start_count for variations
            self.start_count = file_index

            # Process variations (temporarily disabled - variation parsing needs improvement)
            print(f"\nSkipping {len(variations)} variations - feature needs refinement")
            # for i, variation in enumerate(variations, 1):
            #     print(f"\nProcessing variation {i}: {variation['text'][:50]}...")
            #     var_positions = self.process_variation(...)
            #     positions.extend(var_positions)

            # Add notes if provided
            if notes_text.strip():
                note_filename = os.path.join(self.output_dir, f"image{self.start_count:02d}.png")
                self.create_note_image(notes_text, note_filename)
                positions.append({
                    'type': 'note',
                    'filename': note_filename,
                    'text': notes_text,
                    'tags': tags
                })
                self.start_count += 1

            return positions

        except Exception as e:
            print(f"Error processing PGN: {e}")
            return []

    def generate_booklet(self, input_filename="pgnForGenerate.txt", output_filename="chess_booklet_summary.txt"):
        """Generate a complete booklet from pgnForGenerate.txt"""

        # Read the input file
        input_text = self.read_pgn_file(input_filename)
        if not input_text:
            return []

        games_data = self.parse_input_text(input_text)

        all_positions = []

        for i, (pgn, notes, tags) in enumerate(games_data):
            print(f"\nProcessing game {i+1}...")
            print(f"Tags: {', '.join(tags) if tags else 'None'}")

            positions = self.process_pgn_to_positions(pgn, notes, tags)
            all_positions.extend(positions)

        # Generate summary report
        with open(output_filename, 'w') as f:
            f.write("Chess Booklet Generation Summary\n")
            f.write("=" * 40 + "\n\n")
            f.write(f"Input file: {input_filename}\n")
            f.write(f"Move interval: Every {self.move_interval} moves\n")
            f.write(f"Total games processed: {len(games_data)}\n")
            f.write(f"Total positions generated: {len([p for p in all_positions if p['type'] == 'position'])}\n")
            f.write(f"Total note pages: {len([p for p in all_positions if p['type'] == 'note'])}\n\n")

            f.write("Generated files:\n")
            for pos in all_positions:
                if pos['type'] == 'position':
                    f.write(f"  {pos['filename']} - Move {pos['move_number']}\n")
                else:
                    f.write(f"  {pos['filename']} - Notes\n")

        print(f"\nBooklet generation complete!")
        print(f"Summary written to: {output_filename}")
        print(f"Generated {len(all_positions)} total files")

        return all_positions


def main():
    """Main function"""

    # Create generator (every move, starting from image1)
    generator = ChessBookletGenerator(move_interval=1, start_count=1)

    # Generate booklet from pgnForGenerate.txt
    positions = generator.generate_booklet()

    # Instructions for converting to PNG
    print("\nTo convert PDFs to PNGs, run:")
    print("cd generated_images_for_booklet && for pdf in *.pdf; do magick \"$pdf\" \"${pdf%.pdf}.png\"; done")


if __name__ == "__main__":
    main()
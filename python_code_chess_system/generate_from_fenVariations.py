#!/usr/bin/env python3
"""
FEN Variations Image Generator
Reads FEN positions from fenvariations.txt and creates chess board images
with sequential suffixes based on a base name.

Usage:
python generate_from_fenVariations.py "image15"

This will create:
- image15b.png (first FEN)
- image15c.png (second FEN)
- image15d.png (third FEN)
- etc.
"""

import sys
import os
import chess
import chess.svg
import io
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPDF
import matplotlib.pyplot as plt
import matplotlib.patches as patches


def svg_to_pdf(svg_data, filename):
    """Convert SVG chess board to PDF"""
    drawing = svg2rlg(io.StringIO(svg_data))
    renderPDF.drawToFile(drawing, filename)


def is_fen_position(text):
    """Check if a line contains a valid FEN position"""
    text = text.strip()
    if not text:
        return False

    # Basic FEN validation - should have the characteristic pattern
    # FEN has 6 space-separated parts: position, active color, castling, en passant, halfmove, fullmove
    parts = text.split()
    if len(parts) != 6:
        return False

    # First part should contain chess piece notation and slashes
    position_part = parts[0]
    if '/' not in position_part:
        return False

    # Should have 8 ranks (7 slashes)
    if position_part.count('/') != 7:
        return False

    # Active color should be 'w' or 'b'
    if parts[1] not in ['w', 'b']:
        return False

    return True


def convert_chess_symbols(text):
    """Convert chess notation symbols from $ codes to readable symbols"""
    # Chess Notation Symbol conversions
    symbol_map = {
        '$1': '!',      # good move
        '$2': '?',      # mistake
        '$3': '!!',     # brilliant move
        '$4': '??',     # blunder
        '$5': '!?',     # interesting move
        '$6': '?!',     # questionable move
        '$7': '□',      # forced move
        '$8': '○',      # singular move
        '$9': 'X',      # interesting move (alternative)
        '$10': '=',     # equal position
        '$11': '∞',     # unclear position
        '$12': '∞',     # unclear position
        '$13': '∞',     # unclear position
        '$14': '±',     # slight advantage for white
        '$15': '∓',     # slight advantage for black
        '$16': '±',     # advantage for white
        '$17': '∓',     # advantage for black
        '$18': '+-',    # winning for white
        '$19': '-+',    # winning for black
    }

    # Replace all symbol codes
    for code, symbol in symbol_map.items():
        text = text.replace(code, symbol)

    return text


def create_text_image(text, filename, width=12, height=4):
    """Create an image with text content"""
    fig, ax = plt.subplots(figsize=(width, height))

    # Clean up text and convert chess symbols
    text = text.replace('\\n', '\n')
    text = text.strip('"')  # Remove quotes if present
    text = convert_chess_symbols(text)

    # Set up the plot with chess-specific styling
    ax.text(0.5, 0.5, text,
           fontsize=14,
           ha='center',
           va='center',
           weight='normal',
           family='monospace',
           bbox=dict(boxstyle="round,pad=0.5", facecolor="lightyellow", alpha=0.9))

    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis('off')

    # Add a border
    border = patches.Rectangle((0.05, 0.05), 0.9, 0.9,
                             linewidth=2, edgecolor='darkgreen',
                             facecolor='none')
    ax.add_patch(border)

    plt.tight_layout()
    plt.savefig(filename, bbox_inches='tight', pad_inches=0.2, dpi=150)
    plt.close(fig)

    print(f"Text image created: {filename}")


def read_board_orientation(filename="board_orientation.txt"):
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


def read_file_content(filename="fenvariations.txt"):
    """Read content from file and maintain original order with type information"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f"File {filename} not found!")
        return []

    # Keep original order with type information
    content_items = []

    for line in lines:
        line = line.strip()
        if not line or line.startswith('#'):
            continue

        if is_fen_position(line):
            content_items.append({'type': 'fen', 'content': line})
        else:
            content_items.append({'type': 'text', 'content': line})

    return content_items


def generate_fen_variations(base_name, input_file="fenvariations.txt"):
    """Generate chess board images from FEN variations and text images from text lines in original order"""

    # Create output directory if it doesn't exist
    output_dir = "./generated_images_for_booklet"
    os.makedirs(output_dir, exist_ok=True)

    # Read content from file
    content_items = read_file_content(input_file)

    if not content_items:
        print(f"No content found in {input_file}")
        return

    text_count = sum(1 for item in content_items if item['type'] == 'text')
    fen_count = sum(1 for item in content_items if item['type'] == 'fen')

    print(f"Found {text_count} text lines and {fen_count} FEN positions")
    print(f"Base name: {base_name}")
    print(f"Output directory: {output_dir}")
    print("=" * 50)

    # Generate images with sequential suffixes starting from 'b', maintaining original order
    images_created = []
    board_size = 350
    orientation = read_board_orientation()  # Read from board_orientation.txt
    current_suffix_index = 0

    # Process content items in their original order
    for i, item in enumerate(content_items):
        try:
            # Generate suffix: b, c, d, e, f, ...
            suffix = chr(ord('b') + current_suffix_index)

            if item['type'] == 'text':
                # Create text image
                filename = os.path.join(output_dir, f"{base_name}{suffix}.png")
                create_text_image(item['content'], filename)
                images_created.append(filename)
                print(f"Created text image {filename}: {item['content'][:50]}...")

            elif item['type'] == 'fen':
                # Create chess board from FEN
                board = chess.Board(item['content'])
                filename = os.path.join(output_dir, f"{base_name}{suffix}.pdf")

                # Generate SVG and convert to PDF
                svg = chess.svg.board(board, size=board_size, orientation=orientation)
                svg_to_pdf(svg, filename)

                images_created.append(filename)
                print(f"Created chess board {filename} from FEN: {item['content'][:30]}...")

            current_suffix_index += 1

        except Exception as e:
            print(f"Error processing {item['type']} '{item['content']}': {e}")
            continue

    print("=" * 50)
    print(f"✅ Generated {len(images_created)} images in original order:")
    print(f"   - {text_count} text images (PNG)")
    print(f"   - {fen_count} chess board images (PDF)")
    for img in images_created:
        print(f"  {img}")

    # Convert PDFs to PNGs (optional)
    if fen_count > 0:  # Only show conversion instruction if there are PDFs
        print(f"\nTo convert PDF chess boards to PNG files, run:")
        print(f"cd {output_dir} && for pdf in {base_name}*.pdf; do magick \"$pdf\" \"${{pdf%.pdf}}.png\"; done")
        print(f"\nTo remove PDF files after conversion:")
        print(f"cd {output_dir} && rm {base_name}*.pdf")

    return images_created


def main():
    """Main function"""
    if len(sys.argv) != 2:
        print("Usage: python generate_from_fenVariations.py \"base_name\"")
        print("Example: python generate_from_fenVariations.py \"image15\"")
        print("")
        print("This will create images in original file order:")
        print("  image15b.pdf (first FEN from fenvariations.txt)")
        print("  image15c.png (first text line)")
        print("  image15d.pdf (second FEN position)")
        print("  image15e.png (second text line)")
        print("  etc.")
        sys.exit(1)

    base_name = sys.argv[1]

    print("FEN Variations Image Generator")
    print("=" * 40)

    generate_fen_variations(base_name)


if __name__ == "__main__":
    main()
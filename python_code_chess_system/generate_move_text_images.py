#!/usr/bin/env python3
"""
Move Text Image Generator
Reads PGN from pgnForGenerate.txt and creates text images for each move pair (e.g., "1. e4 e5")
Names them as image02a.png, image04a.png, image06a.png, etc. (even numbers with 'a' suffix)
These come after each black move for proper concatenation order.

Usage:
python generate_move_text_images.py
"""

import os
import re
import matplotlib.pyplot as plt
import matplotlib.patches as patches


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


def create_move_text_image(text, filename, width=12, height=3):
    """Create an image with the move text"""
    fig, ax = plt.subplots(figsize=(width, height))

    # Clean up text and convert chess symbols
    text = text.replace('\\n', '\n')
    text = convert_chess_symbols(text)

    # Set up the plot with chess-specific styling
    ax.text(0.5, 0.5, text,
           fontsize=18,
           ha='center',
           va='center',
           weight='bold',
           family='monospace',
           bbox=dict(boxstyle="round,pad=0.5", facecolor="lightcyan", alpha=0.9))

    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis('off')

    # Add a border
    border = patches.Rectangle((0.05, 0.05), 0.9, 0.9,
                             linewidth=2, edgecolor='darkblue',
                             facecolor='none')
    ax.add_patch(border)

    plt.tight_layout()
    plt.savefig(filename, bbox_inches='tight', pad_inches=0.2, dpi=150)
    plt.close(fig)

    print(f"Move image created: {filename}")


def format_pgn_to_move_lines(pgn_text):
    """Convert compact PGN to individual move lines"""

    # Clean up the PGN text
    pgn_text = pgn_text.strip()

    # Remove result at the end (0-1, 1-0, 1/2-1/2)
    result_pattern = r'\s+(0-1|1-0|1/2-1/2)\s*$'
    result_match = re.search(result_pattern, pgn_text)
    result = result_match.group(1) if result_match else ""
    pgn_text = re.sub(result_pattern, '', pgn_text)

    # Remove variations for main line processing (keep it simple)
    variation_pattern = r'\([^)]+\)'
    clean_pgn = re.sub(variation_pattern, '', pgn_text)
    clean_pgn = re.sub(r'\s+', ' ', clean_pgn).strip()

    # Split by move numbers but keep the move numbers
    pattern = r'(\d+)\.\s+'
    parts = re.split(pattern, clean_pgn)

    # Remove empty first element if exists
    if parts and parts[0].strip() == '':
        parts = parts[1:]

    move_lines = []

    # Process pairs of (move_number, move_content)
    for i in range(0, len(parts) - 1, 2):
        if i + 1 >= len(parts):
            break

        move_num = parts[i]
        move_content = parts[i + 1].strip()

        move_line = f"{move_num}. {move_content}"
        move_lines.append(move_line)

    return move_lines, result


def process_pgn_file(input_file="pgnForGenerate.txt"):
    """Process PGN from file and create text images for each move pair"""

    # Create output directory if it doesn't exist
    output_dir = "./generated_images_for_booklet"
    os.makedirs(output_dir, exist_ok=True)
    print(f"Output directory: {output_dir}")

    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"File {input_file} not found!")
        return

    # Find first occurrence of ### ### and only process content before it
    delimiter_pattern = r'###\s*###'
    match = re.search(delimiter_pattern, content)

    if match:
        content = content[:match.start()].strip()
    else:
        content = content.strip()

    lines = content.split('\n')
    pgn_lines = []

    # Extract PGN lines (similar to chess_booklet_generator.py)
    for line in lines:
        line = line.strip()
        if not line or line.startswith('@'):
            continue

        # If line contains move numbers and chess notation, it's PGN
        if re.search(r'\d+\.\s*[a-zA-Z]', line):
            pgn_lines.append(line)

    if not pgn_lines:
        print("No PGN content found!")
        return

    # Join PGN lines and format
    pgn_text = ' '.join(pgn_lines)
    move_lines, result = format_pgn_to_move_lines(pgn_text)

    if not move_lines:
        print("No moves found!")
        return

    print(f"Found {len(move_lines)} move pairs to process")

    # Create text image for each move pair
    # Use even numbers with 'a' suffix: 02a, 04a, 06a, etc.
    images_created = []
    for i, move_text in enumerate(move_lines):
        # Calculate the corresponding move number (2, 4, 6, 8, ...)
        move_number = (i + 1) * 2  # 2, 4, 6, 8, ...
        image_filename = os.path.join(output_dir, f"image{move_number:02d}a.png")

        create_move_text_image(move_text, image_filename)
        images_created.append(image_filename)

        print(f"Move pair {i+1}: '{move_text}' → {image_filename}")

    # Create result image if exists
    if result:
        # Put result after the last move pair
        last_move_number = (len(move_lines) + 1) * 2
        result_filename = os.path.join(output_dir, f"image{last_move_number:02d}a.png")
        create_move_text_image(f"Result: {result}", result_filename)
        images_created.append(result_filename)
        print(f"Result: '{result}' → {result_filename}")

    print(f"\nMove text image generation complete!")
    print(f"Created {len(images_created)} images:")
    for img in images_created:
        print(f"  {img}")

    print(f"\nConcatenation order will be:")
    print("generated_images_for_booklet/image01.pdf (1. e4), generated_images_for_booklet/image02.pdf (1...e5), generated_images_for_booklet/image02a.png (1. e4 e5)")
    print("generated_images_for_booklet/image03.pdf (2. Nf3), generated_images_for_booklet/image04.pdf (2...Nc6), generated_images_for_booklet/image04a.png (2. Nf3 Nc6)")
    print("generated_images_for_booklet/image05.pdf (3. Bb5), generated_images_for_booklet/image06.pdf (3...Bc5), generated_images_for_booklet/image06a.png (3. Bb5 Bc5)")
    print("etc...")

    return images_created


def main():
    """Main function"""
    print("Move Text Image Generator")
    print("Creates text images for move pairs with 'a' suffix after black moves")
    print("=" * 65)

    process_pgn_file()


if __name__ == "__main__":
    main()
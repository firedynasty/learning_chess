#!/usr/bin/env python3
"""
Text Image Generator
Creates a text image with the next available image number

Usage:
python generate_text.py "this is a brilliant move"
"""

import sys
import os
import glob
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import re


def find_next_image_number(output_dir="./generated_images_for_booklet"):
    """Find the next available image number"""
    # Get all existing image files (both PNG and PDF) from output directory
    pattern1 = os.path.join(output_dir, 'image*.png')
    pattern2 = os.path.join(output_dir, 'image*.pdf')
    image_files = glob.glob(pattern1) + glob.glob(pattern2)

    if not image_files:
        return 1

    # Extract numbers from filenames
    numbers = []
    for filename in image_files:
        match = re.search(r'image(\d+)', filename)
        if match:
            numbers.append(int(match.group(1)))

    if not numbers:
        return 1

    return max(numbers) + 1


def create_text_image(text, filename, width=10, height=6):
    """Create an image with the given text"""
    fig, ax = plt.subplots(figsize=(width, height))

    # Clean up text
    text = text.replace('\\n', '\n')

    # Set up the plot with larger font for standalone text
    ax.text(0.5, 0.5, text,
           fontsize=16,
           ha='center',
           va='center',
           wrap=True,
           bbox=dict(boxstyle="round,pad=0.5", facecolor="lightyellow", alpha=0.9))

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

    print(f"Text image created: {filename}")


def main():
    """Main function"""
    # Create output directory if it doesn't exist
    output_dir = "./generated_images_for_booklet"
    os.makedirs(output_dir, exist_ok=True)
    print(f"Output directory: {output_dir}")

    if len(sys.argv) < 2:
        print("Usage: python generate_text.py \"your text here\"")
        print("   OR: python generate_text.py \"custom_filename\" \"your text here\"")
        print("Example: python generate_text.py \"this is a brilliant move\"")
        print("Example: python generate_text.py \"image01b\" \"should not put pawn ahead of bishop\"")
        sys.exit(1)

    if len(sys.argv) == 2:
        # Single argument: auto-generate filename
        text = sys.argv[1]

        # Find next available image number
        next_num = find_next_image_number(output_dir)
        filename = os.path.join(output_dir, f"image{next_num}.png")

    elif len(sys.argv) == 3:
        # Two arguments: custom filename and text
        custom_name = sys.argv[1]
        text = sys.argv[2]

        # Add .png extension if not present
        if not custom_name.endswith('.png'):
            filename = os.path.join(output_dir, f"{custom_name}.png")
        else:
            filename = os.path.join(output_dir, custom_name)

    else:
        print("Error: Too many arguments")
        print("Usage: python generate_text.py \"your text here\"")
        print("   OR: python generate_text.py \"custom_filename\" \"your text here\"")
        sys.exit(1)

    # Create the text image
    create_text_image(text, filename)

    print(f"Created {filename} with text: {text[:50]}...")


if __name__ == "__main__":
    main()
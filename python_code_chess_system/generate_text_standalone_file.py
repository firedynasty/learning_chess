#!/usr/bin/env python3
"""
Batch Text Image Generator
Reads textForGenerate.txt and creates one image per line

Usage:
python generate_text_standalone.py
"""

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
           bbox=dict(boxstyle="round,pad=0.5", facecolor="lightgreen", alpha=0.9))

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


def process_text_file(filename="textForGenerate.txt"):
    """Process textForGenerate.txt and create images for each line"""

    # Create output directory if it doesn't exist
    output_dir = "./generated_images_for_booklet"
    os.makedirs(output_dir, exist_ok=True)
    print(f"Output directory: {output_dir}")

    # Check if file exists
    if not os.path.exists(filename):
        print(f"File {filename} not found!")
        print("Create textForGenerate.txt with one text line per image you want to generate.")
        return

    # Read the file
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Filter out empty lines
    lines = [line.strip() for line in lines if line.strip()]

    if not lines:
        print(f"No text found in {filename}")
        return

    print(f"Found {len(lines)} lines of text to process")

    # Find starting image number
    start_num = find_next_image_number(output_dir)

    # Process each line
    images_created = []
    for i, text in enumerate(lines):
        image_num = start_num + i
        image_filename = os.path.join(output_dir, f"image{image_num}.png")

        create_text_image(text, image_filename)
        images_created.append(image_filename)

        print(f"Line {i+1}: '{text[:50]}...' → {image_filename}")

    print(f"\nBatch processing complete!")
    print(f"Created {len(images_created)} images:")
    for img in images_created:
        print(f"  {img}")

    return images_created


def main():
    """Main function"""
    print("Batch Text Image Generator")
    print("=" * 30)

    images = process_text_file()

    if images:
        print(f"\nNext available image number: {find_next_image_number()}")
        print("\nTo add more text images:")
        print("1. Add lines to textForGenerate.txt")
        print("2. Run: python generate_text_standalone_file.py")


if __name__ == "__main__":
    main()
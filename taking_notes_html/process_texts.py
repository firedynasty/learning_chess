#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import json
import csv
import re
import argparse

def extract_title_from_file(file_path):
    """Extract a title from the file content or file name."""
    file_name = os.path.basename(file_path)
    base_name = os.path.splitext(file_name)[0]
    extension = os.path.splitext(file_name)[1][1:]
    return f"{base_name} ({extension})"

def process_txt_file(file_path):
    """Process a text file and split into table rows."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read().strip()
    
    # Get filename for second column
    filename = os.path.basename(file_path)
    
    # Split content by lines and create table rows
    lines = content.split('\n')
    table_rows = []
    
    for line in lines:
        line = line.strip()
        if line:  # Skip empty lines
            table_row = f'<tr><td style="border: 1px solid black;">{line}</td><td style="border: 1px solid black;">{filename}</td></tr>'
            table_rows.append(table_row)
    
    return "".join(table_rows)

def process_csv_file(file_path):
    """Process a CSV file and convert to chess table format."""
    content_lines = []
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            reader = csv.reader(f)
            for row in reader:
                if row:  # Skip empty rows
                    # Convert CSV row to HTML table row format like $newInfo
                    cell1 = row[0] if len(row) > 0 else ""
                    cell2 = row[1] if len(row) > 1 else ""
                    table_row = f'<tr><td style="border: 1px solid black;">{cell1}</td><td style="border: 1px solid black;">{cell2}</td></tr>'
                    content_lines.append(table_row)
    except Exception as e:
        return f"Error reading CSV: {str(e)}"
        
    return "".join(content_lines)

def process_directory(texts_dir, output_path=None):
    """Process all text files in the given directory and create JavaScript object like dictionaryDatabase."""
    # Dictionary to store all processed files
    processed_data = {}
    
    # Process all .txt files
    txt_files = [f for f in os.listdir(texts_dir) if f.endswith('.txt')]
    for file_name in sorted(txt_files):
        file_path = os.path.join(texts_dir, file_name)
        title = extract_title_from_file(file_path)
        content = process_txt_file(file_path)
        
        if content:  # Only add non-empty content
            # Use filename without extension as key
            key = os.path.splitext(file_name)[0]
            processed_data[key] = content
    
    # Process all .csv files
    csv_files = [f for f in os.listdir(texts_dir) if f.endswith('.csv')]
    for file_name in sorted(csv_files):
        file_path = os.path.join(texts_dir, file_name)
        title = extract_title_from_file(file_path)
        content = process_csv_file(file_path)
        
        if content:  # Only add non-empty content
            # Use filename without extension as key
            key = os.path.splitext(file_name)[0]
            processed_data[key] = content
    
    # Create JavaScript object similar to dictionaryDatabase
    js_object_content = "let dictionaryDatabaseFromFolder = {\n"
    for key, content in processed_data.items():
        # Escape quotes and newlines for JavaScript string
        escaped_content = content.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n').replace('\r', '')
        js_object_content += f"  '{key}': '{escaped_content}',\n"
    js_object_content = js_object_content.rstrip(',\n') + "\n};\n"
    
    # Determine output path
    if output_path is None:
        base_dir = os.path.dirname(os.path.abspath(__file__))
        output_path = os.path.join(base_dir, "template_data_chess.js")
    
    # Save to a JS file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_object_content)
    
    print(f"Generated chess template data with {len(processed_data)} entries to {output_path}")
    
    return processed_data

def main():
    # Parse command line arguments
    parser = argparse.ArgumentParser(description='Process text files for chess application.')
    parser.add_argument('-i', '--input', default='./folder_w_txt_csvs',
                        help='Directory containing the text files (default: ./folder_w_txt_csvs)')
    parser.add_argument('-o', '--output', default=None,
                        help='Output file path (default: ./template_data_chess.js)')
    
    args = parser.parse_args()
    
    # Process the directory
    process_directory(args.input, args.output)

if __name__ == "__main__":
    main()
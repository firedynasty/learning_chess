# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a chess study tool originally created from a CodePen (https://codepen.io/Groundedelectron/pen/KKxgbmv). It's a browser-based application for analyzing chess positions and games, with functionality to navigate through move sequences and study chess positions.

## Development Commands

This is a static HTML/CSS/JavaScript project with no build system. To run:

1. **Development**: Open `dist/index.html` in a web browser
2. **Files to edit**: 
   - `dist/index.html` - Main HTML file
   - `dist/script.js` - JavaScript functionality
   - `dist/style.css` - Styling
   - `src/` directory contains similar files (possibly for development)

No package manager, build tools, or test frameworks are configured.

## Code Architecture

### Core Components

- **Chess Board**: Uses chessboard.js library (loaded from CDN) for interactive chess board display
- **Position Management**: Handles FEN (Forsyth-Edwards Notation) positions for chess board states
- **Table System**: Two main tables (`my-table` and `my-table2`) for displaying chess data and move sequences
- **Navigation**: Keyboard shortcuts and buttons for navigating through positions

### Key Files

- `dist/script.js:1-20` - Chess board initialization with drag/drop functionality
- `dist/script.js:72-120` - Table click handlers for position selection
- `dist/script.js:534-872` - Comprehensive keyboard navigation system
- `dist/script.js:374-418` - Data retrieval system with predefined chess game data

### External Dependencies

- jQuery 2.2.4 (from CDN)
- chessboard.js (from CDN)
- PapaParse 4.3.5 (from CDN)  
- chess.js library (from CDN)

### Key Features

1. **Interactive Chess Board**: Drag/drop pieces with FEN position tracking
2. **Keyboard Navigation**: Number keys (1-9,0) for quick position jumps, arrow keys for move navigation, brackets for table navigation
3. **Data Management**: Predefined chess game databases with dropdown selection
4. **Text Processing**: Convert between different data formats (semicolon-separated, tab-separated)
5. **Move Highlighting**: Visual feedback for current positions and moves
6. **PGN Support**: Automatic detection and parsing of PGN (Portable Game Notation) data
7. **Array-based Navigation**: Efficient position management using `currentGamePositions` array

### Important Functions

- `highlightCell(rowNumber)` - Main function for navigating to specific table rows and populating `currentGamePositions` array
- `loadPosition(index)` - Loads a specific position from `currentGamePositions` array to the board
- `isPgnContent(text)` - Detects if text content is PGN format using scoring system
- `parsePgnToPositions(pgnString)` - Converts PGN notation to array of FEN positions
- `repopulateDropdown()` - Manages database selection dropdown
- `getSelectedText_to_gotoHighlightedLink()` - Text selection to board position

### Navigation Architecture

The navigation system uses two levels:
1. **Bracket Navigation** (bracket left/right): Selects games/content and populates `currentGamePositions` array
2. **Arrow Navigation** (left/right arrows): Navigates through positions in the `currentGamePositions` array

Supports both semicolon-delimited FEN positions and PGN notation with automatic detection.

The application is designed for chess study and analysis, allowing users to step through games, analyze positions, and manage chess data in tabular format.
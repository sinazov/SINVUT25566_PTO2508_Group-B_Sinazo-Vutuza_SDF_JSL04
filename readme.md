JSL04 – Dynamic Task Display & Modal View
Project Overview

This project is a Kanban-style task board that dynamically displays tasks in TODO, DOING, and DONE columns. Tasks can be clicked to open a modal showing details, and the board automatically populates from JavaScript data.

Features

Dynamic task rendering in columns based on status.

Clickable task cards that open a modal with:

Task title

Task description

Status selection

Clear separation of tasks using DOM manipulation.

Modular and reusable JavaScript code.

File Structure
JSL04/
├─ index.html           # Main HTML layout
├─ styles.css           # Project styling
├─ script.js            # JavaScript logic for task rendering & modal
├─ assets/              # Images and icons (e.g., favicon.svg, logo-light.svg)
How It Works

Initial Tasks: Defined in script.js as an array of task objects with title, description, and status.

Render Tasks: JS dynamically creates task cards and appends them to the appropriate column.

Modal Functionality: Clicking a task card opens a modal pre-filled with task details.

Clear Cards: Before rendering, any existing task cards are removed to prevent duplicates.

Usage

Open index.html in a browser.

The board will populate automatically with predefined tasks.

Click on any task card to view details in the modal.

Technologies Used

HTML5

CSS3

JavaScript (Vanilla JS, DOM Manipulation)
# library

A simple web application to manage a personal library, where users can add, remove books, and toggle the read status. Each book is displayed with its title, author, and page count, with a layout inspired by bookshelves.

Project Structure
index.html: Contains the HTML structure for the application, including a dialog for adding and editing book entries and a library section displaying all books.
style.css: Defines the styling for the application, including the layout for the book display, the dialog form, and button styling.
script.js: Provides the main functionality for the library, handling book data, dynamic display updates, and dialog interactions.
Features

Add New Books:

Click the Add Book button to open a dialog form where you can enter book details: Title, Author, Pages, and Read status.
Submit the form to add the book to your library, which appears as a card with the title on the "spine" and a color-coded background.

Remove Books:

Click the Remove icon on any book card to delete it from the library.

Toggle Read Status:

Click the Read icon on a book to toggle its read status, changing the icon color to visually indicate whether it’s read or unread.
Files
index.html

Contains the structure of the library app, including:
A header with an Add Book button.
A dialog with a form for adding and editing book information.
A library section displaying each book in a styled card with title, author, page count, and action buttons (Read/Remove).
style.css

Styles the layout and look of the library:
Customizes the header, book cards, and dialog form.
Uses a random color generator for book cards and provides hover effects on buttons.
Includes a custom SVG icon with different color states for read/unread status.
script.js

Provides functionality and event handling for the library:
Book constructor function to create book objects with title, author, pages, and read status.
addBookToLibrary() function to add new books from the dialog form.
refreshDisplay() function to update the library display whenever changes are made.
Event Listeners:
Add Book button: Opens the add book dialog.
Book Title and Author: Opens the edit book dialog with pre-filled information.
Submit and Cancel buttons: Handle form submissions and closing the dialog.
Read and Remove buttons: Toggle read status and remove books respectively.

Usage

Running the App:

Open index.html in your browser.
Use the Add Book button to populate the library.
Edit, toggle, and remove books using the appropriate icons.

Customizing Book Colors:

To adjust random book colors, modify the bookColor() function in script.js.

Future Enhancements

Edit added books properties
Implement sorting and filtering by book attributes (e.g., title, author, read status).
Add storage to save the library data between sessions using local storage or a database.

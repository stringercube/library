const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let isread = this.read === "yes" ? "have read." : "have not read.";
        console.log(this.title + " written by " + this.author
                + " with " + this.pages + " pages that I " + isread)
    };
    this.readit = function() {
        if (this.read === 'yes') {
            this.read = 'no';
        } else {
            this.read = 'yes';
        }
    };
};


function addBookToLibrary() {
  // TODO append book structure in html with consistent classes
  
  
  
  
  // TODO receives input from dialog form
  
  
  
  
  // TODO push book to library
  
  
  
  
  // TODO fill in info in html
}

// populate library with some books

const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 214, 'no');

myLibrary.push(book1);

const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, 'no');

myLibrary.push(book2);

const book3 = new Book('1984', 'George Orwell', 328, 'yes');

myLibrary.push(book3);

// add existing books to a book card in html

document.addEventListener('DOMContentLoaded', () => {
    const booklist = document.querySelectorAll('.book');
    let i = -1;
    booklist.forEach((book) => {
        i += 1;
        let title = book.querySelector('.title');
        let author = book.querySelector('.author');
        let pages = book.querySelector('.pages');
        let read = book.querySelector('.read');
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;
        read.textContent = myLibrary[i].read;
    });    
});

// function for removing book in each card

function removeBook(event) {
    const activeBook = event.target.parentNode;
    activeBook.remove();
};

// function to toggle read in each card

function toggle(event) {
    const activeBook = event.target.parentNode;
    const index= activeBook.dataset.index;
    
    myLibrary[index].readit();

    const isread = activeBook.querySelector('.read');
    isread.textContent = myLibrary[index].read;

};

function createAndAppendElement(parent, tag, className, textContent = '') {
    const element = document.createElement(tag);    // Create the element
    element.classList.add(className);               // Add class
    element.textContent = textContent;              // Set text content if provided
    parent.appendChild(element);                    // Append it to the parent
    return element;
}

function appendBookStruct() {
    // Step 1: Create the new book element (div with class 'book')
    const newBook = document.createElement('div');
    newBook.classList.add('book');

    // Step 2: Set the dataset index
    newBook.dataset.index = myLibrary.length;

    // Step 3: Create and append the title, author, pages, and read elements
    createAndAppendElement(newBook, 'p', 'title');
    createAndAppendElement(newBook, 'p', 'author'); 
    createAndAppendElement(newBook, 'p', 'pages');
    createAndAppendElement(newBook, 'p', 'read'); 

    // Step 4: Create and append the 'read' and 'cancel' buttons
    createAndAppendElement(newBook, 'button', 'read', 'READ?');
    createAndAppendElement(newBook, 'button', 'cancel', 'CANCEL');

    // Step 5: Append the newBook to the 'library' element
    document.querySelector('.library').appendChild(newBook);
}


// TO DO add event listeners

// using event delegation

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('read')) {
        toggle(event);
    }
    if (event.target.classList.contains('remove')) {
        removeBook(event);
    }
});

// dialog opening

const dialog = document.querySelector('dialog');
const addBook = document.querySelector('.new-book');
const cancelButton = document.querySelector('dialog .cancel');
const submitBook = document.querySelector('button[type="submit"]');


addBook.addEventListener('click', () => {
    dialog.showModal();
});

// TO DO dialog submit




// TO DO dialog close

cancelButton.addEventListener('click', () => {
    dialog.close();
});
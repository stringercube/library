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
};


function addBookToLibrary() {
  // append book structure in html with consistent classes
  // receives input from dialog form
  // fill in info in html
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
    const isread = activeBook.querySelector('.read');
    
    if (isread.textContent === 'yes') {
        isread.textContent = 'no';
    } else {
        isread.textContent = 'yes';
    };
};

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

addBook.addEventListener('click', () => {
    dialog.showModal();
});
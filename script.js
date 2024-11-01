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
  
  // receives input from dialog form
    const inputData = fetchBookData();
  
  // push book to library
    const newEntry = new Book(...inputData);
    myLibrary.push(newEntry);

  //  append book in html with consistent classes and values
    appendBookElement(...inputData);        // spread operator to spread array elements
}   

// populate library with some books

const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 214, 'no');

myLibrary.push(book1);

const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, 'no');

myLibrary.push(book2);

const book3 = new Book('1984', 'George Orwell', 328, 'no');

myLibrary.push(book3);

// add existing books to a book card in html

document.addEventListener('DOMContentLoaded', () => {
    const booklist = document.querySelectorAll('.book');
    booklist.forEach((book, i) => {         // iterator included in forEach
        let title = book.querySelector('.title');
        let author = book.querySelector('.author');
        let pages = book.querySelector('.pages');
        let read = book.querySelector('.read');
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;
        read.textContent = myLibrary[i].read;

        if (read.textContent === 'no') {
            const readBtn = book.querySelector('img');
            readBtn.classList.add('not-read');
        };
        
        const pageCount = myLibrary[i].pages;
        book.style.width = `${pageCount / 1.5}px`; // Make books wider relative to their page count
        book.style.height = '500px';
        book.style.backgroundColor = bookColor();
    });    
});

// function for removing book in each card

function removeBook(event) {
    const activeBook = event.target.parentNode;
    const index = activeBook.dataset.index;
    
    let x = myLibrary.splice(index - 1, 1);     // removes book from myLibrary
    activeBook.remove();                    // removes html element
    indexUpdate();                          // rewrite html book index                 
};

// function to toggle read in each card

function toggle(event) {
    const activeBook = event.target.parentNode;
    indexUpdate();
    const index = activeBook.dataset.index;
    
    myLibrary[index-1].readit();

    const isread = activeBook.querySelector('.read');
    isread.textContent = myLibrary[index-1].read;
    
    const readIcon = activeBook.querySelector('img');

    if (isread.textContent === 'yes') {
        readIcon.classList.remove('not-read');
    } else {
        readIcon.classList.add('not-read');
    };
};

function createAndAppendElement(parent, tag, className = '', textContent = '') {
    const element = document.createElement(tag);    // Create the element
    if (className != '') {
        element.classList.add(className);               // Add class
    }
    element.textContent = textContent;              // Set text content if provided
    parent.appendChild(element);                    // Append it to the parent
    return element;
}

function appendBookElement(title, author, pages, read) {
    // Step 1: Create the new book element (div with class 'book')
    const newBook = document.createElement('div');
    newBook.classList.add('book');

    // Step 2: Set the dataset index
    newBook.dataset.index = myLibrary.length;

    // Step 3: Create and append the title, author, pages, and read elements with their values
    createAndAppendElement(newBook, 'div', 'info-container');

    const info = newBook.querySelector('.info-container');
    createAndAppendElement(info, 'p', 'title', title);
    createAndAppendElement(info, 'p', 'author', author); 
    createAndAppendElement(info, 'p', 'pages', pages);
    createAndAppendElement(info, 'p', 'read', read); 

    // Step 4: Create and append the 'read' and 'cancel' buttons
    createAndAppendElement(newBook, 'button', 'read');
    createAndAppendElement(newBook, 'button', 'remove');

    // Step 5: Associate icons to the buttons
    const readBtn = newBook.querySelector('button.read');
    const removeBtn = newBook.querySelector('button.remove');
    createAndAppendElement(readBtn, 'img');
    createAndAppendElement(removeBtn, 'img');

    readBtn.querySelector('img')
        .setAttribute('src', 'icons/local_library_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg');
    removeBtn.querySelector('img')
        .setAttribute('src', 'icons/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg');

    // Step 6: Append the newBook to the 'library' element
    document.querySelector('.library').appendChild(newBook);
    indexUpdate();

    // Step 7: Set width accordingly to the pages and book color
    newBook.style.width = `${pages / 1.5}px`; // Make books wider relative to their page count
    newBook.style.height = '500px';
    newBook.style.backgroundColor = bookColor();

    // Step 8: Set read icon with right color
    const readIcon = newBook.querySelector('img');

    if (read === "no") {
        readIcon.classList.add('not-read');
    };
}

function fetchBookData() {
    const dialog = document.querySelector('form');
    const title = dialog.querySelector('.title').value;
    const author = dialog.querySelector('.author').value;
    const pages = dialog.querySelector('.pages').value;
    const checkRead = dialog.querySelector('.read').checked;
    const read = checkRead ? "yes" : "no";
    return [title, author, pages, read];
}

// function that aligns index of html books and myLibrary after adding/removing

function indexUpdate () {
    const indexlist = document.querySelectorAll('[data-index]');
    let indexValue = 0;
    indexlist.forEach((index) => {
        indexValue += 1;
        index.dataset.index = indexValue;
    })
}

// function for random book color

function bookColor() {
    const choices = ['red', 'green', 'blue'];
    return choices[Math.floor(Math.random() * 3)];
}


// event listeners

// using event delegation for read remove book buttons

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

// dialog submit

submitBook.addEventListener('click', function(event) {
    event.preventDefault();         // ensures not page reloading
    addBookToLibrary();
    dialog.close();
});


// dialog close

cancelButton.addEventListener('click', () => {
    dialog.close();
});

// TO DO add event listener to info containers to edit existing info
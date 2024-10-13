const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let isread = read === "yes" ? "have read." : "have not read.";
        console.log(this.title + " written by " + this.author
                + " with " + this.pages + " pages that I " + isread)
    };
};


function addBookToLibrary() {
  // do stuff here
}

const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 214, 'no');

myLibrary.push(book1);

const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, 'no');

myLibrary.push(book2);

const book3 = new Book('1984', 'George Orwell', 328, 'yes');

myLibrary.push(book3);

console.table(myLibrary);
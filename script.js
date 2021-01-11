let myLibrary = [];
const newBookButton = document.getElementById("btn");
const container = document.getElementById("container");
//creates a book object
function Book(pages, author, title, read){
    this.pages = pages;
    this.author = author;
    this.title = title;
    this.read = read;
}
//appends a book to the end of the library
function addBookToLibrary(book){
    myLibrary.push(book);
}
//loops through array and displays it on the page on a table
function displayBook(){
    for(let i = 0;i < myLibrary.length; i++){
        let book = myLibrary[i];
        const tr = document.createElement('tr');
        for(let key in book){
            const td = document.createElement('td');
            td.innerHTML = book[key];
            tr.appendChild(td);
        }
        container.appendChild(tr);
    }
}
let Harry = new Book(300, "JK Rowling", "Harry Potter", false);
addBookToLibrary(Harry);
displayBook();
//this needs to bring up a new form that allows users to input details for the book
newBookButton.addEventListener('click', () => {
    const form = document.createElement('form');
});


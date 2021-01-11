let myLibrary = [];
const newBookButton = document.getElementById("newBook");
const container = document.getElementById("container");
//creates a book object
function Book(pages, author, title, read){
    this.pages = pages;
    this.author = author;
    this.title = title;
    this.read = read;
    this.isRead = function(){
        return this.read;
    }
}
//appends a book to the end of the library
function addBookToLibrary(book){
    myLibrary.push(book);
}
//loops through array and displays it on the page
function displayBook(){
    for(let i = 0;i < myLibrary.length; i++){
        let book = myLibrary[i];
        console.log("hi");
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const pages = book.pages;
        td1.innerHTML = pages;
        tr.appendChild(td1);
        const author = book.author;
        td2.innerHTML = author;
        tr.appendChild(td2);
        console.log("hi again");
        const title = book.title;
        td3.innerHTML = title;
        tr.appendChild(td3);
        const read = book.isRead(); 
        td4.innerHTML = read;
        tr.appendChild(td4);  
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


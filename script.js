let myLibrary = [];
const newBookButton = document.getElementById("newBook");
const container = document.getElementById("container");
function Book(pages, author, title, read){
    this.pages = pages;
    this.author = author;
    this.title = title;
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
        const div = document.createElement('div');
        div.innerHTML = book.pages+ "<br>" + book.author + "<br>" + book.title;
        div.setAttribute('class', 'card');
        div.setAttribute('style', `width: ${150}px;`);
        container.appendChild(div);
    }
}
//this needs to bring up a new form that allows users to input details for the book
newBookButton.addEventListener('click', () => {

});
displayBook();

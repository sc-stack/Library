let myLibrary = [];
const container = document.querySelector("#container");
function Book(genre, author, title, read){
    this.genre = genre;
    this.author = author;
    this.title = title;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}
function displayBook(){
    const div = document.createElement('div');
    div.setAttribute('class', 'card');
    container.appendChild(div);
}
displayBook();
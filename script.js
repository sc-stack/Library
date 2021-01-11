let myLibrary = [];
const newBookButton = document.getElementById("btn");
const container = document.getElementById("table");
const div = document.getElementById('container');
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
//sets a multiple attributes to a element at once
function setAttributes(el, attrs) {
    for(let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
let Harry = new Book(300, "JK Rowling", "Harry Potter", false);
addBookToLibrary(Harry);
displayBook();
//this needs to bring up a new form that allows users to input details for the book
newBookButton.addEventListener('click', () => {
    const form = document.createElement('form');
    const label1 = document.createElement('label');
    label1.setAttribute('for', 'pages');
    label1.innerHTML = 'Pages';
    const textField1 = document.createElement('input');
    setAttributes(textField1, {'type' : 'text', 'id' : 'pages', 'name': 'pages'});
    label1.appendChild(textField1);
    const label2 = document.createElement('label');
    label2.setAttribute('for', 'author');
    label2.innerHTML = 'Author';
    const textField2 = document.createElement('input');
    setAttributes(textField2, {'type' : 'text', 'id' : 'author', 'name': 'author'});
    label2.appendChild(textField2);
    const label3 = document.createElement('label');
    const textField3 = document.createElement('input');
    label3.setAttribute('for', 'title');
    label3.innerHTML = 'Title';
    console.log('hi');
    setAttributes(textField3, {'type' : 'text', 'id' : 'title', 'name': 'title'});
    label3.appendChild(textField3);
    const label4 = document.createElement('label');
    label4.setAttribute('for', 'read');
    label4.innerHTML = 'read';
    const textField4 = document.createElement('input');
    setAttributes(textField4, {'type' : 'text', 'id' : 'read', 'name': 'read'});
    label4.appendChild(textField4);
    form.appendChild(label1);
    form.appendChild(label2);
    form.appendChild(label3);
    form.appendChild(label4);
    div.appendChild(form);
});


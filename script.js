let myLibrary = [];
const submit = document.getElementById("btn");
const container = document.getElementById("table");
const div = document.getElementById('container');
const addButton = document.getElementById("add");
const form = document.getElementById('form');
const rowRemoveButton = document.createElement('button');
//creates a book object
function Book(pages, author, title, read, btn){
    this.pages = pages;
    this.author = author;
    this.title = title;
    this.read = read;
    this.btn = btn;
}
//appends a book to the end of the library
function addBookToLibrary(book){
    myLibrary.push(book);
}
//loops through array and displays it on the page on a table
function displayBook(){
        let book = myLibrary[myLibrary.length-1];
        const tr = document.createElement('tr');
        tr.setAttribute('data-index-number', "" + myLibrary.length);
        for(let key in book){
            const td = document.createElement('td');
            td.innerHTML = book[key];
            tr.appendChild(td);
        }
        container.appendChild(tr);
}
//removes the specific row from a table
function removeRow(dataIndexValue){
    const trs = document.querySelectorAll('tr');
    for(let i = 0; i< trs.length; i++){
        const tr = trs[i];
        if(tr.getAttribute('data-index-number') == dataIndexValue){
            container.deleteRow(dataIndexValue);
        }
    }
    return;
}
//gets value from radio groups
function getRadioValue(theRadioGroup)
{
    let elements = document.getElementsByName(theRadioGroup);
    for (let i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            return elements[i].value;
        }
    }
}
//addButton
addButton.addEventListener('click', () => {
    form.style.visibility = "visible";
});
//this needs to bring up a new form that allows users to input details for the book
submit.addEventListener('click', () => {
    const pages = document.getElementById('pages').value;
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const book = new Book(pages, author, title, getRadioValue('read'), rowRemoveButton);
    addBookToLibrary(book);
    displayBook();
    form.style.visibility = 'hidden';
});
//button that removes the book from its specified row
rowRemoveButton.addEventListener('click', removeRow(rowRemoveButton.parentNode.getAttribute('data-index-number')));


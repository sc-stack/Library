let myLibrary = [];
let cur = 1; 
const submit = document.getElementById("btn");
const container = document.getElementById("table");
const div = document.getElementById('container');
const addButton = document.getElementById("add");
const form = document.getElementById('form');
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
        tr.setAttribute('data-index-number', "" + cur);
        let i = 0;
        for(let key in book){
            if(i == 4){
                const td = document.createElement('td');
                td.appendChild(book[key]);
                tr.appendChild(td);
                book[key].addEventListener('click', () => {
                    removeRow(parseInt(book[key].parentNode.parentNode.getAttribute('data-index-number')));
                    reassignDataAttributes();
                });
            }else{
                const td = document.createElement('td');
                td.innerHTML = book[key];
                tr.appendChild(td);
                i++;
            }
        }
        cur++;
        container.appendChild(tr);
}
//reassigns all the data attributes once a row has been deleted from the table
function reassignDataAttributes(){
    const trs = document.querySelectorAll('tr');
    for(let i = 1;i < trs.length ; i++){
        let tr = trs[i];
        tr.setAttribute('data-index-number', i);
    }
}
//removes the specific row from a table
function removeRow(dataIndexValue){
    const trs = document.querySelectorAll('tr');
    for(let i = 0; i< trs.length; i++){
        const tr = trs[i];
        if(tr.getAttribute('data-index-number') == parseInt(dataIndexValue)){
            container.deleteRow(parseInt(dataIndexValue));
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
//function findParentE
//adds a new form
addButton.addEventListener('click', () => {
    form.style.visibility = "visible";
});
//this needs to bring up a new form that allows users to input details for the book
submit.addEventListener('click', () => {
    const rowRemoveButton = document.createElement('button');
    rowRemoveButton.setAttribute('type', 'button');
    rowRemoveButton.innerHTML = "Remove Book"
    rowRemoveButton.setAttribute('id', 'remove');
    const pages = document.getElementById('pages').value;
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const book = new Book(pages, author, title, getRadioValue('read'), rowRemoveButton);
    addBookToLibrary(book);
    displayBook();
    container.style.visibility = 'visible';
    form.style.visibility = 'hidden';
    //button that removes the book from its specified row
});
 

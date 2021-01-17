let myLibrary = [];
let cur = 1; 
const submit = document.getElementById("btn");
const container = document.getElementById("table");
const div = document.getElementById('container');
const addButton = document.getElementById("add");
const form = document.getElementById('form');
const readDiv = document.createElement('div');
readDiv.setAttribute('id', 'read');
if(!localStorage.getItem('pages')) {
    populateStorage();
  } else {
    setStyles();
  }
//creates a book object
function Book(pages, author, title, read, btn){
    this.pages = pages;
    this.author = author;
    this.title = title;
    this.read = read;
    this.btn = btn;
}
Book.prototype.changeRead = function(){
    this.read = !this.read;
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
                    if(myLibrary.length == 0) {
                        cur = 1;
                        form.style.visibility = 'hidden';
                    }
                    reassignDataAttributes();
                });
                break;
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
//gets current cell of table containing specific data
function getTd(val){
    const tds = document.querySelectorAll('TD');
    for(let i = 0; i< tds.length; i++){
        const td = tds[i];
        if(td.innerHTML == val){
            return td;
        }
    }
    return;
}
//gets current Row of table
function getTr(val){
    const trs = document.querySelectorAll("TR");
    for(let i = 0; i < trs.length; i++){
        const tr = trs[i];
        if(tr.dataIndexValue === val){
            return tr;
        }
    }
    return;
}
//reassigns all the data attributes once a row has been deleted from the table
function reassignDataAttributes(){
    const trs = document.querySelectorAll('tr');
    for(let i = 1;i < trs.length ; i++){
        if(myLibrary.length != 0){ 
        let tr = trs[i];
        tr.setAttribute('data-index-number', i);
        }
    }
}
//saves entire library to local storage every time a book is created
function saveToLocal(){
    //creates an instance of the storage object allowing manipulation of data items
            if(!localStorage.getItem('pages')){
                populateStorage();
            } else {
                setStyles();
            }
    
}
function setStyles(){
    //grab values from local storage
    let currentAmtOfPages = localStorage.getItem('pages');
    let currentAuthor = localStorage.getItem('author');
    let currentTitle = localStorage.getItem('title');
    let isRead = localStorage.getItem('read');
    let removeButton = localStorage.getItem('btn');
    //set values to keep in sync when page reloads
    document.getElementById('pages').value = currentAmtOfPages;
    document.getElementById('author').value = currentAuthor;
    document.getElementById('title').value = currentTitle;
    document.getElementById('read').value = isRead;
  //  document.getElementById('removeButton').value = removeButton;
    //sets the display everytime a screen is loaded
    const tr = document.createElement('tr');
    let arr = [document.getElementById('pages').value, document.getElementById('author').value, document.getElementById('title').value, document.getElementById('read').value];
    for(let i = 0 ;i < 4; i++){
        const td = getTd(arr[i]);
        td.innerHTML = arr[i];
        tr.appendChild(td);
    }
    container.appendChild(tr);
}
function populateStorage() {
    localStorage.setItem('pages', document.getElementById('pages').value);
    localStorage.setItem('author', document.getElementById('author').value);
    localStorage.setItem('title', document.getElementById('title').value);
    localStorage.setItem('read', document.getElementById('read').value);


   // setStyles();
  }
//checks if storage is compatible
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
//removes the specific row from a table
function removeRow(dataIndexValue){
    const trs = document.querySelectorAll('tr');
    for(let i = 0; i< trs.length; i++){
        const tr = trs[i];
        if(tr.getAttribute('data-index-number') == parseInt(dataIndexValue)){
            container.deleteRow(parseInt(dataIndexValue));
            myLibrary.splice(dataIndexValue-1,1);
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
//finds the specific button with a selected value
function findButton(val){
    const buttons = document.querySelectorAll('button');
    for(let i = 0; i < buttons.length; i++){
        if(buttons[i].innerHTML == val){
            return buttons[i];
        }
    }
    return;
}
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
    readDiv.innerHTML = getRadioValue('read');
    const read = document.getElementById('read').value;
    const book = new Book(pages, author, title, read, rowRemoveButton);
    addBookToLibrary(book);
    displayBook();
    container.style.visibility = 'visible';
    form.style.visibility = 'hidden';
   // const td = getTd(getRadioValue('read'));
   // const changeReadBtn = document.createElement('input');
  //  changeReadBtn.setAttribute('type', 'button');
  // changeReadBtn.setAttribute('id', 'change');
    //    changeReadBtn.addEventListener('click', () => {
    //        book.changeRead();
    //        td.innerHTML = book.read;
    //    });
    //td.appendChild(changeReadBtn);
});


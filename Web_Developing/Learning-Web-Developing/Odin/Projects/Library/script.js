/*eslint-disable*/
let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

const harryPotter = new Book("Good Book", 'J. K. Rowling', 222, true);

function addBookToLibrary(Book) {
    library.push(Book)
}

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

const button = document.querySelector('.add');
const addwindow = document.querySelector('.window');
const submitButton = document.querySelector('button[type="submit"]');


button.addEventListener('click', function () {
    addwindow.style.display = "block";
    addwindow.style.height = "30%";
    addwindow.style.width = "20%";
  });

const bookForm = document.querySelector("form");

bookForm.addEventListener('submit', function(s) {
    s.preventDefault();

    const bookTitle = bookForm.querySelector('#title').value;
    const bookAuthor = bookForm.querySelector('#author').value;
    const bookPages = bookForm.querySelector('#pages').value;
    const bookRead = bookForm.querySelector('input[name="read"]').checked;

    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    library.push(newBook);
    addBookToUI(newBook);
    addwindow.style.display = "none";

})
function renderLibrary() {
    const libraryContainer = document.getElementsByClassName("cards")[0];
    libraryContainer.innerHTML = "";
    for (let i = 0; i < library.length; i++){

        let div = document.createElement("div");
        div.className = "card";
        div.dataset.index = i;

        let div1 = document.createElement("div");
        div1.className = "title";
        div1.textContent = library[i].title;

        let div2 = document.createElement("div");
        div2.className = "author";
        div2.textContent = library[i].author;

        let div3 = document.createElement("div");
        div3.className = "pages";
        div3.textContent = library[i].pages;

        let div4 = document.createElement("div");
        div4.className = "read";


        if (library[i].read) {
            div4.textContent = "Read";
        } else {
            div4.textContent = "Not Read";
        };
        let div5container = document.createElement("div");
        let div5 = document.createElement("button");
        div5.className = "delete";
        div5container.className = "deletecontainer";
        div5.textContent = "Delete";

        div5.addEventListener("click", function() {
            const index = this.parentNode.dataset.index;
            deleteBook(index);
        });

        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);
        div5container.appendChild(div5);
        div.appendChild(div5container);

        libraryContainer.appendChild(div);
    }
}
renderLibrary();
function addBookToUI(book) {
    let div = document.createElement("div");
    div.className = "card";

    let div1 = document.createElement("div");
    div1.className = "title";
    div1.textContent = book.title;

    let div2 = document.createElement("div");
    div2.className = "author";
    div2.textContent = book.author;

    let div3 = document.createElement("div");
    div3.className = "pages";
    div3.textContent = book.pages;

    let div4 = document.createElement("div");
    div4.className = "read";

    if (book.read) {
        div4.textContent = "Read";
    } else {
        div4.textContent = "Not Read";
    };

    let div5container = document.createElement("div");
    let div5 = document.createElement("button");
    div5.className = "delete";
    div5container.className = "deletecontainer";
    div5.textContent = "Delete";

    div5.addEventListener("click", function() {
        const index = this.parentNode.dataset.index;
        deleteBook(index);
    });

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    div5container.appendChild(div5);
    div.appendChild(div5container);

    document.getElementsByClassName("cards")[0].appendChild(div);

}

function deleteBook(index) {
    library.splice(index, 1);
    renderLibrary();
}

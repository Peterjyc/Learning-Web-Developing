/*eslint-disable*/
let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

const harryPotter = new Book("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 222, true);

function addBookToLibrary(Book) {
    library.push(Book)
}

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

const button = document.querySelector('.add');
const window = document.querySelector('.window');

button.addEventListener('click', () => {
    block.style.display = block.style.display === 'block' ? 'none' : 'block';
  });

for (let i = 0; i < library.length; i++){

    let div = document.createElement("div");
    div.className = "card";

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

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);

    document.getElementsByClassName("cards")[0].appendChild(div);
}

let library = [];
const showForm = document.querySelector(".show-form");
const addBook = document.querySelector(".submit-book");
const addBookForm = document.querySelector("#book-form");
const main = document.querySelector(".main");
let counter = 0;

tempValues();

showForm.addEventListener("click", () => {
  console.log(library);

  addBookForm.elements["author"].value = "";
  addBookForm.elements["title"].value = "";
  addBookForm.elements["npages"].value = "";
  addBookForm.elements["read"].checked = false;
  addBookForm.style.visibility == "visible"
    ? (addBookForm.style.visibility = "hidden")
    : (addBookForm.style.visibility = "visible");
});

function Book(title, author, npages, read) {
  this.title = title;
  this.author = author;
  this.pages = npages;
  this.read = read;
}

function addBookToLibrary() {
  let author = addBookForm.elements["author"].value;
  let title = addBookForm.elements["title"].value;
  let pages = addBookForm.elements["npages"].value;
  let read = addBookForm.elements["read"].checked;

  if (author == "" || title == "") {
    return;
  }

  const book = new Book(title, author, pages, read);
  library.push(book);
  addBookForm.style.visibility = "hidden";
  createBookCards(book);
}

function createBookCards(book) {
  const card = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readWrapper = document.createElement("p");
  const label = document.createElement("label");
  const read = document.createElement("input");
  const button = document.createElement("button");

  label.setAttribute("for", "isRead" + counter);
  label.innerText = "Read";

  read.type = "checkbox";
  read.id = "isRead" + counter;
  read.name = "isRead";
  readWrapper.className = "card-read";
  readWrapper.appendChild(label);
  readWrapper.appendChild(read);
  readWrapper.style.display = "flex";

  pages.className = "card-pages";

  title.className = "card-title";

  author.className = "card-author";

  button.type = "button";
  button.classList.add("delete-book");
  button.innerText = "Delete";

  title.innerText = `Title: ${book["title"]}`;
  author.innerText = `Auhtor: ${book["author"]}`;
  pages.innerText = `Number of pages: ${book["pages"]}`;
  read.checked = book.read;

  card.classList.add("card");
  button.id = counter;
  let id = counter;
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(readWrapper);
  card.appendChild(button);

  main.appendChild(card);

  button.addEventListener("click", () => {
    --counter;
    console.log(counter);
    library.splice(counter);
    console.log(library);
    button.parentNode.remove();
  });

  read.addEventListener("change", () => {
    book.read = read.checked;
  });

  counter++;
}

function tempValues() {
  let a = new Book("Lord of the Rings", "J. R. R. Tolkien", 1178, true);
  let b = new Book("Eloquent JavaScript", "Marijn Haverbeke", 472, false);
  library.push(a);
  library.push(b);
  createBookCards(a);
  createBookCards(b);
}

let library = [];
const showForm = document.querySelector(".show-form");
const addBook = document.querySelector(".submit-book");
const addBookForm = document.querySelector("#book-form");
const main = document.querySelector(".main");

tempValues();

showForm.addEventListener("click", () => {
  addBookForm.elements["author"].value = "";
  addBookForm.elements["title"].value = "";
  addBookForm.style.visibility == "visible"
    ? (addBookForm.style.visibility = "hidden")
    : (addBookForm.style.visibility = "visible");
});

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  let author = addBookForm.elements["author"].value;
  let title = addBookForm.elements["title"].value;

  if (author == "" || title == "") {
    return;
  }

  const book = new Book(title, author);
  library.push(book);
  console.log(library);
  addBookForm.style.visibility = "hidden";
  createBookCards(book);
}

function createBookCards(book) {
  const card = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const button = document.createElement("button");

  title.className = "card-title";
  author.className = "card-author";
  button.type = "button";
  button.classList.add("delete-book");
  button.innerText = "Delete";

  title.innerText = `Title : ${book["title"]}`;
  author.innerText = `Auhtor: ${book["author"]}`;

  const buttons = document.createElement;
  card.classList.add("card");
  button.id = library.length;
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(button);

  main.appendChild(card);
}

function tempValues() {
  let a = new Book("some", "value");
  for (let i = 0; i < 8; i++) {
    library[i] = a;
    createBookCards(a);
  }
}

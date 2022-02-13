let library = [];
const showForm = document.querySelector(".show-form");
const addBook = document.querySelector(".submit-book");
const addBookForm = document.querySelector("#book-form");
const main = document.querySelector(".main");

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
  card.classList.add("card");
  card.innerHTML += `Title : ${book["title"]}, Auhtor: ${book["author"]} <br>`;

  main.appendChild(card);
}

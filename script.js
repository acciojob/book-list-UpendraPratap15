//your JS code here. If required.
// get form and inputs
const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const bookList = document.getElementById("book-list");

// handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (title === "" || author === "" || isbn === "") {
    return; // simple validation: do nothing on empty fields [web:57]
  }

  // create new table row
  const row = document.createElement("tr");

  // title cell
  const titleCell = document.createElement("td");
  titleCell.textContent = title;
  row.appendChild(titleCell);

  // author cell
  const authorCell = document.createElement("td");
  authorCell.textContent = author;
  row.appendChild(authorCell);

  // isbn cell
  const isbnCell = document.createElement("td");
  isbnCell.textContent = isbn;
  row.appendChild(isbnCell);

  // delete button cell
  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Clear";
  deleteBtn.className = "delete";
  deleteCell.appendChild(deleteBtn);
  row.appendChild(deleteCell);

  // add row to table body
  bookList.appendChild(row);

  // clear inputs
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
});

// delete row when clear button clicked
bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const row = e.target.closest("tr");
    if (row) {
      row.remove(); // remove the entire row [web:72]
    }
  }
});

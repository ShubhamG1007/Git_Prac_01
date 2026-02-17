const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A novel set in the Jazz Age exploring themes of wealth, love, and the American Dream." },
  { title: "1984", author: "George Orwell", description: "A dystopian novel about surveillance, totalitarianism, and loss of individuality." },
  { title: "To Kill a Mockingbird", author: "Harper Lee", description: "A story of racial injustice and moral growth in the American South." },
  { title: "The Hobbit", author: "J.R.R. Tolkien", description: "A fantasy adventure about Bilbo Baggins and his journey with dwarves." }
];

const bookList = document.getElementById("bookList");

books.forEach(book => {
  const bookDiv = document.createElement("div");
  bookDiv.className = "book";
  bookDiv.innerHTML = `
    <h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author}</p>
    <button onclick="alert('${book.description}')">Details</button>
  `;
  bookList.appendChild(bookDiv);
});

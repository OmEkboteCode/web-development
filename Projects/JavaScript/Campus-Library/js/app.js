"use strict";

// In a future sprint this in-memory data can be replaced with local storage or an API.
const libraryBooks = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", category: "Software", isBorrowed: false },
    { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt and David Thomas", category: "Software", isBorrowed: true },
    { id: 3, title: "Atomic Habits", author: "James Clear", category: "Personal Growth", isBorrowed: false },
    { id: 4, title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Computer Science", isBorrowed: false },
    { id: 5, title: "Deep Work", author: "Cal Newport", category: "Productivity", isBorrowed: true },
    { id: 6, title: "The Design of Everyday Things", author: "Don Norman", category: "Design", isBorrowed: false }
];

const bookGrid = document.querySelector("#bookGrid");
const searchInput = document.querySelector("#searchInput");
const resultsMessage = document.querySelector("#resultsMessage");
const totalBooksElement = document.querySelector("#totalBooks");
const availableBooksElement = document.querySelector("#availableBooks");
const borrowedBooksElement = document.querySelector("#borrowedBooks");

function getFilteredBooks(searchTerm = "") {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (normalizedSearch === "") {
        return libraryBooks;
    }

    return libraryBooks.filter((book) => {
        const searchableText = `${book.title} ${book.author} ${book.category}`.toLowerCase();
        return searchableText.includes(normalizedSearch);
    });
}

function createBookCard(book) {
    const card = document.createElement("article");
    card.classList.add("book-card");

    const category = document.createElement("p");
    category.classList.add("book-category");
    category.textContent = book.category;

    const title = document.createElement("h3");
    title.classList.add("book-title");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.classList.add("book-author");
    author.textContent = `By ${book.author}`;

    const footer = document.createElement("div");
    footer.classList.add("book-footer");

    const status = document.createElement("span");
    status.classList.add("status-badge", book.isBorrowed ? "borrowed" : "available");
    status.textContent = book.isBorrowed ? "Borrowed" : "Available";

    const actionButton = document.createElement("button");
    actionButton.classList.add("book-action");
    actionButton.type = "button";
    actionButton.dataset.bookId = book.id;
    actionButton.textContent = book.isBorrowed ? "Return" : "Borrow";

    if (book.isBorrowed) {
        actionButton.classList.add("return");
    }

    footer.append(status, actionButton);
    card.append(category, title, author, footer);
    return card;
}

function renderBooks(booksToRender) {
    bookGrid.replaceChildren();

    if (booksToRender.length === 0) {
        const emptyState = document.createElement("p");
        emptyState.classList.add("empty-state");
        emptyState.textContent = "No books match your search. Try a different title, author, or category.";
        bookGrid.append(emptyState);
        return;
    }

    const bookCards = booksToRender.map(createBookCard);
    bookGrid.append(...bookCards);
}

function updateStatistics() {
    const totalBooks = libraryBooks.length;
    const borrowedBooks = libraryBooks.filter((book) => book.isBorrowed).length;
    const availableBooks = totalBooks - borrowedBooks;

    totalBooksElement.textContent = totalBooks;
    availableBooksElement.textContent = availableBooks;
    borrowedBooksElement.textContent = borrowedBooks;
}

function updateResultsMessage(booksToRender) {
    const bookWord = booksToRender.length === 1 ? "book" : "books";
    resultsMessage.textContent = `Showing ${booksToRender.length} ${bookWord}`;
}

function renderLibrary(searchTerm = searchInput.value) {
    const filteredBooks = getFilteredBooks(searchTerm);
    renderBooks(filteredBooks);
    updateStatistics();
    updateResultsMessage(filteredBooks);
}

function toggleBookStatus(bookId) {
    const selectedBook = libraryBooks.find((book) => book.id === bookId);

    if (!selectedBook) {
        return;
    }

    selectedBook.isBorrowed = !selectedBook.isBorrowed;
    renderLibrary();
}

searchInput.addEventListener("input", () => {
    renderLibrary();
});

// Event delegation keeps one click listener on the grid, even as cards are re-rendered.
bookGrid.addEventListener("click", (event) => {
    const actionButton = event.target.closest(".book-action");

    if (!actionButton) {
        return;
    }

    const bookId = Number(actionButton.dataset.bookId);
    toggleBookStatus(bookId);
});

renderLibrary();

# Sprint 0

## Part A

### A1

The application helps user to check the university catalogue of campus library, it shows total books, how many are available, how many are currently borrowed. User can search for title, author or category in search engine to find the book and it works perfectly, each book card shows available or borrowed status and borrow and return option for each book. The application is clean and readable.

### A2

It is also useful for librarian who keeps track of books in library and also someone who can let students borrow and give students info about books like avaibality, and more.

### A3

- Can see the catalogue of books
- Search for books in search with their title or author name or category
- Can show status whether it is available or borrowed
- Can let librarian allow student burrow book and also mark as returned when student return the book
- Showw how many number of books are in catalogue

### A4

<b>Campus Library v1.0</b>

Features

- Searches by title, author, or category
- Show book status
- Return and borrow book
- Keeps summary statistics for total, available, and borrowed books up to date.

## Part B

### B1 

Header
↓
Main
↓
Hero
↓
Statistics
↓
Catalogue Section
↓
Footer

### B2

- <b>Header</b>: It exists to show the webpage title and its brand mark and show the note to make it presentable and also if user clicks on brand name or logo he will go back to start or homepage which is what most usual websites have. Header makes it look like a real website and professional touch and hints that its not just any raw site.

- <b>Main</b>: It exists to conatain and show what the website is all about and contains the main content of the page

- <b>Hero</b>: It exists to give you a bit details about the what this is about and shows a friendly and aspiring quote to make it presentable and add library catalogue vibe, and also helps make the webpage look presentable and not just data and statistics

- <b>Statistics</b>: here this sections does one of the most important task and that is show the overall and live statistics about the total books, available books and currently borrowed so the librarian can know how many have been borrowed and how many are available and more.

- <b>Catalogue Section</b>: It shows catalogue of books with its details like title, category and more, search where user can search for books and return and borrow the book along the status of available and borrowed. This is most important part of the application and the main content. 

- <b>Footer</b>: It is a presentable section where it shows the end of the page and a note to show the end without making it feel raw website or page. Here later we can also add library details like contact info and more.

My words here might be wrong like raw website and more.

### B3

- brand
- statistics
- totalBooks
- availableBooks
- borrowedBooks
- totalBooks
- searchInput
- resultMessage
- bookGrid

### B4 

I don't know what textbook and engineering answer means yet. So I will give you my raw/messy thoughts, a website's usual layout or generally all websites uses header, main,... instead of div because it helps in keeping the code clean, presentable, readable and easy to maintain but if you use div for everything you will end up getting tons of divs which will lead to confusion it will look heavy to read and makes it hard to keep track of things if there are too many divs and you would need to remember or keep separating each div from other and it will be much harder once the number of code lines increase and for large projects too. 

## Part C

### C1

I won't say I liked how it was organised because it feels a bit hard to read and is not given room to breath and is not grouped with the intention of making it presentable either. Though I feel like they are grouped according to sectionwise. I don't know somethings like root,  and what things written like -- means so i will leave those for now. The css is organized in sequence of up to down of how html is written. First the author styles the outter or maybe inner most parts like root, body, html and more then he moves styling each id and class. At the end author makes it responsive so that it works both on desktop and mobile layout using media. I don't really know how to describe the structure.

### C2

Again I don't know what maintainability decisions means here, I don't know how to answer this question. Naming is done so well that there is no confusion on what id or class is for what and it also helps in selecting in css and js. I will put a hold on this because the css file seems a bit too advanced for me who hasn't dived too deep into it yet.

### C3
### C4

Same for C3 and C4 I feel like I don't know or maybe I haven't given it enough time to study it like giving it line by line read. Though there were many things or words I didn't understand or seen before.

## Part D

### D1 And D2

1. getFilteredBooks(searchTerm = "")
 - Normalizes the input, search the book by its  title, author and category and returns if available. It filters the books and matches the input with libraryBooks array of objects.


2. createBookCard(book)
- It creates the book card by using the data stored in libraryBooks. It does many things like creating elements, giving it class, content and more for each book.

3. renderBooks(booksToRender)
- If input doesn't match any book available in library, then this function executes/returns text content saying no books match your search. I didn't understand this one properly like what it actually does and how.

4. updateStatistics()
- It updates the statistics live as user clicks borrow or return by checking how many are available by reducing borrowed from total and it also uses length to see how many.

5. updateResultsMessage(booksToRender)
- I don't know this one because what does this actually, maybe its because I didn't understand the what booksToRender actually does and also  booksToRender.length === 1 ? "book" : "books" what does this mean like ? symbol and more. Maybe it shows the number of books when user searches for book in the input and then it changes according to number of books name matching

6. renderLibrary(searchTerm = searchInput.value)
- I don't know this one too like is calls many functions and uses search input value as argument and I don't know what render exactly means to know what it is.

7. toggleBookStatus(bookId)
- don't know this one to it uses some things which i don't know like isBorrowed how does it work and bookid and more I don't get many things











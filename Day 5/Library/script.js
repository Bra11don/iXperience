
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    static fromJSON(json) {
        return new Book(
            json.title,
            json.author,
            json.isbn,
        );
    }
}



class UserInterface{
    constructor(){
        this.form = document.getElementById('form');
        this.title = document.getElementById('title-input');
        this.author = document.getElementById('author-input');
        this.isbn = document.getElementById('isbn-input');
        this.tableBody = document.getElementById('table-body');

        this.form.addEventListener('submit', (e) => {
            this.onFormSubmitted(e);
        })

        this.books = [];

        this.loadBooksFromLocalStorage();
        this.renderTableBody();
    }

    onFormSubmitted(e){
        e.preventDefault();

        const book = new Book(
            this.title.value,
            this.author.value,
            this.isbn.value
        );

        this.books.push(book);
        this.saveBooksToLocalStorage();
        this.renderTableBody();

        this.title.value = '';
        this.author.value = '';
        this.isbn.value = ''
    }

    renderTableBody(){
        this.tableBody.innerHTML = '';

        for(let i = 0; i<this.books.length;i++){
            const book = this.books[i];

            const tableRow = this.generateBookRow(book);
            this.tableBody.appendChild(tableRow);

        }
    }

    /*
    <tr>
        <td></td> // title
        <td></td> // author
        <td></td> // isbn
        <td></td> // actions
    </tr>
    */


    generateBookRow(book){
        const tr = document.createElement('tr');

        const cellTitle = document.createElement('td');
        const cellAuthor = document.createElement('td');
        const cellISBN = document.createElement('td');
        const cellActions = document.createElement('td');

        cellTitle.innerHTML = book.title;
        cellAuthor.innerHTML = book.author;
        cellISBN.innerHTML = book.isbn;

        //generate remove book button
        const removeButton = this.generateRemoveButton(book);
        cellActions.appendChild(removeButton);


        tr.appendChild(cellTitle);
        tr.appendChild(cellAuthor);
        tr.appendChild(cellISBN);
        tr.appendChild(cellActions);


        //return the row 
        return tr;
    }

    generateRemoveButton(book){
        const button = document.createElement('button');

        button.innerHTML = 'x';
        button.setAttribute('class', 'btn btn-sm btn-primary')
        button.addEventListener('click', () =>{
            this.onRemoveBookClicked(book);
        })

        return button
    }

    onRemoveBookClicked(book){
        this.books = this.books.filter((b) =>{
            return book.isbn !== b.isbn;
        })

        this.saveBooksToLocalStorage();
        this.renderTableBody();
    }

    saveBooksToLocalStorage() {
        const json = JSON.stringify(this.books);
        localStorage.setItem('books', json);
    }
    
    loadBooksFromLocalStorage() {
        const json = localStorage.getItem('books');
        if (json) {
            const bookArr = JSON.parse(json);
            this.books = bookArr.map(b => Book.fromJSON(b));
        }
}
}

new UserInterface()

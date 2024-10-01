// 1
/*
    Design an online cloud reading application.
    - Users have a library of books that they can add to or remove from.
    - Users can set a book from their library as active.
    - The reading applicatin remembers where a user left off in a given book.
    - THe reading app only displays a page of text at a time in the active book.
*/

class User {
    constructor() {
        this.booksInfo = [];
        this.activeBookId = -1;
    }
    addBook(book) {
        // {
        //     name,
        //     lastReadPage
        // }
        this.booksInfo.push(book);
    }
    setActive(bookId) {
        this.active
    }
}ca
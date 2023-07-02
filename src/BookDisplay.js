

const BookDisplay = (books) => {
    return (
        <div className="books-display">
            {books.map((book) => (
                <div className="book-preview" key={book.id}>
                    <h2>{ book.title }</h2>
                    <p>Written by {book.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BookDisplay;
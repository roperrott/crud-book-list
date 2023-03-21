import useBooksContext from '../hooks/useBooksContext';
import BookShow from './BookShow';


function BookList(){
    const { books } = useBooksContext();

    console.log(books);
    const renderedBooks = books.map((book) => {
        return (
            <BookShow key={book.id} book={book} />
        );
    });
    
    return  <div className='book-list'>
         {renderedBooks}
        </div>
}

export default BookList;
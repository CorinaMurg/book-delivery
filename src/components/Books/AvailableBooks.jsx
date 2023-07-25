
import Card from '../UI/Card';
import BookItem from './BookItem/BookItem';
import classes from './AvailableBooks.module.css';

import booksData from './BooksData'



const AvailableBooks = () => {

  const booksList = booksData.map((book) => (
    <BookItem
      key={book.id}
      id = {book.id}
      title={book.title}
      summary={book.summary}
      author={book.author}
      genre={book.genre}
    />
  ));

  return (
    <section className={classes.bookss}>
        <Card>
            <ul>{booksList}</ul>
        </Card>
      
    </section>
  );
};

export default AvailableBooks;
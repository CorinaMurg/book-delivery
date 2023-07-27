

import BookItem from './BookItem/BookItem';
import classes from './AvailableBooks.module.css';
import booksData from './BooksData'

const AvailableBooks = () => {

  const booksList = booksData.map((book) => (
    <li key={book.id} className={classes.bookItem}>
      <BookItem
        id={book.id}
        title={book.title}
        price={book.price}
        summary={book.summary}
        author={book.author}
        genre={book.genre}
        image={book.image}
      />
    </li>
  ));

  return (
    <section>
      <ul className={classes.booksList}>{booksList}</ul>
    </section>
  );
};
export default AvailableBooks;




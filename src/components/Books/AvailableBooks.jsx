
import classes from './AvailableBookss.module.css';

import booksData from './BooksData'



const AvailableBooks = () => {
  const booksList = booksData.map((book) => <li key={book.id}>{book.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{booksList}</ul>
    </section>
  );
};

export default AvailableBooks;
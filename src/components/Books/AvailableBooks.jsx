
import Card from '../UI/Card';
import classes from './AvailableBooks.module.css';

import booksData from './BooksData'



const AvailableBooks = () => {
  const booksList = booksData.map((book) => <li key={book.id}>{book.title}</li>);

  return (
    <section className={classes.bookss}>
        <Card>
            <ul>{booksList}</ul>
        </Card>
      
    </section>
  );
};

export default AvailableBooks;
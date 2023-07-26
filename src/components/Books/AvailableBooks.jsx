
import Card from '../UI/Card';
import BookItem from './BookItem/BookItem';
import classes from './AvailableBooks.module.css';

import booksData from './BooksData'



const AvailableBooks = () => {

  const booksList = booksData.map((book) => (
    <li key={book.id}>
      <BookItem
        id={book.id}
        title={book.title}
        price={book.price}
        summary={book.summary}
        author={book.author}
        genre={book.genre}
      />
    </li>
  ));

  return (
    <section className={classes.books}>
        <Card>
            <ul>{booksList}</ul>
        </Card>
      
    </section>
  );
};

export default AvailableBooks;





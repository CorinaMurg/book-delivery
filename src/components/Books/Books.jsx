import { useEffect, useState } from 'react';
import Book from './Book/Book';
import classes from './Books.module.css';

const AvailableBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        'https://book-delivery-245da-default-rtdb.firebaseio.com/books.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedBooks = [];

      for (const key in responseData) {
        loadedBooks.push({
          id: key,
          title: responseData[key].title,
          summary: responseData[key].summary,
          price: responseData[key].price,
          image: responseData[key].image,
          year: responseData[key].year,
          genre: responseData[key].genre,
          author: responseData[key].author,
        });
      }

      setBooks(loadedBooks);
      setIsLoading(false);
    };

    fetchBooks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.BooksLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.BooksError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const booksList = books.map((book) => (
    <li key={book.id} className={classes.bookItem}>
      <Book
        id={book.id}
        title={book.title}
        price={book.price}
        summary={book.summary}
        author={book.author.toUpperCase()}
        genre={book.genre}
        image={book.image}
        year={book.year}
      />
    </li>
  ));

  return (
      // Lighthouse error: <li> elements are not contain within a <ul> element
      <ul className={classes.booksList}>{booksList}</ul>
  );
};
export default AvailableBooks;




import { useEffect, useState } from 'react';
import BookItem from './BookItem/BookItem';
import classes from './AvailableBooks.module.css';

const AvailableBooks = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://book-delivery-245da-default-rtdb.firebaseio.com/books.json');
      const responseData = await response.json();

      const loadedBooks = [];

      for (const key in responseData) {
        loadedBooks.push({
          id: key,
          image: responseData[key].image,
          title: responseData[key].title,
          author: responseData[key].author,
          price: responseData[key].price,
        });
      }

      setBooks(loadedBooks);
    };

    fetchMeals();
  }, []);

  const booksList = books.map((book) => (
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




/* eslint-disable react/prop-types */
import { useContext } from 'react';
import BookButton from './BookButton';
import classes from './Book.module.css';
import {CartContext} from '../../../store/CartProvider';

const Book = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };


  return (
    <li className={classes.book}>
      <div>
        <div className={classes.book__cover}>
          <img src={props.image} alt={props.title} />
        </div>
        
        <h3 className={classes.ellipsis}>{props.title}</h3>
        <div className={`${classes.book__author} ${classes.ellipsis}`}>{props.author}</div>
        
        <div className={classes.book__price}>{price}</div>
      </div>
      <div>
        <BookButton id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Book;





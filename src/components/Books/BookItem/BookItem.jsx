/* eslint-disable react/prop-types */
import { useContext } from 'react';
import BookItemForm from './BookItemForm';
import classes from './BookItem.module.css';
import CartContext from '../../../store/cart-context';

const BookItem = (props) => {
  const cartCtx = useContext(CartContext);

  // const price = `$${props.price.toFixed(2)}`;

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
        <div className={classes.cover}>
          <img src={props.image} alt={props.title} />
        </div>
        
        <h3>{props.title}</h3>
        <div className={classes.author}>{props.author}</div>
        
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <BookItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default BookItem;





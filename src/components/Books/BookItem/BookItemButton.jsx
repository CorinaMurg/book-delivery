/* eslint-disable react/prop-types */

import { useContext } from 'react';
import classes from './BookItemButton.module.css';
import CartContext from '../../../store/cart-context';

const BookItemButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { id } = props;

  // Check if the current book is already in the cart
  const isInCart = cartCtx.items.some(item => item.id === id);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredQty = 1;
    props.onAddToCart(enteredQty);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <button>{isInCart ? "ADDED TO CART!" : "ADD TO CART"}</button>
    </form>
  );
};

export default BookItemButton;




// const BookItemButton = (props) => {

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const enteredAmountNumber = 1;
//     props.onAddToCart(enteredAmountNumber);
//   };

//   return (
//     <form className={classes.form} onSubmit={submitHandler}>
//       <button>ADD TO CART</button>
//     </form>
//   );
// };

// export default BookItemButton;







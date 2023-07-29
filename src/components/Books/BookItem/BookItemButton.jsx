/* eslint-disable react/prop-types */

import classes from './BookItemButton.module.css';

const BookItemButton = (props) => {

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountNumber = 1;
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <button>ADD TO CART</button>
    </form>
  );
};

export default BookItemButton;







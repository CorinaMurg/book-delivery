
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', title: '1984' }].map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}

      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
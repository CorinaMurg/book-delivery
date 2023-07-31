/* eslint-disable react/prop-types */

import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  
  return (
    <div aria-live="polite">
      <button role="button" className={classes.button} onClick={props.onClick} aria-label="Shopping cart">
        <span className={classes.icon} aria-hidden={true}><CartIcon /></span>
        <span className={classes.badge} aria-hidden={true}>{numberOfCartItems}</span>
        <span className={classes['sr-only']} aria-live="polite">
          {/* added trim to avoid reading "space" */}
          {`You have ${numberOfCartItems} ${numberOfCartItems === 1 ? "item" : "items"} in your cart.`.trim()}
        </span>
      </button>
      
    </div>
  );

};


export default HeaderCartButton;
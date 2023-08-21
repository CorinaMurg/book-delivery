/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { forwardRef } from 'react';
import classes from './CartItem.module.css';

const CartItem = forwardRef((props, ref) => {
    const price = `$${props.price}`;

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.title}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>Qty: {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button ref={ref} onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
});

export default CartItem;

/* eslint-disable react/prop-types */

import classes from './CartItem.module.css';

const CartItem = (props) => {

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
                <button tabIndex={0} onClick={props.onRemove}>−</button>
                <button tabIndex={0} onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
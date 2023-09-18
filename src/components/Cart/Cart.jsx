/* eslint-disable react/prop-types */
import { useContext, useState, useEffect, useRef } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import {CartContext} from '../../store/CartProvider';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  const firstCartItemRef = useRef(null);
  const closeCartButtonRef = useRef(null);

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  
  useEffect(() => {
    console.log('useEffect triggered');
    console.log('firstCartItemRef', firstCartItemRef.current);
    console.log('closeCartButtonRef', closeCartButtonRef.current);
    
    if (hasItems && firstCartItemRef.current) {
        firstCartItemRef.current.focus();
    } else if (!hasItems && closeCartButtonRef.current) {
        closeCartButtonRef.current.focus();
    }
  }, [hasItems]);


  // exit modal when pressing ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        props.onCloseCart();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [props]);
  

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    try {
      await fetch('https://book-delivery-245da-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items
        })
      });
    }
    catch (error) {
      <p>Order did not save</p>
    }
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item, index) => (
        <CartItem
          key={item.id}
          ref={index === 0 ? firstCartItemRef : null} // Pass the ref to the first item
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  // modal actions
  const modalActions = (
    <div className={classes.buttons}>
      <button ref={closeCartButtonRef} className={classes.button} onClick={props.onCloseCart}>CLOSE</button>


      {hasItems && (<button className={classes.button} onClick={orderHandler}>ORDER</button>)}
    </div>
  );
  
  // modal content 1
  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCloseCart={props.onCloseCart} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  // modal content 2
  const isSubmittingModalContent = <p>One moment! We are saving your order ...</p>;

  // modal content 3
  const didSubmitModalContent = (
    <>
      <p className={classes.success}>Your order was successfully saved! We will call you to confirm delivery within 30 minutes. Thank you for reading with us!</p>
      <div className={classes.buttons}>
      <button className={classes.button} onClick={props.onCloseCart}>
        CLOSE
      </button>
    </div>
    </>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;


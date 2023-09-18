/* eslint-disable react/prop-types */
import { useContext, useState, useEffect, useRef } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/CartContext';
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
        props.onClose();
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
    await fetch('https://book-delivery-245da-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    });
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

  
  const modalActions = (
    <div className={classes.actions}>
      <button ref={closeCartButtonRef} className={classes['button--alt']}  onClick={props.onClose}>CLOSE</button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          ORDER
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>One moment! We are saving your order ...</p>;

  const didSubmitModalContent = (
    <>
      <p className={classes.success}>Your order was successfully saved! We will call you to confirm delivery within 30 minutes. Thank you for reading with us!</p>
      <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </div>
    </>
  );


  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;


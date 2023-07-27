/* eslint-disable no-undef */

import HeaderCartButton from './HeaderCartButton';
import headerImage from '/public/assets/frontstore.jpg';
import bikeImage from '/public/assets/booksonbike.jpg'
// import headerImage from '/public/assets/bookstorefront-shelves.jpg';
import BooksSummary from './BooksSummary';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes['cart-container']}>
        <p>For the love of books</p>
          <HeaderCartButton onClick={props.onShowCart}/>
        </div>
        
        <div className={classes.navbar}>
          <ul className={classes['nav-links']}>
            <h1>TWAIN & COMPANY</h1>
          </ul>
        </div>
      </header>
      
      
      <section className={classes.hero}>
        <div className={classes['main-image']}>
          <img src={headerImage} alt='Twain and Company front with main doors wide open and books on shelves' />
        </div>
        <BooksSummary />
      </section>

      <div className={classes.independent}>
          <h3>Independent Bookstore</h3>
      </div>

      <section className={classes.onbikes}>
          <div className={classes['onbikes-image']}> 
            <img src = {bikeImage} alt="stack of books on the back of a bike" />
          </div>
          <div>
            <h3>Books on Bikes</h3>
            <p>Care to indulge without leaving your home? We offer FREE delivery service by eco-friendly bicycles. Anywhere in Happytown.</p>
            <p>Your books will be handled with utmost care by our passionate riders. Browse below, then add your books to the cart.</p> 

            <p className={classes['delivery-note']}><span className="bold">PLEASE NOTE: </span>We offer same-day delivery for orders placed at least one hour before closing.
            Each order is confirmed by phone before delivery.</p>
          </div>
           
      </section>
        
    </>
  );
};

export default Header;
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import HeaderCartButton from './HeaderCartButton';
import headerImage from '/public/assets/frontstore.jpg';
import bikeImage from '/public/assets/booksonbike.jpg'
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes['topper']}>
          <div>
            <p className={classes['topper--slogan']}>For the love of books.</p>
          </div>
          <div className={classes['topper--cart']}>
            <HeaderCartButton onClick={props.onShowCart}/>
          </div>
          
        </div>
        
        <div className={classes.navbar}>
          <ul className={classes['nav-links']}>
            <li><h1>TWAIN & COMPANY</h1></li>
            {/* add links for Adult, Children, Teen, Summer Reads */}
          </ul>
        </div>
      </header>
      
      <section className={classes.hero}>
        <div className={classes['hero--image']}>
          <img src={headerImage} alt='Twain and Company store front with main doors wide open and books on shelves' />
        </div>
        <div className={classes['hero--hours']}>
          <h2>Store Hours</h2>
          <p>MON - FRI: 7AM - 9PM</p>
          <p>SAT - SUN: 8AM - 7PM</p>
          <div></div>
          <p className={classes['hero--hours--blurb']}>Browse our extensive collections and select your next riveting read.</p>
        </div>
      </section>

      <div className={classes.independent}>
          <h3>Independent Bookstore</h3>
      </div>

      <section className={classes.onbikes}>
          <div className={classes['onbikes--image']}> 
            <img src = {bikeImage} alt="stack of books on the back of a bike" />
          </div>
          <div className={classes['onbikes--text']}>
            <h3>Books on Bikes</h3>
            <p>Care to indulge without leaving your home? We offer FREE delivery service by eco-friendly bicycles. Anywhere in Clemens Town.</p>
            <p>Your books will be handled with utmost care by our passionate riders. Browse below, then add your books to the cart.</p> 

            <p className={classes['onbikes--text-note']}><span className="bold">PLEASE NOTE: </span>We offer same-day delivery for orders placed at least one hour before closing.
            Each order is confirmed by phone before delivery.</p>
          </div>
           
      </section>
        
    </>
  );
};

export default Header;
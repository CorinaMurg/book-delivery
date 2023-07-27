/* eslint-disable no-undef */

import HeaderCartButton from './HeaderCartButton';
// import headerImage from '/public/assets/booksonretro.jpg';
import headerImage from '/public/assets/bookstorefront-shelves.jpg';
import BooksSummary from './BooksSummary';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes['cart-container']}>
          <h1>Welcome!</h1>
          <HeaderCartButton onClick={props.onShowCart}/>
        </div>
        
        <div className={classes.navbar}>
          <ul className={classes['nav-links']}>
            <button>Adult Literature</button>
            <button>Teen Novels</button>
            <h1>BOOKS ON BIKES</h1>
            <button>Children Books</button>
            <button>Summer Reads</button>
          </ul>
        </div>
      </header>
      
      
      <div className={classes.hero}>
        <div className={classes['main-image']}>
          <img src={headerImage} alt='Stockholm Public Library' />
        </div>
        <BooksSummary />
      </div>
      <div className={classes.independent}>
          <h3>Independent Bookstore</h3>
      </div>
        
    </>
  );
};

export default Header;
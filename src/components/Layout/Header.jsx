/* eslint-disable no-undef */

// import HeaderCartButton from './HeaderCartButton';
import headerImage from '../../assets/bookstorefront-shelves.jpg';
import BooksSummary from './BooksSummary';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      {/* <header className={classes.header}>
        <h1>The Library at Your Doorstep</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header> */}
      <div className={classes.navbar}>
        <ul className={classes['nav-links']}>
          <button>Adult Literature</button>
          <button>Teen Novels</button>
          <h1>BOOKS ON BIKES</h1>
          <button>Children Books</button>
          <button>Summer Reads</button>
        </ul>
      </div>
      
      <div className={classes.hero}>
        <div className={classes['main-image']}>
          <img src={headerImage} alt='Stockholm Public Library' />
        </div>
        <BooksSummary />
      </div>
        
    </>
  );
};

export default Header;
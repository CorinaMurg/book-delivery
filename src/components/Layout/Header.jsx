
import HeaderCartButton from './HeaderCartButton';
import headerImage from '../../assets/Stockholm Public Library.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>The Library at Your Doorstep</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImage} alt='Stockholm Public Library' />
      </div>
    </>
  );
};

export default Header;
import classes from './BooksSummary.module.css';
import HeaderCartButton from './HeaderCartButton';
const BooksSummary = (props) => {
  return (
    <section className={classes.summary}>
      
        <h2>Directly to Your Door</h2>
        <p>
          Browse through our extensive collection. 
          Select your next riveting read.
          Indulge in the pleasure of literature without leaving your home.
        </p>
        <p>
          Promptly delivered by eco-friendly bicycles.
          Handled with utmost care. Delivered by passionate riders.
        </p>
        <HeaderCartButton onClick={props.onShowCart}/>
    </section>
  );
};

export default BooksSummary;
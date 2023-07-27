import classes from './BooksSummary.module.css';

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
        <p>Browse our extensive collection. </p>
        <p>Select your next riveting read.</p>
        <p> Indulge without leaving your home.</p>
        <div></div>
        <p>
          Promptly delivered by eco-friendly bicycles.
          Handled with utmost care by passionate riders.
        </p>  
    </section>
  );
};

export default BooksSummary;
import classes from './BooksSummary.module.css';

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
      
        <h2>Store Hours</h2>
        <p>MON - FRI: 7AM - 9PM</p>

        <p>SAT - SUN: 8AM - 7PM</p>
        <div></div>

        <p>Browse our extensive collection, and select your next riveting read.</p>
    </section>
  );
};

export default BooksSummary;
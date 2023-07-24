import classes from './BookItem.module.css';

const BookItem = (props) => {
  

  return (
    <li className={classes.book}>
      <div>
        <h3>{props.title}</h3>
        
        <div className={classes.author}>{props.author}</div>
        <div className={classes.genre}>{props.genre}</div>
        <div className={classes.description}>{props.summary}</div>
      </div>
      <div></div>
    </li>
  );
};

export default BookItem;
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <section className={classes.footer}>
        <h3>TWAIN & COMPANY</h3>
        <span>30 Samuel Road</span>
        <span>Clemens Town</span> 
        <span>842-324-2200</span>
        {/* add social media icons
        add subscribe email */}
    </section>
  );
};

export default Footer;

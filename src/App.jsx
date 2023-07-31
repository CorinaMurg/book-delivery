import { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import AvailableBooks from './components/Books/AvailableBooks';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider> 
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main id="main">
        <div className="books">
          <AvailableBooks />
        </div>
      </main>
      <Footer />
        
    </CartProvider>

  );
}

export default App;



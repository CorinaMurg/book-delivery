import { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Books from './components/Books/Books';
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
      <main>
        <div className="books">
          <Books />
        </div>
      </main>
      <Footer />
        
    </CartProvider>

  );
}

export default App;



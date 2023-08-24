import { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Books from './components/Books/Books';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvid';


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
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      {/*point at the function, don't execute, so it can be accessed from inside Header*/}
      <Header onShowCart={showCartHandler} />
      <main id="main">
        <div className="books">
          <Books />
        </div>
      </main>
      <Footer />
        
    </CartProvider>

  );
}

export default App;



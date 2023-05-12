import './App.css';
import Nav from "./components/NavBar/Nav";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path='/' element= { <Homepage /> } />
            <Route path='/productos' element= {<ItemListContainer />} />
            <Route path='/categoria/:categoryId' element= {<ItemListContainer />} />
            <Route path='/item/:itemId' element= { <ItemDetailContainer /> } />
            <Route path='/cart' element= { <Cart /> } />
            <Route path='/checkout' element= { <Checkout /> } />
            <Route path='*' element={ <h1>404 NOT FOUND</h1> } />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

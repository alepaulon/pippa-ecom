import './App.css';
import Nav from "./components/NavBar/Nav";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element= {<ItemListContainer />} />
          <Route path='/categoria/:categoryId' element= {<ItemListContainer />} />
          <Route path='/item/:itemId' element= { <ItemDetailContainer /> } />
          <Route path='*' element={ <h1>404 NOT FOUND</h1> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

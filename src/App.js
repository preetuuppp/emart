
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Products from './Components/Products';

function App() {
  return (
  
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:id' element={<Product/>}/>
    <Route path='/cart' element={<Cart />}/>
    <Route path='/checkout' element={<CheckOut/> }/>
  </Routes>
 
  </>
  );
}

export default App;

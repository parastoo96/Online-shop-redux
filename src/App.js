import './App.css';
import { Route, Routes,Navigate  } from "react-router-dom";
import {Provider }from 'react-redux'

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/shared/Footer'
import Search from './components/Search';

// Redux
import store from './Redux/store';


function App() {
  return (
       <Provider store={store}>
        <Navbar/>
     
        <Routes>
          <Route path="/Home" element={<Home/>} /> 
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/products" element={<Store/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/cart" element={<ShopCart/>} />
          <Route path="/Search" element={<Search/>} />
          <Route path='/' element={<Navigate to='Home' />} />
        </Routes>
        
        <Footer/>
        </Provider>
      
  );
}

export default App;

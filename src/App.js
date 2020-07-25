import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import NavBar from './Navbar';


function App() {
  return (
    <div className="App">
      <header>
        <h1><img style={{width:40, marginBottom:-10}} src="https://image.flaticon.com/icons/svg/1170/1170576.svg" alt="Cart"/>  My Shopping Cart</h1>
        <NavBar />
      </header>      
      <Cart />
    </div>
  );
}

export default App;

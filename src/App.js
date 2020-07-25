import React from 'react';
import './App.css';
import Cart from './Cart';


function App() {
  return (
    <div className="App">
      <h1><img style={{width:40, marginBottom:-10}} src="https://image.flaticon.com/icons/svg/1170/1170576.svg" alt="Cart"/>  My Shopping Cart</h1>
      <Cart />
    </div>
  );
}

export default App;

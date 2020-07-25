import React from 'react';
import './App.css';
import Cart from './Cart';


function App() {
  return (
    <div className="App">
      <h1><img style={{width:40}} src="https://image.flaticon.com/icons/svg/3176/3176363.svg"/> My Shopping Cart</h1>
      <Cart/>
    </div>
  );
}

export default App;

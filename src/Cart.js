import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

    render(){
        return (
            <div className="cart-wrapper">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        )
    }
}

export default Cart;
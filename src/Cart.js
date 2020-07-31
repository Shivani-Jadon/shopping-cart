import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

    const {products} = props;
    return (
        <div className="cart-wrapper">
            {products.map((product) => {
                // console.log(product);
                return <CartItem product={product} 
                        key={product.id} 
                        onIncreaseQty={props.onIncreaseQty}
                        onDecreaseQty={props.onDecreaseQty}
                        onRemoveItem={props.onRemoveItem}/>
            })
            }                
        </div>
    );
}


export default Cart;
import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

    const {products} = props;
    return (
        <div className="cart-wrapper"  style={styling.wrapper}>
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

// styling object
const styling = {
    wrapper : {
        background : 'azure',
        boxShadow : 'inset 1px -5px 11px 0px black',
        padding : '10px 30px'
    }
}

export default Cart;
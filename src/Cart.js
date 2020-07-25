import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

    constructor(){
        super();
        this.id_setter = 0;

        this.state = {
            products : [
                {
                    item_name : 'Washing Machine',
                    price : 20000,
                    qtn : 1,
                    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_0aFCSAiyUDcbTM7MW42N2i8ADMsX9wl2gTVmWeecpHUV1SpNtxXm0anlO2wPQj3XXliyLqRQ&usqp=CAc",
                    id : this.id_setter
                },
                {
                    item_name : 'Mobile phone',
                    price : 25000,
                    qtn : 2,
                    image : "https://image.flaticon.com/icons/svg/2920/2920329.svg",
                    id : ++this.id_setter
                },
                {
                    item_name : 'Laptop',
                    price : 50000,
                    qtn : 1,
                    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGYSk2tAjA5e3ClGZZZlTjNUvhBek1T-u3rRgwxRDkqJlmbPNCj1rWwKF2bK_r7PTvHQtjQ4Db&usqp=CAc",
                    id : ++this.id_setter
                },
                {
                    item_name : 'Shirt',
                    price : 2000,
                    qtn : 4,
                    image : "https://image.flaticon.com/icons/svg/2965/2965250.svg",
                    id : ++this.id_setter
                },
                {
                    item_name : 'Photo Frame',
                    price : 500,
                    qtn : 10,
                    image : "https://image.flaticon.com/icons/svg/2919/2919760.svg",
                    id : ++this.id_setter
                }
            ]    
        }
    }

    // function for handeling increase qtn event on click from parent
    handleIncreaseQty = (product) => {
        const {products} = this.state;
        // console.log("Increasing quantity");
        const index = products.indexOf(product);

        products[index].qtn += 1; 

        this.setState({
            products : products
        })
    }
    
    // function for handeling decrease qtn event on click from parent
    handleDecreaseQty = (product) => {
        const {products} = this.state;
        // console.log("Increasing quantity");
        const index = products.indexOf(product);

        if(products[index].qtn > 0){
            products[index].qtn -= 1; 
            this.setState({
                products : products
            })
        }
        
    }

    render(){
        // console.log("In Cart component ");
        const {products} = this.state;
        return (
            <div className="cart-wrapper"  style={styling.wrapper}>
                {products.map((product) => {
                    // console.log(product);
                    return <CartItem product={product} 
                            key={product.id} 
                            onIncreaseQty={this.handleIncreaseQty}
                            onDecreaseQty={this.handleDecreaseQty}/>
                })
                }                
            </div>
        );
    }
}

// styling object
const styling = {
    wrapper : {
        background : 'azure'
    }
}

export default Cart;
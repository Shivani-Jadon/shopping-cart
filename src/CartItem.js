import React from "react";


class CartItem extends React.Component {

    // add states using constructor
    constructor(){
        // deriving constructor of the super class
        super();
        // ḍefining states as object
        this.states = {
            item_name : 'Washing Machine',
            price : 20000,
            qtn : 1
        }

        this.increaseQtn = () => {
            console.log('this.states : ', this.states);
            ++this.states.qtn;
        }
    }

    render(){
        const {price, qtn} = this.states;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src="https://image.flaticon.com/icons/svg/2919/2919760.svg" style={styles.image} alt="Item"/>
                </div>
                <div className="right-block">
                    <div style={styles.itemName}>{this.states.item_name}</div>
                    <div style={{color:'dimgrey' ,fontWeight : 'bold'}}>Rs. {price}</div>
                    <div style={{color:'dimgrey'}}> Qtn : {qtn}</div>

                    <div className="cart-item-actions">
                        {/* {buttons} */}
                        <img className="action-icons" alt="increase" src="https://image.flaticon.com/icons/svg/929/929409.svg"
                            onClick={this.increaseQtn}/>
                        <img className="action-icons" alt="decrease" src="https://image.flaticon.com/icons/svg/957/957316.svg"/>
                        <img className="action-icons" alt="delete" src="https://image.flaticon.com/icons/svg/3143/3143497.svg"/>
                    </div>
                </div>
            </div>
        )
    }
}

// style object
const styles = {
    image : {
        height : 200,
        width : 200,
        color : 'dimgrey',
        fontSize : 100,
        fontWeight : 'bold',
        background : 'lightgrey',
        borderRadius : 10,
        border : '1px dimgrey solid'
    },
    itemName : {
        fontSize : 30,
        fontWeight : 'bold',
    },
    btn : {
        width : 20,
        height : 20,
        padding : 5
    }
}

export default CartItem;
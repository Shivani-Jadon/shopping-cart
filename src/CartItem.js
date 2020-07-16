import React from "react";


class CartItem extends React.Component {

    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt="Item"/>
                </div>
                <div className="right-block">
                    <div style={styles.itemName}>Cart Item</div>
                    <div style={{color:'dimgrey'}}>Price</div>
                    <div style={{color:'dimgrey'}}> Qtn : 1</div>

                    <div className="cart-item-actions">
                        {/* {buttons} */}
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
    }
    
}

export default CartItem;
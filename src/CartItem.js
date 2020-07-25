import React from "react";

class CartItem extends React.Component {

    // add state using constructor
    // constructor(){
    //     // deriving constructor of the super class
    //     super();
        // ḍefining state as object
        // this.state = {
        //     item_name : 'Washing Machine',
        //     price : 20000,
        //     qtn : 1
        // }
    
    //     this.increaseQtn = () => {
    //         console.log('this.state before : ', this.state);
    //         // ++this.state.qtn;

    //         // modify state change so that it renders on the page - setState()
    //         // method 1 :
    //             // this.setState({
    //             //     qtn : this.state.qtn++
    //             // });

    //         // method 2 - when the state depends on the previous state
    //         this.setState((prevState) => {
    //             return {
    //                 qtn : prevState.qtn + 1
    //             }
    //         })
    //     };     

    //     this.decreaseQtn = () => {
    //         console.log('this.state before : ', this.state);
            
    //         this.setState((prevState) => {
    //             if(prevState.qtn===0){
    //                 return {
    //                     qtn : prevState.qtn
    //                 }
    //             }else{
    //                 return {
    //                     qtn : prevState.qtn - 1
    //                 }
    //             }                
    //         });
    //     };     
    // }

    // to not loss the scope of this we can use bind()
    // increaseQtn(){
    //     console.log('this.state : ', this.state);
    // }
    // passing increaseQtn method
    // this.increaseQtn.bind(this)

    render(){
        console.log("this.props ", this.props);
        const {item_name, price, qtn} = this.props.product;
        const {id} = this.props.product;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src={this.props.product.image} style={styles.image} alt="Item"/>
                </div>
                <div className="right-block">
                    <div style={styles.itemName}>{item_name}</div>
                    <div style={{color:'dimgrey' ,fontWeight : 'bold'}}>Rs. {price}</div>
                    <div style={{color:'dimgrey'}}> Qtn : {qtn}</div>

                    <div className="cart-item-actions">
                        {/* {buttons} */}
                        <img className="action-icons" alt="increase" src="https://image.flaticon.com/icons/svg/929/929409.svg"
                            onClick={() => this.props.onIncreaseQty(this.props.product)}/>
                        <img className="action-icons" alt="decrease" src="https://image.flaticon.com/icons/svg/957/957316.svg"
                            onClick={() => this.props.onDecreaseQty(this.props.product)}/>
                        <img className="action-icons" alt="delete" src="https://image.flaticon.com/icons/svg/3143/3143497.svg"
                            onClick={() => this.props.onRemoveItem(this.props.product)}/>
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
        background : 'white',
        borderRadius : 10,
        border : '4px dimgrey solid',
        padding : 20
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
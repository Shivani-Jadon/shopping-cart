import React from 'react';

const Navbar = (props) => {   
        
    return (
        <div style={styles.cart_detail}>
            <img style={styles.cartImage} src="https://image.flaticon.com/icons/svg/3208/3208738.svg" alt="shop"></img>
        <span style={styles.cartCount}> {props.count_of_items} </span>
        </div>
    );   
}

const styles = {
    cart_detail : {
        display : 'flex',
        marginTop : 20
    },
    cartImage : {
        width : 40
    },
    cartCount : {
        height : 20,
        padding : 5,
        borderRadius : '50%',
        background : 'crimson',
        color : 'aliceblue',
        marginLeft : -5,
        fontWeight : 'bold',
        textShadow : 'none'
    }
}

export default Navbar;
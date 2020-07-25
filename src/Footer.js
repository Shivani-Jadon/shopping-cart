import React from 'react';

const Footer = (props) => {   
        
    return (
        <div style={style.container}>
            <span style={style.span1}>Your Cart total : </span>
            <span style={style.span2}> Rs {props.cost} </span>
        </div>
    );   
}

// inline styling
const style = {
    container : {
        display : 'flex',
        justifyContent : 'flex-end',
    },
    span1 : {
        padding : '5px 10px',
        fontWeight : 'bold',
        fontSize : '20px'
    },
    span2 : {
        padding : '5px 10px',
        fontWeight : 'bold',
        fontSize : '20px',
        background : 'crimson'
    }
}

export default Footer;
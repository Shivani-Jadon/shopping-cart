import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import Footer from './Footer'


class App extends React.Component {

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
            }]    
    	}
	}

	// function for handling increase qtn event on click from parent
	handleIncreaseQty = (product) => {
		const {products} = this.state;
		// console.log("Increasing quantity");
		const index = products.indexOf(product);

		products[index].qtn += 1; 

		this.setState({
			products : products
		})
	}

	// function for handling decrease qtn event on click from parent
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

	// function to handle delete item event
	handleRemoveItem = (product) => {
		// console.log("id of removed item ",);
		const {products} = this.state;
		const index = products.indexOf(product);
		// remove the object using splice method or filter method
		products.splice(index,1);
		this.setState({
			products : products
		})
	}

	// function to handle delete item event with filter method
	// handleRemoveItem = (id) => {
	//     const {products} = this.state;
	//     // creating a filtered array without that element
	//     const {items} = products.filter((item) => item.id != id)
	//      this.setState({
	//         products : items
	//     })
	// }


	// function to get total items in cart
	items_count = () => {

		const {products} = this.state;		
		let total_items = 0;
		products.forEach((product) => {
			total_items += product.qtn;
		})
		return total_items;
	}

	// function to get total cost of items in cart
	cart_total = () => {
		const {products} = this.state;		
		let total_price = 0;
		products.forEach((product) => {
			total_price += product.price*product.qtn;
		})
		return total_price;
	}
	
	render(){

		const {products} = this.state;

		return (
		<div className="App">
			<header>
				<h1><img style={{width:40, marginBottom:-10}} src="https://image.flaticon.com/icons/svg/1170/1170576.svg" alt="Cart"/>  My Shopping Cart</h1>
				<Navbar count_of_items={this.items_count()}/>
			</header>      
			<Cart 	products={products}
					onIncreaseQty={this.handleIncreaseQty}
					onDecreaseQty={this.handleDecreaseQty}
					onRemoveItem={this.handleRemoveItem}/>
			<footer>
				<Footer cost={this.cart_total()}/>
			</footer>			
		</div>
		);
	}
  
}

export default App;

import React, { Component } from 'react'

import { foodData, drinkData, wineData } from '../foodata/fooddata'

import axios from 'axios'

const ProductContext =  React.createContext()

const Collect = grp => {
  var collect = []
	Object.keys(grp).map(i => grp[i].map(item => collect.push(item)))
	return collect
}
const foods = Collect(foodData)
const drinks = Collect(drinkData)
const wine = Collect(wineData)

const data = foods.slice(0, 5)

class ProductProvider extends Component {
  state = {
    foodList: foods,
    drinkList: drinks,
    wineList: wine,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    email: '',
    password: '',
    dash: false,
    dashCart: [],
    error: {}
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  signIn = (e) => {
    e.preventDefault()
    // console.log('logged')
    const newUser = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:5000/api/users/login', newUser)
      .then(res => this.setState({ dashCart: res.data.decode.user, dash: true }))
      // .then(() => this.props.history.push('/dashboard'))
      // .then((res) => console.log('login success', res.data.decode.user))
      .catch(err => this.setState({ error: err.response.data }))
  }

  logOut = () => {
    this.setState({ dash: false })
  }
  getItem = (id, items) => {
    const product = items.find(item => item.id === id)
    return product
  }
  addtoCart = (id) => {
    let tempProducts = [...this.state.foodList]
    const index = tempProducts.indexOf(this.getItem(id, this.state.foodList))
    const product = tempProducts[index]
    product.count = 1
    const price = product.price
    product.total = price 
  
    this.setState({ foodList: tempProducts, cart: [...this.state.cart, product] }, () => {
      this.addTotal()
    });
  }

  addTotal = () => {
    let subtotal = 0;
    this.state.cart.map(item => subtotal += item.total)
    const tempTax = subtotal * 0.1
    const total = subtotal + tempTax

    this.setState({ cartSubTotal: subtotal, cartTax: tempTax, cartTotal: total });
  }
  increment = (id) => {
    // console.log(' increment - '+ id)
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id == id)

    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count = product.count + 1
    product.total = product.count * product.price

    this.setState({ cart: [...tempCart] }, () => {
      this.addTotal()
    });
  }

  decrement = (id) => {
    // console.log(' decrement - '+ id)
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => item.id == id)

    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count = product.count - 1;

    if(product.count == 0){
      this.removeItem(id)
    }
    else{
      product.total = product.count * product.price
        
      this.setState({ cart: [...tempCart] }, () => {
        this.addTotal()
      });
    }
  }

  removeItem = (id) => {
    let tempCart = [...this.state.cart]
    tempCart = tempCart.filter(item => item.id !== id);
    // if(tempCart[0]) {
    //   tempCart[0].inCart = false;
    //   tempCart[0].count = 0;
    //   tempCart[0].total = 0;
    // }
    // console.log('Item removed '+ id)
    this.setState({ cart: tempCart }, () => {
      this.addTotal()
    });
  }

  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.addTotal()
    });
  }


  render() {
    const { dash, dashCart, error, email, password } = this.state
    // console.log(email , ' context email')
    return (
      <ProductContext.Provider value={{
        ...this.state,
        addtoCart: this.addtoCart,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart,
        handleChange: this.handleChange,
        signIn: this.signIn,
        logOut: this.logOut
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}


const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}
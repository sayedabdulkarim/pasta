import React, { Component } from 'react'
import styles from './cart.css'

import axios from 'axios'

import bgImg from '../../images/empty.png'
import empty from '../../images/empty2.png'

import Paypal from './paypal/paypal'
import Stripe from './stripe/stripe'

import { ProductConsumer } from '../../context/context'

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password2: '',
  phone: '',
  city: '',
  address: '',

  errors: {},
  firstnameError: '',
  lastnameError: '',
  emailError: '',
  passwordError: '',
  password2Error: '',
  phoneError: '',
  cityError: '',
  addressError: ''
}

export default class Cart extends Component {
  state = initialState
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  } 

  validate = () => {
    let error = '';
    let firstnameError = '';
    let lastnameError = '';
    let emailError = '';
    let passwordError = '';
    let password2Error = '';
    let phoneError = '';
    let cityError = '';
    let addressError = ''

    const { firstname, lastname, email, password, password2, phone, city, address} = this.state

    //all
    // if(!firstname || !lastname || !email || !password || !phone || !city || !address){
    //   error = 'Please fill all the form fields.'
    // }

    //firstname lastname city address
    if(!firstname){
      firstnameError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> firstname cannot be blank</span>
    }
    //lastname
    if(!lastname){
      lastnameError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> lastname cannot be blank</span>
    }
    //email
    if(!email){
      emailError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> email cannot be blank</span>
    }
    // city
    if(!city){
      cityError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> city cannot be blank</span>
    }
    //address
    if(!address){
      addressError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> address cannot be blank</span>
    }
    //password password2
    if(!password || !password2){
      passwordError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> password cannot be blank</span>
      password2Error = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> confirm password cannot be blank</span>
    }
    if(password.length < 3 || password.length > 8){
      passwordError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> password length must be in between 3 - 8.</span>
    }

    if(password != password2){
      password2Error = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> password doesnot match.</span>
    }
    
    //phone
    if(phone.length != 10){
      phoneError = <span><i style={{cursor: 'pointer'}} className="fas fa-times"></i> number must be of 10 digits.</span>
    }
    
    //////////////////////
    if( error || firstnameError || lastnameError || emailError || passwordError || password2Error || phoneError || cityError || addressError){
      this.setState({ error, firstnameError, lastnameError, emailError, passwordError, password2Error, phoneError, cityError, addressError });
      return false
    }

    return true
  }

  render() {
    return (
      <ProductConsumer>
        {
          val => {
            const { cart, cartSubTotal, cartTax, cartTotal, increment, decrement, removeItem, clearCart } = val

            const handleSubmit = (e) => {
              e.preventDefault()
              const isValid = this.validate()
              const { firstname, lastname, email, password, phone, city, address } = this.state
              const newUser = { firstname, lastname, email, password, phone, city, address, cart, totalPay: cartSubTotal }

              if(isValid){
                {/* console.log(this.state) */}
                axios.post('http://localhost:5000/api/users/register', newUser)
                  .then(res => {
                    {/* console.log(res) */}
                    this.setState( initialState );
                    clearCart()
                    this.props.history.push('/')
                  })
                  .catch(err => this.setState({ errors: err.response.data }))
              }
              
            }

            {/* let showCart = <p style={{textAlign: 'center', marginTop: '100px'}}>Please add items :)</p> */}
            let showCart = (
              <div style={{width: '100%', border: ''}}>
              <img src={ empty } style={{backgroundSze: 'cover',width: '50%', display: 'block', margin: '150px auto', border: ''}} alt=""/>
              </div>
            )

            if(cart.length){
              showCart = (
                <div className={styles.Cartitems}>
                  <div className={styles.Form}>
                    <form action="" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" name='firstname' onChange={this.handleChange} value={this.state.firstname} placeholder='firstname'/>
                        <span>{this.state.firstnameError}</span>
                      </div>
                      <div>
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" name='lastname' onChange={this.handleChange} value={this.state.lastname} placeholder='lastname'/>
                        <span>{this.state.lastnameError}</span>
                      </div>
                      
                      <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' onChange={this.handleChange} value={this.state.email} placeholder='email'/>
                        <span>{this.state.errors ? <span>{this.state.errors.msg}</span> : null} </span>
                        <span>{this.state.emailError}</span>
                      </div>
                      
                      <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' onChange={this.handleChange} value={this.state.password} placeholder='password'/>
                        <span>{this.state.passwordError}</span>
                      </div>
                      
                      <div>
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" name='password2' onChange={this.handleChange} value={this.state.password2} placeholder='confirm password'/>
                        <span>{this.state.password2Error}</span>
                      </div>
                      
                      <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="number" name='phone' onChange={this.handleChange} value={this.state.phone} placeholder='Phone'/>
                        <span>{this.state.phoneError}</span>
                      </div>
                      
                      <div>
                        <label htmlFor="city">City</label>
                        <input type="text" name='city' onChange={this.handleChange} value={this.state.city} placeholder='City'/>
                        <span>{this.state.cityError}</span>
                      </div>
                      
                      <div>
                        <label htmlFor="address">Address</label>
                        <textarea name="address" rows='5' onChange={this.handleChange} value={this.state.address} placeholder="Address"></textarea>
                        <span>{this.state.addressError}</span>
                      </div>
                      
                      <input type="submit" value='submit'/>
                    </form>
                  </div>

                  {/* //////////////////////////// */}

                  <div className={styles.Cart}>
                    <table>
                      <tbody>
                          <tr>
                            <th>Product</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Remove</th>
                            <th>Total</th>
                          </tr>
                          {
                            cart.map(item => {
                              const { id, image, title, price, total, count } = item
                              return(
                                <tr key={id}>
                                  <td><img src={image} alt="image"/></td>
                                  <td>{ title }</td>
                                  <td>Rs.{ price.toFixed(2) }</td>
                                  <td><i className='fas fa-plus'  onClick={() => increment(id)}/> { count } <i className='fas fa-minus' onClick={() => decrement(id)}/></td>
                                  <td><i className='fas fa-trash-alt' style={{color: 'red'}} onClick={() => removeItem(id)}/></td>
                                  <td>Rs.{ total.toFixed(2) }</td>
                                </tr>
                              )
                            })
                          }
                      </tbody>
                    </table>
                    <div className={styles.Payment}>
                      <div></div>
                      <div>
                        <strong>Cart Price : Rs.{cartSubTotal.toFixed(2)}</strong>               
                        <strong>Price Tax : Rs.{cartTax.toFixed(2)}</strong>              
                        <strong>Total Price : Rs.{ (cartTotal).toFixed(2) }</strong>               
                        <Paypal />
                        <Stripe />
                      </div>
                    </div>
                  </div>

                </div>
              )
            }
            {/* console.log(this.state.errors.msg, ' errorssssss') */}
            return(
              <React.Fragment>
                {showCart}
              </React.Fragment>
            )
          }
        }
      </ProductConsumer>
    )
     
  }
}


import React, { Component } from 'react'
import { ProductConsumer } from '../../../context/context'

import styles from './dashboard.css'

import axios from 'axios'

export default class Dashboard extends Component {
  state = {
    food: []
  }
  render() {
    return (
      <ProductConsumer>
        {
          val => {
            const { dashCart, dash, foodList } = val
            const { firstname, lastname, address, cart, city, email, phone, totalPay } = dashCart
            const total = (totalPay * 1).toFixed(2);
            const data = foodList.slice(0, 5)
            {/* console.log('data ', data) */}
            let dashText= <p style={{textAlign: 'center', margin: '110px 0', fontSize: "0.8rem", color: 'orange'}}>Please login to view your previous orders.</p>
            if(dash){
              dashText = (
                <div className={styles.Dashboard}>
                  <div>
                    <h1>Welcome {firstname} {lastname} </h1>
                    <h3>Your Previous Orders :-</h3>
                  </div>
                  <table>
                    <tbody>
                    <tr>
                      <th>Product</th>
                      <th>Product name</th>
                      <th>Count</th>
                      <th>Price</th>
                    </tr>
                    {
                      cart.map(i => {
                        const { title, count, price, id, image } = i
                        {/* console.log(title) */}
                        return(
                        <tr key={id}>
                          <td><img src={image} alt=""/></td>
                          {/* <td>{title}</td> */}
                          <td>{title}</td>
                          <td>{count}</td>
                          <td>Rs.{price.toFixed(2)}</td>
                        </tr>
                        )
                      })
                    }
                     
                    </tbody>
                  </table>
                  <div className={styles.Dashaddress}>
                    <div>
                      <p>{firstname} {lastname}</p>
                      <p><i className='fas fa-mobile-alt' style={{mar5ginRight: '20px'}}> +91-{phone}</i></p>
                      <p>{ email }</p>
                      <p>{city}, { address }</p>
                    </div>

                    <strong>Paid :- Rs.{total}</strong>
                  </div>
              </div>
              )
            }
            return(
              <h1 style={{marginTop: '90px'}}>{dashText}</h1>
            )
          }
        }
      </ProductConsumer>
    )
  }
}



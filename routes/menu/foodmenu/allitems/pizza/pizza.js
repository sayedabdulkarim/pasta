import React, { Component } from 'react';
import styles from './pizza.css'

import { Link } from 'react-router-dom'

// import { foodData } from '../../../../../../data/data'

import { ProductConsumer } from '../../../../../context/context'
// import PropTypes fronm

class Pizza extends Component {
  
  render() { 
    return ( 
      <div className={styles.Pizza}>
          <section className={styles.Pizzaitems}>
            <ul>
              <ProductConsumer>
                {
                  val => {
                    const { foodList, addtoCart, cart } = val
                    const pizza = foodList.filter(i => i.type === 'pizza')

                    const cartIds = cart.map(c => c.id);
                    return(
                      <ul>
                        {
                          pizza.map(item => {
                          const {title, info, price, id, image, inCart} = item
                          return(
                            <li key={id}>
                              <img src={image} alt=""/>
                              <div className={styles.Description}>
                                <Link to='/allitems'><strong> {title}</strong></Link>
                                <h6>Rs.{price.toFixed(2)}</h6>
                              </div>
                              <span className={styles.Icon}>
                                {cartIds.includes(id) ? (<span><i className="fas fa-check"></i>in cart</span>) : (<i className='fas fa-cart-plus' onClick={() => addtoCart(id)}></i>) }                              
                              </span>
                              <h6>{info}</h6>
                            </li>  
                          )
                        })}
                      </ul>
                    )
                  }
                }
              </ProductConsumer>
            </ul>
          </section>
          
        </div>
     );
  }
}
 
export default Pizza;
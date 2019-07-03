import React, { Component } from 'react';
import styles from './grill.css'

import { Link } from 'react-router-dom'

// import { foodData } from '../../../../../../data/data'

import { ProductConsumer } from '../../../../../context/context'
// import PropTypes fronm

class Grill extends Component {
  
  render() { 
    return ( 
      <div className={styles.Grill}>
          <section className={styles.Grillitems}>
            <ul>
              <ProductConsumer>
                {
                  val => {
                    const { foodList, addtoCart, cart } = val
                    const grill = foodList.filter(i => i.type === 'grill')

                    const cartIds = cart.map(c => c.id);
                    return(
                      <ul>
                        {
                          grill.map(item => {
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
 
export default Grill;
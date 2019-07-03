import React, { Component } from 'react';
import styles from './beverage.css'

import { Link } from 'react-router-dom'

// import { foodData } from '../../../../../../data/data'

import { ProductConsumer } from '../../../../../context/context'
// import PropTypes fronm

class Beverage extends Component {
  
  clicked = (id) => {
    console.log(id)
  }
  render() { 
    return ( 
      <div className={styles.Beverage}>
          <section className={styles.Beverageitems}>
            <ul>
              <ProductConsumer>
                {
                  val => {
                    const { drinkList, addtoCart, cart } = val
                    const beverage = drinkList.filter(i => i.type === 'beverage')

                    {/* console.log(addtoCart) */}

                    const cartIds = cart.map(c => c.id);
                    return(
                      <ul>
                        {
                          beverage.map(item => {
                          const {title, info, price, id, image, inCart} = item
                          return(
                            <li key={id}>
                              <img src={image} alt=""/>
                              <div className={styles.Description}>
                                <Link to='/allitems'><strong> {title}</strong></Link>
                                <h6>Rs.{price.toFixed(2)}</h6>
                              </div>
                              <span className={styles.Icon}>
                                {/* {cartIds.includes(id) ? (<span><i className="fas fa-check"></i>in cart</span>) : (<i className='fas fa-cart-plus' onClick={() => addtoCart(id)}></i>) }                               */}
                                { cartIds.includes(id) ? (<span><i className="fas fa-check"></i> in cart</span>) : ( <i className="fas fa-cart-plus" onClick={() => this.clicked(id)}></i>)}
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
 
export default Beverage;
import React from 'react'

import styles from  './Sidedrawer.css'

import { Link } from 'react-router-dom'

import { ProductConsumer } from '../../context/context'

export default function SideDrawer({show}) {
  let drawClasses = `${styles.Sidedrawer}`
  if(show){
    // drawClasses = ['side-drawer', 'open']
    drawClasses =  `${styles.Sidedrawer} ${styles.open}`
  }
  return (
    <ProductConsumer>
      {
        val => {
          const { cart } = val
          return(
            <nav className={drawClasses}>
              <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/ourfood">OUR FOOD</Link></li>
                <div className={styles.Dropdown}>
                    <li>OUR MENU </li>
                    <div className={styles.Dropdowncontent}>
                      <Link to="/foodmenu">FOOD MENU</Link>
                      <Link to="/drinkmenu">DRINKS MENU</Link>
                    </div>
                </div>
                <li><Link to="/restaurants">OUR RESTAURANTS</Link></li>
                <li  style={{border: '', position: 'relative'}}><Link to='/cart'><i className='fas fa-cart-plus' /></Link> <span style={{border: '', position: 'absolute', top: '-13px', fontWeight: 'bolder'}}>{ cart.length }</span></li>
              </ul>
            </nav>
          )
        }
      }
    </ProductConsumer>
  )
}

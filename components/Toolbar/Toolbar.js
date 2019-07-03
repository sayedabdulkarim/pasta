import React from 'react'

import styles from  './Toolbar.css'

import { Link } from 'react-router-dom'

import DrawerToggle from '../Sidedrawer/Drawertoggle'

import { ProductConsumer } from '../../context/context'

//images
import logo from '../../images/logo.png'

export default function Toolbar({drawerClickHandler}) {
  return (
    <ProductConsumer>
      {
        val => {
          const { dash, logOut, cart } = val

          let auth = <li><Link to='/signin'>SIGN IN</Link></li>

          if(dash){
            auth = <li><Link onClick={logOut} to='/'>SIGN OUT</Link></li>
          } 
          return(
            <header className={styles.Toolbar}>
              <nav className={styles.Toolbarnav}>
                {/* <div className='toolbar-logo'> <a href="/">MY LOGO</a> </div> */}
                <div className={styles.Toolbarlogo}> <Link to="/"><img src={logo} alt="avvaat"/></Link> </div>
                <div className={styles.Spacer}></div>
                <div className={styles.Toolbaritems}>
                  <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT US</Link></li>
                    <li><Link to='/ourfood'>OUR FOOD</Link></li>
                    <div className={styles.Dropdown}>
                    <li className={styles.Dropbtn}><Link to='/'>OUR MENU</Link></li>
                    <div className={styles.Dropdowncontent}>
                      <Link to='/foodmenu'>FOOD MENU</Link>
                      <Link to='/drinkmenu'>DRINKS MENU</Link>
                    </div>
                  </div> 
                    <li><Link to='/restaurants'>OUR RESTAURANTS</Link></li>
                    {/* <li><Link to='/contact'>CONTACT US</Link></li> */}
                    { auth }
                    <li style={{ position: 'relative' }}><Link to='/cart'><i className='fas fa-cart-plus' /></Link> <span style={{ fontWeight: 'bold', position: 'absolute', top: '-15px', right: '0px', color:'#FF7252'}}>{ cart.length }</span></li>

                  </ul>
                </div>
                <div>
                  <DrawerToggle clicked={drawerClickHandler}/>
                </div>
              </nav>
            </header>
          )
        }
      }
    </ProductConsumer>
  )
}


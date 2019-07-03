import React, { Component } from 'react'
import styles from './About.css'

import { Link } from 'react-router-dom'

//images
import logo from '../../images/logo.png'
import fone from '../../images/fone.png'
import ftwo from '../../images/ftwo.png'
import fthree from '../../images/f-3.png'
import ffour from '../../images/ffour.png'
import ffive from '../../images/ffive.png'

export default class About extends Component {
  render() {
    return (
      <div className={styles.About}>
      {/* <h1>About</h1> */}
      <img src={logo} alt="params"/>
      <p>
        Pasta Street was born out of an idea by our Italian Chairman, with the intention of bringing a great Italian dining experience to discerning Indian customers, at very affordable prices. Quite simply; it’s Italian food, by Italians, to suit all palates! 
      </p>
      <p>
        We started our journey in Bangalore in 2011 but we don’t intend for it to end there and plan to expand the business in the coming months and years to other cities and regions of India and take our delicious Italian menus and truly modern Italian style to a much wider audience.
      </p>

      <Link to='/about' className={styles.View}>View More</Link>

      <div className={styles.Showcase}>
        <h1>WHY CHOOSE US</h1>

        <section className={styles.Mainabout}>
          <ul>
            <li className={styles.Item}>
              <img src={fone} alt="avatar"/>
              <h5>COMPREHENSIVE MENU</h5>
              <p>A wide variety of truly authentic Italian dishes to suit all tastes.</p>
            </li>
            <li className={styles.Item}>
              <img src={ftwo} alt="avatar"/>
              <h5>AMBIENCE</h5>
              <p>
                Italians are all about family, environment for all with a great atmosphere for relaxing and socialising.
              </p>
            </li>
            <li className={styles.Item}>
              <img src={fthree} alt="avatar"/>
              <h5>SERVICE</h5>
              <p>Efficient, courteous, friendly and unobtrusive. Nothing is too much trouble.</p>
            </li>
            <li className={styles.Item}>
              <img src={ffour} alt="avatar"/>
              <h5>HEALTH & HYGIENE</h5>
              <p>A top priority for us applying international standards both front and back of house.</p>
            </li>
            <li className={styles.Item}>
              <img src={ffive} alt="avatar"/>
              <h5>AFFORDABILITY</h5>
              <p>
                Premium quality, deliciously fresh, Italian food at affordable prices.
              </p>
            </li>
          </ul>
        </section>

      </div>
        
    </div>
    )
  }
}

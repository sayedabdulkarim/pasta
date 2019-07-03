import React, { Component } from 'react';
import styles from './foodmenu.css'

import bgImage from '../../../images/foodbg.jpg'
import { Link } from 'react-router-dom'

//images
import foodone from '../../../images/foodone.png'
import foodtwo from '../../../images/foodtwo.png'
import foodthree from '../../../images/foodthree.png'
import foodfour from '../../../images/foodfour.png'
import foodfive from '../../../images/foodfive.png'
import foodsix from '../../../images/foodsix.png'
import foodseven from '../../../images/foodseven.png'
import foodeight from '../../../images/foodeight.jpg'
import foodnine from '../../../images/foodnine.png'
import foodten from '../../../images/foodten.jpg'
import foodeleven from '../../../images/foodeleven.jpg'
import foodtwelve from '../../../images/food12.jpg'

class Foodmenu extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <div className={styles.Foodmenu} style={{backgroundImage: `url(${bgImage})`}}>
          <h1>OUR FOOD - BUON APPETITO!</h1>
          <p>
            At Pasta Street, we pride ourselves on our delicious choices on Pastas and Pizzas.<br/>
            Come take a tour of the delicacies that we have to offer, critics will agree <br/>
            that the tastes are even more satisfying.
          </p>

          <div className={styles.Row}>
            <ul>
              <li>
                <Link to='/allItems'>
                  <img src={foodone} alt="avatar"/>
                </Link>
              </li>

              <li>
                <Link to='/allItems'>
                  <img src={foodtwo} alt="avatar"/>
                </Link>
              </li>

              <li>
                <Link to='/allItems'>
                  <img src={foodthree} alt="avatar"/>
                </Link>
              </li>

              <li>
                <Link to='/allItems'>
                  <img src={foodfour} alt="avatar"/>
                </Link>
              </li>

              <li>
                <Link to='/allItems'>
                  <img src={foodfive} alt="avatar"/>
                </Link>
              </li>

              <li>
                <Link to='/allItems'>
                  <img src={foodsix} alt="avatar"/>
                </Link>
              </li>

              <li>
                <Link to='/allItems'>
                  <img src={foodseven} alt="avatar"/>
                </Link>
              </li>

              <li>
                <Link to='/allItems'>
                  <img src={foodeight} alt="avatar"/>
                </Link>
              </li>

              <li>
                <Link to='/allItems'>
                  <img src={foodnine} alt="avatar"/>
                </Link>
              </li>

              <li>
                <Link to='/allItems'>
                  <img src={foodten} alt="avatar"/>
                </Link>
              </li>

              <li>
                <Link to='/allItems'>
                  <img src={foodeleven} alt="avatar"/>
                </Link>
              </li>

              <li>
                <Link to='/allItems'>
                  <img src={foodtwelve} alt="avatar"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
     );
  }
}
 
export default Foodmenu;
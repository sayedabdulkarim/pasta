import React, { Component } from 'react';
import styles from './mainDrink.css'

import Drinksmenu from './drinkmenu/drinkmenu'
import Winemenu from './winemenu/winemenu'

import bgImage from '../../../images/foodbg.jpg'

import { Link, NavLink } from 'react-router-dom'

class MainDrink extends Component {
  state = {
      clicked: false
    }
  
  wine = () => {
    this.setState({ clicked: true });
  }
  drinks = () => {
    this.setState({ clicked: false });
  }
  render() { 
    let activeComp = <Drinksmenu />
    if(this.state.clicked){
      activeComp = <Winemenu />
    }
    return ( 
      <React.Fragment>
        <div className={styles.Drinkmenu} style={{ backgroundImage: `url(${bgImage})`}}>
          <h1>OUR DRINKS - SALUTI!</h1>
          <div className={styles.Option}>
            <Link to='/drinkmenu' onClick={this.drinks}>Drinks Menu</Link>
            <Link to='/drinkmenu' onClick={this.wine}>Wine Menu</Link>
          </div>
          { activeComp }          
        </div>
      </React.Fragment>
     );
  }
}
 
export default MainDrink;
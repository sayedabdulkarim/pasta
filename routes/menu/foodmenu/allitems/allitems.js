import React, { Component } from 'react'
import styles from './allItems.css'
// import '../../../../../App.css';

import Appetizer from './appetizer/appetizer'
import Desert from './desert/desert'
import Grill from './grill/grill'
import Pasta from './pasta/pasta'
import Pizza from './Pizza/Pizza'
import Soup from './Soup/Soup'

import {Link, NavLink } from 'react-router-dom'

export default class Sidebar extends Component {

    state = {
        appetizer: true,
        desert: false,
        grill: false,
        pasta: false,
        pizza: false,
        soup: false
    }

  showAppetizer = () => {
    this.setState({ appetizer: true, desert: false, grill: false, pasta: false, pizza: false, soup: false });
  }
  showDesert = () => {
    this.setState({ appetizer: false, desert: true, grill: false, pasta: false, pizza: false, soup: false });
  }
  showGrill = () => {
    this.setState({ appetizer: false, desert: false, grill: true, pasta: false, pizza: false, soup: false });
  }
  showPasta = () => {
    this.setState({ appetizer: false, desert: false, grill: false, pasta: true, pizza: false, soup: false });
  }
  showPizza = () => {
    this.setState({ appetizer: false, desert: false, grill: false, pasta: false, pizza: true, soup: false });
  }
  showSoup = () => {
    this.setState({ appetizer: false, desert: false, grill: false, pasta: false, pizza: false, soup: true });
  }
  render() {
    let showItem = <Appetizer />
    if(this.state.desert){
      showItem = <Desert />
    }
    if(this.state.desert){
      showItem = <Desert />
    }
    if(this.state.grill){
      showItem = <Grill />
    }
    if(this.state.pasta){
      showItem = <Pasta />
    }
    if(this.state.pizza){
      showItem = <Pizza />
    }
    if(this.state.soup){
      showItem = <Soup />
    }
    return (
      <React.Fragment>
        <div className={styles.Allitems}>
          <div className={styles.Allitemsleft}>
            <ul>              
              <li onClick={this.showAppetizer}><NavLink to='/allitems' activeClassName={ this.state.appetizer ? styles.active : null }>Appetizer</NavLink></li>
              <li onClick={this.showDesert}><NavLink to='/allitems' activeClassName={ this.state.desert ? styles.active : null }>Desert</NavLink></li>
              <li onClick={this.showSoup}><NavLink to='/allitems' activeClassName={ this.state.soup ? styles.active : null }>Soup</NavLink></li>
              <li onClick={this.showPizza}><NavLink to='/allitems' activeClassName={ this.state.pizza ? styles.active : null }>Pizza</NavLink></li>
              <li onClick={this.showPasta}><NavLink to='/allitems' activeClassName={ this.state.pasta ? styles.active : null }>Pasta</NavLink></li>
              <li onClick={this.showGrill}><NavLink to='/allitems' activeClassName={ this.state.grill ? styles.active : null }>Grill</NavLink></li>
            </ul>
          </div>
          <div className={styles.Allitemsright}>
             { showItem }
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

import React, { Component } from 'react'
import styles from './alldrinks.css'
// import '../../../../../App.css';

import Beverage from './beverage/beverage'
import Cocktail from './cocktail/cocktail'
import Coffee from './coffee/coffee'
import Importedwine from './importedwine/importedwine'
import Indianwine from './indianwine/indianwine'
import Mocktail from './mocktail/mocktail'

import { Link, NavLink } from 'react-router-dom'

export default class Sidebar extends Component {

    state = {
        beverage: true,
        cocktail: false,
        coffee: false,
        importedwine: false,
        indianwine: false,
        mocktail: false
    }

  showBeverage = () => {
    this.setState({ beverage: true, cocktail: false, coffee: false, importedwine: false, indianwine: false, mocktail: false });
  }
  showCocktail = () => {
    this.setState({ beverage: false, cocktail: true, coffee: false, importedwine: false, indianwine: false, mocktail: false });
  }
  showCofee = () => {
    this.setState({ beverage: false, cocktail: false, coffee: true, importedwine: false, indianwine: false, mocktail: false });
  }
  showImportedwine = () => {
    this.setState({ beverage: false, cocktail: false, coffee: false, importedwine: true, indianwine: false, mocktail: false });
  }
  showIndianwine = () => {
    this.setState({ beverage: false, cocktail: false, coffee: false, importedwine: false, indianwine: true, mocktail: false });
  }
  showMocktail = () => {
    this.setState({ beverage: false, cocktail: false, coffee: false, importedwine: false, indianwine: false, mocktail: true });    
  }
  render() {
    let showDrinks = <Beverage />

    if(this.state.beverage){
      showDrinks = <Beverage />
    }
    if(this.state.cocktail){
      showDrinks = <Cocktail />
    }
    if(this.state.coffee){
      showDrinks = <Coffee />
    }
    if(this.state.mocktail){
      showDrinks = <Mocktail />
    }
    if(this.state.importedwine){
      showDrinks = <Importedwine />
    }
    if(this.state.indianwine){
      showDrinks = <Indianwine />
    }

    return (
      <React.Fragment>
        <div className={styles.Alldrinks}>
          <div className={styles.Alldrinksleft}>
            <ul>
              <li onClick={this.showBeverage}><NavLink to='/drinkitems' activeClassName={this.state.beverage ? styles.active : null}>Beverage</NavLink></li>
              <li onClick={this.showCocktail}><NavLink to='/drinkitems' activeClassName={this.state.cocktail ? styles.active : null}>Cocktail</NavLink></li>
              <li onClick={this.showCofee}><NavLink to='/drinkitems' activeClassName={this.state.coffee ? styles.active : null}>Coffee</NavLink></li>
              <li onClick={this.showMocktail}><NavLink to='/drinkitems' activeClassName={this.state.mocktail ? styles.active : null}>Mocktail</NavLink></li>
              <li onClick={this.showImportedwine}><NavLink to='/drinkitems' activeClassName={this.state.importedwine ? styles.active : null}>Importedwine</NavLink></li>
              <li onClick={this.showIndianwine}><NavLink to='/drinkitems' activeClassName={this.state.indianwine ? styles.active : null}>Indianwine</NavLink></li>
            </ul>
          </div>
          <div className={styles.Alldrinksright}>
             { showDrinks }
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

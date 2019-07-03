import React, { Component } from 'react';

import Toolbar from '../Toolbar/Toolbar'
import SideDrawer from '../Sidedrawer/Sidedrawer'
import BackDrop from '../Backdrop/Backdrop'

import Carousel from '../../Carousel/carousel'

class Navbar extends Component {
    state = {
      sideDrawerOpen: false
    }

  drawerToggleClickHandler = () => {
    this.setState((state, props) => { return { 
      sideDrawerOpen: !state.sideDrawerOpen 
     }});
    
  }
  backDropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  render() { 
    let backDrop;

    if(this.state.sideDrawerOpen){
      backDrop = <BackDrop clicked={this.backDropClickHandler}/>
    }
    return ( 
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show ={this.state.sideDrawerOpen}/>
        {backDrop}
      </div>
     );
  }
}
 
export default Navbar;

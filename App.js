import React from 'react';
import styles from './App.css'
import { HashRouter, Route, Switch, hashHistory} from 'react-router-dom'


import Navbar from './components/Navbar/Navbar'

import Carousel from './Carousel/carousel'

//about
import About from './routes/About/About'

//ourfood
import Ourfood from './routes/food/food'
//food
import Foodmenu from './routes/menu/foodmenu/foodmenu'
import Allitems from './routes/menu/foodmenu/allitems/allitems'
//drink
import Drinkmenu from './routes/menu/mainDrink/mainDrink'
import Drinkitems from './routes/menu/mainDrink/alldrinks/alldrinks'

//restaurant
import Restaurant from './routes/restaurant/restaurant'

//signin
import Signin from './routes/auth/signin/signin'
import Signup from './routes/auth/signup/signup'

//cart
import Cart from './routes/cart/cart'

//dashboard
import Dashboard from './routes/auth/dashboard/dashboard' 

import Footer from './components/Footer/Footer'

class App extends React.Component {
   state = {
      name: 'Ram'
   }
   render() {
      return (
         <div>

            <HashRouter>
               <Navbar />
               <Switch>
                  
                  <Route path='/about' component={ About }/>
            
                  <Route path='/ourfood' component={ Ourfood }/>

                  <Route path='/foodmenu' component={ Foodmenu }/>
                  <Route path='/allItems' component={ Allitems }/>
                  
                  <Route path='/drinkmenu' component={ Drinkmenu }/>
                  <Route path='/drinkitems' component={ Drinkitems }/>
                  
                  <Route path='/restaurants' component={ Restaurant }/>
                  
                  <Route path='/signin' component={ Signin }/>
                  <Route path='/signup' component={ Signup }/>
                 
                  <Route path='/cart' component={ Cart }/>
                  
                  <Route path='/dashboard' component={ Dashboard }/>

                  <Route path='/' exact component={ Carousel }/>
               </Switch>
               <Footer/>
            </HashRouter>
         </div>
      );
   }
}
export default App;
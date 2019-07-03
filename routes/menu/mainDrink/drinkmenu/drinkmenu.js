import React from "react";
import styles from "./drinkmenu.css";

import { Link } from "react-router-dom";

//images
import drink1 from '../../../../images/drinks1.jpg'
import drink2 from '../../../../images/drinks2.jpg'
import drink3 from '../../../../images/drinks3.jpg'

export default function drinksmenu() {
  return (
    <div className={styles.Drinksmenu}>
      <p>
        Our extensive Bar and drinks list covers a wide range of refreshment
        from soft drinks, teas and coffees through a mouth watering wine
        cocktail and ‘mocktail’ selection to some very fine local Indian and
        imported wines. So, whether you are feeling traditional, fun or
        sophisticated, all of our beverages are synonymous with modern era
        dining and any will complement your delicious meal.
      </p>
      <div className={styles.Row}>
        <ul>
        
          <li>
            <Link to="/drinkitems">
              <img src={ drink1 } alt="avatar" />
            </Link>
          </li>
        
          <li>
            <Link to="/drinkitems">
              <img src={ drink2 } alt="avatar" />
            </Link>
          </li>
        
          <li>
            <Link to="/drinkitems">
              <img src={ drink3 } alt="avatar" />
            </Link>
          </li>
        
        </ul>
      </div>
    </div>
  );
}

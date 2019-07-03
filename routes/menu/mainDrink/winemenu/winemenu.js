import React from "react";
import styles from './winemenu.css'

import { Link } from 'react-router-dom'

//images
import wineone from '../../../../images/wineone.jpg'
import winetwo from '../../../../images/winetwo.jpg'
import winethree from '../../../../images/wine3.jpg'

export default function drinksmenu() {
  return (
    <div className={styles.Winemenu}>
      <p>
        A glass of wine with a meal is a way of life in Italy.  Refreshing and satisfying, the variety of wines around the world is huge.  Each has its own characteristics, of course, and usually selected to match the food that is being eaten.  In years gone by the general rule of thumb was red wine with meat and white wine with fish.  While it is true that some wines and foods seem to be perfectly matched – they just do go together - today, really, whatever wine you enjoy is what you should drink.
      </p>
      <p>
        Volumes have been written on wine etiquette, from what grape is used and what method is employed in processing, to how it is bottled, stored, opened, decanted and (at last!) how it is poured;  but this is the modern era and at Pasta Street we want you to enjoy your choice without fussy rituals.  So, you order the wine you like the sound or taste of and we’ll ensure it is delivered properly and in prime condition for you to savour.
      </p>
      <div className={styles.Row}>

        <ul>
          
          <li>
            <Link to="/drinkitems">
              <img src={ wineone } alt="avatar" />
            </Link>
          </li>
        
          <li>
            <Link to="/drinkitems">
              <img src={ winetwo } alt="avatar" />
            </Link>
          </li>
        
          <li>
            <Link to="/drinkitems">
              <img src={ winethree } alt="avatar" />
            </Link>
          </li>
        
        </ul>

      </div>
    </div>
  );
}

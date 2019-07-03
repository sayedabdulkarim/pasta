import React from 'react'
import styles from './food.css'

import bgImage from '../../images/about.jpg'

//images
import map from '../../images/map.png'

export default function Food() {
  return (
    <div className={styles.Food} style={{backgroundImage: `url(${bgImage})`}}>
          <h1>Our Food</h1>
      <div className={styles.Map}>
        <div className={styles.Left}>
          <img src={map} alt="avatar"/>
        </div>
        <div className={styles.Right}>
          <p>
            Just like India, <span>Italy</span> is a very young country – just over 150 years old in fact. Regionally speaking, however, Italy is very old. Before becoming a country, Italy was divided into <span>kingdoms</span>, princedoms, republics, dukedoms and <span>Papal</span> areas, none of which had much to do with each other (remind you of anywhere?). 
          </p>
          <p>
            To understand Italian <span>cooking</span> you must first understand that today there are twenty distinct regions with unique <span>dietary</span> preferences and local <span>recipes</span>, developed through centuries of historical division and turmoil. While internationally favoured <span>foods</span> and cooking techniques have been integrated into these traditions, <span>foreigners</span> are constantly amazed by the diversity of Italian cuisine when traveling from region to region.
          </p>
          <p>
            As modern <span>technology</span> brings the whole <span>world</span> closer together, there is blurring of the lines between the regions and foods such as <span>Pizza</span>, once only found in <span>Naples</span>, can be found across Italy. There are areas in northern Italy where <span>rice</span> and <span>polenta</span> are the staple starches but <span>pasta</span> can be found everywhere either on its own with sauces or wrapped around <span>flavourful</span> fillings to make <span>ravioli</span> or <span>tortellini</span>. 
          </p>
          <p>
            While modern Italian <span>regional</span> cooking is notably diverse, what all of the regions have in common is a devotion to high quality ingredients. Rather than serving elaborate <span>dishes</span>, each recipe can feature as few as four ingredients allowing the flavour to shine through thanks to uncomplicated <span>elegance</span>. This is one reason for the international popularity of Italian food – a truly global <span>cuisine</span>. 
          </p>
          <p>
            The quickest way to discover and fall in <span>love</span> with Italian food is at the table and Italian cuisine prides itself on simple, delicious, combinations of the finest, freshest ingredients available. So it is at <span>Pasta Street</span>. Our consultant <span>chef</span> has developed a menu of both <span>vegetarian</span> and <span>non vegetarian</span> dishes rooted in authenticity and complemented with a fine wine list that is capable of <span>transporting</span> you around Italy from the mountains and forests of span through the rolling hills of <span>Tuscany</span> to, perhaps, a small bay on the Italian Rivera. All you have to do is enjoy. Come and taste the <span>difference</span> in our food at one of our restaurants soon. If you prefer, choose something from our delivery menu and we will arrange a timed delivery and bring a taste of Italy to you. 
            <span>Buon appetito!</span>
          </p>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

import styles from './About.css'

import bgImage from '../../images/about.jpg'

//images
import logo from '../../images/logo.png'
import chef1 from '../../images/chefone-.png'
import chef2 from '../../images/cheftwo.jpg'

export default function about() {

  return (
    <div className={styles.Myabout} style={{backgroundImage: `url(${bgImage})`}} >
        <div className={styles.Image}>
          <img src={logo} alt="avatar"/>
        </div>
        <section className={styles.Aboutmain} >
          <h6>
            Pasta Street was born out of an idea by our Italian Chairman, with the intention of bringing a great Italian dining experience to discerning Indians customers, at very affordable prices. Quite simply; it’s Italian <span className={styles.Orange}>food</span>, by Italians, to suit all palates!
          </h6>
          <h6>
            We started our journey in Bangalore in 2011 but we don’t intend for it to end there and plan to expand the business in the coming months and years to other cities and regions of India and take our delicious Italian <span className={styles.Orange}>menus</span> and truly modern Italian style to a much wider audience. 
          </h6>
          <h6>
            Our consultant chef is based in Italy and he has expertly designed a comprehensive <span className={styles.Orange}>menu</span> of non-vegetarian and vegetarian Italian dishes to suit all palates. He regularly reviews all of our <span className={styles.Orange}>menus</span> to keep abreast of Italian eating trends and to make sure our customers continue to get an authentic Italian experience.
          </h6>

          <section className={styles.Ourchef}>
            <ul>
              <li className='item'>
                <img src={chef1} alt="avatar"/>
                <h5>Chef Paolo</h5>
                <h5>Rome - Italy</h5>
              </li>
              <li className='item'>
                <img src={chef2} alt="avatar"/>
                <h5>Chef Dimitri</h5>
                <h5>Venice - Italy</h5>
              </li>
            </ul>
          </section>
          <h6> 
            All our dishes are freshly prepared on the premises in an open kitchen environment so you can actually see your food being cooked, and we have a broad <span className={styles.Orange}>drinks</span> and <span className={styles.Orange}>wine</span> list to complement every meal! We even have sitting out areas so that you, too, can dine &ldquo;Al Fresco&rdquo;, just like they do in Italy. Our local staff is fully trained to expertly deliver top quality, authentic, Italian meals in a truly modern Italian setting. We believe that our food quality, international standards and service levels are second to none in our field.
          </h6>
          <h6>
            We would love to serve you. We pride ourselves on our wide-ranging selection of delicious, top quality, Italian dishes, drinks and wine, designed by experts and at affordable prices. Delicious Italian food in truly Italian style, which taste even better than they look! Come and see us soon!
          </h6>
        </section>

        <div className={styles.Bottom}>
          <h2>Our USP</h2>
          <section className={styles.Usp}>
              <div>Vibrant and lively All-Day Dining restaurant with our full menu always available.</div>
              <div>We offer a customised menu with combinations of pasta, sauce and toppings chosen by you.</div>
              <div>Wide ranging selections for both veg and non veg customers.</div>
              <div>We use best ingredients with no compromise in quality and affordability.</div>
              <div>Open Kitchen concept which allows our customers to see their choice of food being cooked.</div>
          </section>
        </div>
    </div>
  )
}

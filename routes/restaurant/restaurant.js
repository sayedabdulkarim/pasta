import React, { Component } from 'react'
import styles from './restaurant.css'

import Map from './Map/Map'
import bgImg from '../../images/ourfood.jpg'

import {Link} from 'react-router-dom'

//images
import r1 from '../../images/images1.jpg' 
import r2 from '../../images/images2.jpg' 
import r3 from '../../images/images3.jpg' 
import r4 from '../../images/images4.jpg' 
import r5 from '../../images/images5.jpg' 
import r6 from '../../images/images6.jpg' 
import r7 from '../../images/images7.jpg' 
import r8 from '../../images/images8.jpg' 
import r9 from '../../images/images9.jpg' 
import r10 from '../../images/images10.jpg' 
import r11 from '../../images/images11.jpg' 
import r12 from '../../images/images12.jpg' 
import r13 from '../../images/images13.jpg' 
import r15 from '../../images/images15.jpg' 
import r16 from '../../images/images16.jpg' 
import r17 from '../../images/images17.jpg' 
import r18 from '../../images/images18.jpg' 
import r19 from '../../images/images19.jpg' 

export default class Restaurant extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.Restaurant} style={{backgroundImage: `url(${bgImg})`}}>
          <div className={styles.Restaurantleft}>
            <h2><i className="fas fa-caret-right"></i> Bangalore </h2>
            <Link to='/one'><i className="fas fa-caret-right"></i> Cunningham Road</Link>
            <Link to='/two'><i className="fas fa-caret-right"></i> Indiranagar</Link>
            <Link to='/one'><i className="fas fa-caret-right"></i> Koramangala</Link>          
          </div>
          <div className={styles.Restaurantright}>
            <div className={styles.Oursection}>
              
              <div className={styles.Leftsection}>
                <div className={styles.Leftsectionleft}>
                  <h3>Cunningham Road</h3>
                  <p>37/2 , Chicago Avenue, Cunningham Road,</p>
                  <p>Opposite Fortis Hospital, Vasanth Nagar,</p>
                  <p>Bengaluru, Karnataka - 560052</p>
                  <h3>For Inquiry or Reservation</h3>
                  <p><i className="fas fa-phone"></i> +91 80 40976578 / +91 80 40976910</p>
                  <p><i className="fas fa-mobile-alt"></i> +91 9886513284</p>
                  <p><i className="far fa-envelope"></i> info@pastastreet.co.in</p>
                  <p><i className="far fa-clock"></i> 11 AM to 11 PM</p>
                </div>
                <div className={styles.Leftsectionright}>
                  <h3>Services</h3>
                  <p><i className="fas fa-check"></i> Home Delivery</p>
                  <p><i className="fas fa-check"></i> Wheelchair Accessible</p>
                  <p><i className="fas fa-check"></i> Serves Halal</p>
                  <p><i className="fas fa-check"></i> Wine</p>
                  <p><i className="fas fa-check"></i> Outdoor Seating</p>
                  <p><i className="fas fa-check"></i> Wallet Accepted</p>
                  <p><i className="fas fa-check"></i> Valet Parking Available</p>
                  <p><i className="fas fa-check"></i> Smoking Area</p>
                  {/* <p><i className="fas fa-check"></i> Smoking Area</p> */}
                  <p><i className="fas fa-check"></i> Cab Service</p>
                </div>
              </div>

              <div className={styles.Rightsection}>
                {/* hello */}
              {/* <div style={{margin: '10px 0 0 0', height: '250px'}} className={styles.Map}> */}
                {/* <Map height='240px' width='80%'/> */}
              {/* </div> */}
              </div>
            </div>
            <div className={styles.Ourimages}>
              <ul className={styles.Resitems}>
                <li className={styles.Resitem}><img src={r1} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r2} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r3} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r4} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r5} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r6} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r10} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r11} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r12} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r7} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r8} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r9} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r16} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r17} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r18} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r13} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r19} alt="avatar"/></li>
                <li className={styles.Resitem}><img src={r15} alt="avatar"/></li>
              </ul>
                            
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}

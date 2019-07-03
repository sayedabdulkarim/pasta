import React from 'react'
import styles from './Footer.css'

export default function Footer() {
  return (
    <footer>
        <div className={styles.Footer}>
            <div className={styles.Footerleft}>
              <span>All rights reserved © 2019 . </span>
              <span><i className="fab fa-github"></i></span>
              <span>|</span>
              <span><i className="fab fa-google-plus-square"></i></span>
            </div>
            <div className={styles.Footerright}>
              <span><i className="fab fa-facebook-f"></i></span>
              <span><i className="fab fa-twitter"></i></span>
              <span><i className="fab fa-linkedin-in"></i></span>
            </div>
        </div>
    </footer>
  )
}

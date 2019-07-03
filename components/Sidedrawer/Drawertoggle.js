import React from 'react'

import styles from './Drawertoggle.css'

export default function DrawerToggle({clicked}) {
  return (
    <button className={styles.Togglebutton} onClick={clicked}>
      <div className={styles.Line}></div>
      <div className={styles.Line}></div>
      <div className={styles.Line}></div>
    </button>
  )
}

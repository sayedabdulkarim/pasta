import React from 'react'

import styles from './Backdrop.css'

export default function BackDrop({clicked}) {
  return (
    <div className={styles.Backdrop} onClick={clicked}>
      
    </div>
  )
}

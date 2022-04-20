import React from 'react'
import styles from './footer.module.css'

const Footer = ({ children }) => {
  return (
    <footer className={styles.outside}>
      <hr />
      <div className={styles.dope}>
        {children}
        <p className={styles.center}>
          made with 💜 by <strong>clouby</strong>
        </p>
      </div>
    </footer>
  )
}

export default Footer

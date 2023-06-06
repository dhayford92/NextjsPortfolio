import React from 'react'
import styles from './page.module.css';
function PortfolioCategory({params}) {
  return (
    <div className={styles.container}>
      <h1>{params.category}</h1>
    </div>
  )
}

export default PortfolioCategory
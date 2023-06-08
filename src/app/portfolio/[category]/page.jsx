import React from 'react'
import styles from './page.module.css';
import Botton from '@/componets/Button/button';
import Image from 'next/image';


function Category({params}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1> 
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Dec</p>
          <Botton url='' text='See More'/>
        </div> 
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/api.png" fill={true} alt=''/>
        </div>
      </div>
      {/* second items */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.desc}>Dec</p>
          <Botton url='' text='See More'/>
        </div> 
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/api.png" fill={true} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Category
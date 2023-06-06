import styles from './page.module.css';
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/componets/Button/Button';
import React from 'react'



const category = [
    {
        id: 1,
        title: 'API Development',
        img: '/api.png',
        url: '/portfolio/api'
    },
    {
        id: 2,
        title: 'Web Applications',
        img: '/website.png',
        url: '/portfolio/webapp'
    },
    {
        id: 3,
        title: 'Mobile Applications',
        img: '/mobile.png',
        url: '/portfolio/mobile'
    },
    {
        id: 4,
        title: 'Desktop Applications',
        img: '/desktop.png',
        url: '/portfolio/desktop'
    }
];




function Portfolio() {
  return (
    <div className={styles.container}>
        <h1 className={styles.selectText} >Choose a gallery</h1>
        <div className={styles.items}>
            {category.map(cat => (
                <Link key={cat.id} href={cat.url} className={styles.item}>
                    <span className={styles.title}>{cat.title}</span>
                </Link>
            ))}
            
        </div>
    </div>
  )
}

export default Portfolio
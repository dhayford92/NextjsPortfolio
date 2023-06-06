import React from 'react'
import styles from './page.module.css';
import Image from 'next/image'
import Button from '@/componets/Button/Button';

export default function Contact(){
    return (
        <div className={styles.container}>
            <h1>Let's Keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image className={styles.image} src='/contact.svg' fill={true}/>
                </div>
                <form className={styles.form}>
                    <input type='text' placeholder='name' className={styles.input} />
                    <input type='email' placeholder='email' className={styles.input} />
                    <textarea className={styles.textArea} cols='30' rows='10' placeholder='message'></textarea>
                    <Button text='Send' url='#'/>
                </form>
            </div>
        </div>
    )
}
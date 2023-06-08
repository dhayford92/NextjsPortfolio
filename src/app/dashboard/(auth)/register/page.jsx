import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function Register(){
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Create Account</h1>
            <form className={styles.form}>
                <input type='text' placeholder='name' className={styles.input} required/>
                <input type='email' placeholder='email' className={styles.input} required/>
                <input type='password' placeholder='password' className={styles.input} required/>
                <button className={styles.btn}>Sign Up</button>
            </form>
            <Link href='/dashboard/login'>SignIn with existing accout</Link>
        </div>
    )
}
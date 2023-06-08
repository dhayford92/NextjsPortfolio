import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';



export default function Login(){
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login Your Account</h1>
            <form className={styles.form}>
                <input type='email' placeholder='email' className={styles.input} required/>
                <input type='password' placeholder='password' className={styles.input} required/>
                <button className={styles.btn}>Sign In</button>
            </form>
            <Link href='/dashboard/register'>Create new account</Link>
        </div>
    )
}
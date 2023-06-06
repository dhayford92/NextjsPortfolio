import React from 'react'
import styles from './page.module.css';
import Image from 'next/image'
import Button from '@/componets/Button/Button';

const About = () => {
    return ( 
        <div className={styles.continer}>
            <div className={styles.imgContainer}>
                <Image fill={true} className={styles.img} src='/aboutus.jpg' alt='about us'/>
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Software Engineer</h1>
                    <h2 className={styles.imgDesc}>All your platform at ones</h2>
                </div>
            </div>
            {/* about content */}
            <div className={styles.textContext}>
                <div className={styles.item}>
                    <h1 className={styles.title}>What Are We</h1>
                    <p className={styles.desc}>Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    Something here. Something here to say.Something here. Something here to say.
                    <br/> <br/>
                    Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    <br/> <br/>
                    Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    Something here. Something here to say. Something here to say.Something here. Something here to say.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who I am?</h1>
                    <p className={styles.desc}>Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    <br/> <br/>
                    Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    Something here. Something here to say.Something here. Something here to say.Something here. Something here to say.
                    </p>
                    <Button url='/contact' text='Contact Me'/>
                </div>
            </div>
        </div>
    )
}

export default About
import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';


const imgs = [
    {
        id: 1,
        imageUrl: '/twitter.png'
    },
    {
        id: 2,
        imageUrl: '/facebook.png'
    },
    {
        id: 3,
        imageUrl: '/linkedin.png'
    },
    {
        id: 4,
        imageUrl: '/instagram.png'
    }
];


// footer component
const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                ©2023 Denzel. All rights reserved
            </div>
            <div className={styles.imgContainer}>
                {imgs.map(image=>(
                    <Image key={image.id} src={image.imageUrl} 
                    width={17} height={17} className={styles.icon} alt="Social Media"/>
                ))}
            </div>
        </div>
    );
};

export default Footer
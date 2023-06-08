import Botton from '@/componets/Button/button'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css';

const descriptors = 'Something here to describe.Something here to describe.Something here to describe.Something here to describe.Something here to describe.Something here to describe.Something here to describe.Something here to describe.';


const blogList = [
    {
        id: 1,
        title: 'My first blog',
        img: '/aboutus.jpg',
        desc: descriptors
    },
    {
        id: 2,
        title: 'My Second blog',
        img: '/dashboard.jpg',
        desc: descriptors
    },
    {
        id: 3,
        title: 'My third blog',
        img: '/team.png',
        desc: descriptors
    },
    {
        id: 4,
        title: 'My Fouth blog',
        img: '/website.png',
        desc: descriptors
    },
    {
        id: 5,
        title: 'My Last blog title',
        img: '/aboutus.jpg',
        desc: descriptors
    }
];



async function getBlogData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!res.ok){
        throw new Error('Failed to get blog data');
    }

    return res.json();
};


export const metadata = {
    title: 'DH | Blog',
    description: 'This is my blog description',
  }


export default async function Blog(){
    const data = await getBlogData();
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                {data.map(blog =>(
                    <div key={blog.userId} className={styles.item}>
                        <div className={styles.imgContainer}>
                            <Image className={styles.img} src='/aboutus.jpg' fill={true} alt=''/>
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{blog.title}</h1>
                            <p className={styles.desc}>{blog.body}</p>
                            <Botton url={'blog/'+blog.id} text='See More'/>
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    )
}
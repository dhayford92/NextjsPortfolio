import Image from 'next/image'
import React from 'react'
import styles from './page.module.css';



export async function generateMetadata({params}) {
    return {
        title: "Denzel Hayford | Blog "+params.id,
        description: "My description here"
    };
};



const BlogPost = ({ params }) => {
    return (
        <div className={styles.container}>
            {/* top container */}
            <div className={styles.topContainer}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Blog Title Here</h1>
                    <p className={styles.desc}>
                        Something here to describe. Something here to describe. Something here to describe.
                        Something here to describe. Something here to describe. Something here to describe.
                        Something here to describe. Something here to describe.
                    </p>
                    <div className={styles.userInfo}>
                        <div className={styles.avatar}>
                            <Image className={styles.img1} fill={true} src='/profile.jpg'/>
                        </div>
                        <span className={styles.username}>Denzel Hayford</span>
                    </div>
                </div>
                <div className={styles.imgContent}>
                    <Image className={styles.img2} fill={true} src='/aboutus.jpg'/>
                </div>
            </div>
             {/* down container */}
            <div className={styles.content}>
                <p>
                Something here to describe. Something here to describe. Something here to describe.
                Something here to describe. Something here to describe. Something here to describe.
                Something here to describe. Something here to describe.
                <br/><br/>
                Something here to describe. Something here to describe. Something here to describe.
                Something here to describe. Something here to describe. Something here to describe.
                <br/><br/>
                Something here to describe. Something here to describe. Something here to describe.
                Something here to describe. Something here to describe. Something here to describe.
                Something here to describe. Something here to describe. Something here to describe.
                Something here to describe. Something here to describe. Something here to describe.
                Something here to describe. Something here to describe. Something here to describe. Something here to describe. Something here to describe.
                Something here to describe. Something here to describe. Something here to describe.
                Something here to describe. Something here to describe.
                </p>
            </div>
        </div>
    )
}

export default BlogPost
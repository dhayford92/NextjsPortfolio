import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.svg'
import Button from '@/componets/Button/Button';



export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>
          Turning all your idea to reality. We bing together
          the terms from the global tech industry
        </p>
        <Button url='/portfolio' text='See Our Works'/>
      </div>
      <Image className={styles.img} src={Hero} alt="home page"/>
    </div>
  )
}

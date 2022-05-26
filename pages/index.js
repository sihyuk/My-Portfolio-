import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head >
        <title>PortFolio</title>
        <meta name="description" content="Portfolio created by me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bibek Maharjan <a href="https://www.linkedin.com/in/bibek-maharjan-7b2976109/">Linkedin Profile</a>
        </h1>
        <Image className = {styles.img} src = "/pic.jpg" atl = "Profile Pic" width={200} height={200}/>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

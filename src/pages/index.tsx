import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {inter} from "@/pages/cars/shared/shared";

export default function Home() {
  return (
      <>
        <Head>
          <title>Car app - Fireship course</title>
          <meta name="description" content="Created while taking the Fireship.io Full React course"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={styles.main}>
          <div className={styles.center}>
            <div className={styles.grid}>
              <a href="http://localhost:3000/cars" className={styles.card}>
                <h2 className={inter.className}>
                  Goto list of cars <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                  Cars app - Created as an exercise taking the Fireship.io Full React course
                </p>
              </a>
            </div>
          </div>
        </main>
      </>
  )
}

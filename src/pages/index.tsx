import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Home = () => (
    <>
      <Head>
        <title>Car cards app - Next.js</title>
        <meta name="description" content="Created while taking the Fireship.io Full React course"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <a href="/cars" className={styles.card}>
          <h2>
            Goto list of cars -&gt;
          </h2>
          <p>
            Cars cards app - an exercise to play around with Next.js SSG AND SSR features
          </p>
        </a>
      </main>
    </>
);
export default Home;

import styles from '../styles/layout.module.css';
import Head from 'next/head'

import Nav from './nav';


export default function Layout(props) {
    return (<>
        <Head>
            <title>Next first</title>
            <meta name="description" content="Next first site" />
            <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      
      <div className={styles.container}>
          <main className={styles.main}>
            {props.children}
          </main>
      </div>
    </>)
  }
  
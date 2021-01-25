import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
import {motion} from 'framer-motion'
import styles from './styles/layout.module.scss'

export default function Layout({children}) {
  return (
    <>
    <Head>
        <title>Law Firm Template</title>
        <link rel="icon" type="image/png" href="/justice.png"/>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&amp;display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Imbue:wght@200&amp;display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda&amp;display=swap" rel="stylesheet"></link>

      </Head>
      <Navbar />
      <motion.div
        initial={{ scale:1, opacity: 0 }}
        animate={{ scale:1,opacity: 1 }}
        exit={{opacity:0}}
        transition={{duration: 0.5 }}
        className={styles.root_container}>
          {children}
        </motion.div>
      <Footer/>
    </>
  )
}

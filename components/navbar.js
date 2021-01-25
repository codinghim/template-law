import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import styles from './styles/nav.module.scss'
import { motion, AnimatePresence} from 'framer-motion'

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false)

  const mobileNav = {
    on: {
      opacity: 1,
      display: "flex",
    },
    off: {
      opacity: 0,
      transition: {
        duration: 1
      }
    },
  }
  const item = {
    on: {
      display: 'flex',
      opacity: 1
    },
    off: {
      display: 'none',
      opacity: 0
    }
  }

  return (
    <nav className={styles.nav_bar}>
      <div className={styles.logo_container}>
        <Link href="/">
          <a className={styles.logo}>
            McLauren &amp; Johnson
          </a>
        </Link>
        <div className={styles.logo_icon}>
          <Link href="/">
            <a><Image src="/justice.png" objectFit="contain"
                    objectPosition="center"
                    layout="fill"/></a>
          </Link>
        </div>
      </div>
      <div className={styles.route_container}>
        <Link href="/about"><a className={styles.route_btn}>ABOUT</a></Link>
        <Link href="/team"><a className={styles.route_btn}>MEET THE TEAM</a></Link>
        <Link href="/services"><a className={styles.route_btn}>SERVICES</a></Link>
        <Link href="/testimonials"><a className={styles.route_btn}>TESTIMONIALS</a></Link>
        <Link href="/contact"><a className={styles.route_btn}>CONTACT US</a></Link>
      </div>
      <div className={styles.route_container_mobile}>
        <motion.div className={styles.nav_modal} onClick={()=>setIsToggle(!isToggle)}>
          <Image src={`/mobileNav/${isToggle ? 'close' : 'menu'}.svg`} alt="Nav Icon" width={30} height={30}/>
        </motion.div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {isToggle && (
          <motion.div
          initial='off'
          animate='on'
          exit='off'
          variants={mobileNav}
          className={styles.nav_bar_mobile}>
          <Link href="/"><motion.a variants={item} className={styles.route_btn}>HOME</motion.a></Link>
          <Link href="/about"><motion.a variants={item} className={styles.route_btn}>ABOUT</motion.a></Link>
          <Link href="/team"><motion.a variants={item} className={styles.route_btn}>TEAM</motion.a></Link>
          <Link href="/services"><motion.a variants={item} className={styles.route_btn}>SERVICES</motion.a></Link>
          <Link href="/testimonials"><motion.a variants={item} className={styles.route_btn}>TESTIMONIALS</motion.a></Link>
          <Link href="/contact"><motion.a variants={item} className={styles.route_btn}>CONTACT</motion.a></Link>
        </motion.div>

        )}
      </AnimatePresence>
    </nav>
  )
}

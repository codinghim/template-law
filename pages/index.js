import styles from '../styles/pages/home.module.scss'
import Layout from '../components/layout'
import ContactForm from '../components/contactform'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <div className={styles.background}>
        <div data-aos="zoom-in"  className={styles.intro_section}>
            <div className={styles.intro_quote}>
              <p className={styles.home_header}>&quot;People do not win people fights. Lawyers do.&quot;</p>
              <sub className={styles.home_header_2}>- Norman Ralph Augustine</sub>
              <div className={styles.badge_container}>
                <div className={styles.badge}>
                  <Image  src={'/badges/rating2.png'} height={150} width={150}/>
                </div>
                <div className={styles.badge}>
                  <Image  src={'/badges/rating1.png'} height={150} width={150}/>
                </div>
                <div className={styles.badge}>
                  <Image  src={'/badges/rating3.png'} height={150} width={150}/>
                </div>
              </div>
              <h1 className={styles.promote}>Our Law Firm recieves the best ratings all around!</h1>
            </div>
            <p className={styles.intro_para}>Here at McLauren &amp; Johnson, our team of attorneys and lawyers make sure our clients recieve the best outcome possible. Place any small introduction text here. Loprem Ipsum vestibulum non eros risus. Etiam tempus massa vitae libero pulvinar rhoncus. Integer vitae est non nibh vehicula pharetra.

            </p>
        </div>
      </div>
      <section className={styles.section_1}>
        <h1 data-aos="fade-in" className={styles.section_header}>Philosophy</h1>
        <p data-aos="fade-in" className={styles.section_para}>Our philosophy revolves around our clients. Justice should be affordable and accessible to all. Place a small description describing your philosophy here. Lorem Ipsum curabitur a nunc sit amet diam accumsan varius.</p>
        <div className={styles.btn_container}>
          <motion.div whileHover={{scale:1.2}} className={styles.btn_1}>
            <Link href="/about"><a>Learn More About Us</a></Link>
          </motion.div>
          <motion.div whileHover={{scale:1.2}} className={styles.btn_1}>
            <Link href="/team"><a>Meet Our Team</a></Link>
          </motion.div>
        </div>
      </section>
      <section className={styles.section_2}>
        <h1 data-aos="fade-in" className={styles.section_header}>Our Services</h1>
        <p data-aos="fade-in" className={styles.section_para}>Our practice areas cover a wide range of topics and are sure to be perfect for your case!</p>
        <div className={styles.service_card_container}>
          <motion.div data-aos="flip-down" className={styles.service_card}>
            <h2>DIVORCE</h2>
            <Image src={'/services/divorce.png'} height={150} width={150}/>
          </motion.div>
          <motion.div data-aos="flip-down" className={styles.service_card}>
            <h2>FINANCE</h2>
            <Image src={'/services/finance.png'} height={150} width={150}/>
          </motion.div>
          <motion.div data-aos="flip-down" className={styles.service_card}>
            <h2>FAMILY</h2>
            <Image src={'/services/family.png'} height={150} width={150}/>
          </motion.div>
          <motion.div data-aos="flip-down" className={styles.service_card}>
            <h2>AUTOMOBILE</h2>
            <Image src={'/services/automobile.png'} height={150} width={150}/>
          </motion.div>
          <motion.div data-aos="flip-down" className={styles.service_card}>
            <h2>IMMIGRATION</h2>
            <Image src={'/services/immigration.png'} height={150} width={150}/>
          </motion.div>
        </div>
        <motion.div whileHover={{scale:1.2}} className={styles.btn_2}>
            <Link href="/services"><a>View Our Services</a></Link>
          </motion.div>
      </section>
      <div className={styles.background_2}>
        <section className={styles.section_3}>
          <h1 data-aos="fade-in" className={styles.section_header2}>We Get Work Done.</h1>
          <p data-aos="fade-in" className={styles.section_para}>Check out our featured testimonials from our satisfied clients!</p>
          <motion.div whileHover={{scale:1.2}} className={styles.btn_1}>
            <Link href="/testimonials"><a>Client Testimonials</a></Link>
          </motion.div>
        </section>
      </div>
      <section className={styles.section_4}>
        <h1 className={styles.section_header}>Contact Us</h1>
        <ContactForm/>
      </section>
    </Layout>
  )
}

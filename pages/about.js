import styles from '../styles/pages/about.module.scss'
import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <main className={styles.about_section}>
        <h1 className={styles.main_header}>About Us</h1>
        <section className={styles.section_1}>
          <div className={styles.sub_section}>
            <h1 className={styles.section_header_1}>Our Mission</h1>
            <div className={styles.section_badge}>
              <Image src={'/about/mission.png'} height={150} width={150}/>
            </div>
            <p className={styles.section_para}>Our mission is to bring justice for those who are wrongfully incriminated. Our mission is to make sure that victims and clientele get rewarded with what they rightfully deserve. Lorem Ipsum etiam tempus massa vitae libero pulvinar rhoncus. Integer vitae est non nibh vehicula pharetra. Proin magna nunc, hendrerit mollis sapien eu, euismod posuere leo. Cras vestibulum ex suscipit vestibulum iaculis.</p>
          </div>
          <div className={styles.section_image}>
            <Image src={'/about/mission1.jpg'} layout="fill" objectFit="contain" objectPosition="center"/>
          </div>
        </section>
        <section className={styles.section_2}>
          <div className={styles.section_image}>
            <Image src={'/about/promise2.jpg'} layout="fill" objectFit="contain" objectPosition="center"/>
          </div>
          <div className={styles.sub_section}>
            <h1 className={styles.section_header_2}>Our Promise</h1>
            <div className={styles.section_badge}>
              <Image src={'/about/promise.png'} height={150} width={150}/>
            </div>
            <p className={styles.section_para}>Our promise to you, will be to use every ounce of our strength to complete the mission of bringing justice to all. Lorem Ipsum etiam tempus massa vitae libero pulvinar rhoncus. Integer vitae est non nibh vehicula pharetra. Proin magna nunc, hendrerit mollis sapien eu, euismod posuere leo. Cras vestibulum ex suscipit vestibulum iaculis.</p>
          </div>
        </section>
        <section data-aos="fade-in" className={styles.section_3}>

            <h1 className={styles.section_header_3}>Your Satisfaction</h1>
            <div className={styles.section_badge}>
              <Image src={'/about/satisfy.png'} height={150} width={150}/>
            </div>
            <p className={styles.section_para2}>McLauren &amp; Johnson promises you 100% satisfaction regardless of your type of case. People should not have to worry about legal nuances and focus more on the important aspects of life! Check out some of our satisfied clientele ratings through their testimonials! Lorem Ipsum etiam tempus massa vitae libero pulvinar rhoncus. Integer vitae est non nibh vehicula pharetra. Proin magna nunc, hendrerit mollis sapien eu, euismod posuere leo. Cras vestibulum ex suscipit vestibulum iaculis.</p>
            <motion.div whileHover={{scale:1.2}} className={styles.btn}>
              <Link href="/testimonials"><a>View Testimonials</a></Link>
            </motion.div>

        </section>
      </main>
    </Layout>
  )
}

import styles from '../styles/pages/services.module.scss'
import Layout from '../components/layout'
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function Services() {

  const services = [
    {
      title: 'DIVORCE',
      iconSrc: '/services/divorce.png',
      desc: 'Place a description of your law service here to give your clients an idea of what type of legal case they are dealing with. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mi eu enim euismod congue. Cras fringilla blandit nulla, id feugiat dui volutpat nec. Vivamus nunc lorem, faucibus nec rutrum sit amet, euismod eu est. Etiam dignissim magna eget iaculis blandit. Vestibulum diam odio, rutrum ac libero quis, luctus ornare neque.'
    },
    {
      title: 'FINANCE',
      iconSrc: '/services/finance.png',
      desc: 'Place a description of your law service here to give your clients an idea of what type of legal case they are dealing with. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mi eu enim euismod congue. Cras fringilla blandit nulla, id feugiat dui volutpat nec. Vivamus nunc lorem, faucibus nec rutrum sit amet, euismod eu est. Etiam dignissim magna eget iaculis blandit. Vestibulum diam odio, rutrum ac libero quis, luctus ornare neque.'
    },
    {
      title: 'FAMILY',
      iconSrc: '/services/family.png',
      desc: 'Place a description of your law service here to give your clients an idea of what type of legal case they are dealing with. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mi eu enim euismod congue. Cras fringilla blandit nulla, id feugiat dui volutpat nec. Vivamus nunc lorem, faucibus nec rutrum sit amet, euismod eu est. Etiam dignissim magna eget iaculis blandit. Vestibulum diam odio, rutrum ac libero quis, luctus ornare neque.'
    },
    {
      title: 'AUTOMOBILE',
      iconSrc: '/services/automobile.png',
      desc: 'Place a description of your law service here to give your clients an idea of what type of legal case they are dealing with. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mi eu enim euismod congue. Cras fringilla blandit nulla, id feugiat dui volutpat nec. Vivamus nunc lorem, faucibus nec rutrum sit amet, euismod eu est. Etiam dignissim magna eget iaculis blandit. Vestibulum diam odio, rutrum ac libero quis, luctus ornare neque.'
    },
    {
      title: 'IMMIGRATION',
      iconSrc: '/services/immigration.png',
      desc: 'Place a description of your law service here to give your clients an idea of what type of legal case they are dealing with. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mi eu enim euismod congue. Cras fringilla blandit nulla, id feugiat dui volutpat nec. Vivamus nunc lorem, faucibus nec rutrum sit amet, euismod eu est. Etiam dignissim magna eget iaculis blandit. Vestibulum diam odio, rutrum ac libero quis, luctus ornare neque.'
    },
  ]

  return (
    <Layout>
      <section className={styles.services_section}>
        <h1 className={styles.main_header}>Services</h1>
        <sub className={styles.sub_header}>Whatever legal case you are dealing with, our trusted team of attorneys and associates are sure to have you covered with reliable work along the way!</sub>

        {services.map((service, idx) => {
          return (
            <article key={idx} className={styles.article}>
              <h1 className={styles.article_header}>{service.title}</h1>
              <div className={styles.article_sub_section}>
                <div data-aos="fade-down-right" className={styles.icon_container}>
                  <Image src={service.iconSrc} layout="fill" />
                </div>
                <div data-aos="fade-in" className={styles.article_text_container}>
                  <p className={styles.article_para}>{service.desc}</p>
                  <ul>
                    <li>Input a detail of your service here!</li>
                    <li>Input a detail of your service here!</li>
                    <li>Input a detail of your service here!</li>
                    <li>Input a detail of your service here!</li>
                  </ul>
                </div>

              </div>
            </article>
          )
        })}

      </section>
    </Layout>
  )
}

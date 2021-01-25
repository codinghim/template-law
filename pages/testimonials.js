import styles from '../styles/pages/testimonials.module.scss'
import Layout from '../components/layout'
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function Testimonials() {

  const testimonials = [
    {
      title: "Testimonial One by Name",
      case: "Place case service area here with a small description",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mi eu enim euismod congue. Cras fringilla blandit nulla, id feugiat dui volutpat nec. Vivamus nunc lorem, faucibus nec rutrum sit amet, euismod eu est. Etiam dignissim magna eget iaculis blandit. Vestibulum diam odio, rutrum ac libero quis, luctus ornare neque.',
    },
    {
      title: "Testimonial Two by Name",
      case: "Place case service area here with a small description",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mi eu enim euismod congue. Cras fringilla blandit nulla, id feugiat dui volutpat nec. Vivamus nunc lorem, faucibus nec rutrum sit amet, euismod eu est. Etiam dignissim magna eget iaculis blandit. Vestibulum diam odio, rutrum ac libero quis, luctus ornare neque.',
    },
    {
      title: "Testimonial Three by Name",
      case: "Place case service area here with a small description",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mi eu enim euismod congue. Cras fringilla blandit nulla, id feugiat dui volutpat nec. Vivamus nunc lorem, faucibus nec rutrum sit amet, euismod eu est. Etiam dignissim magna eget iaculis blandit. Vestibulum diam odio, rutrum ac libero quis, luctus ornare neque.',
    },
    {
      title: "Testimonial Four by Name",
      case: "Place case service area here with a small description",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mi eu enim euismod congue. Cras fringilla blandit nulla, id feugiat dui volutpat nec. Vivamus nunc lorem, faucibus nec rutrum sit amet, euismod eu est. Etiam dignissim magna eget iaculis blandit. Vestibulum diam odio, rutrum ac libero quis, luctus ornare neque.',
    }
  ]

  return (
    <Layout>
      <section className={styles.testimonials_section}>
        <h1 className={styles.main_header}>Testimonials</h1>
        <sub className={styles.sub_header}>Check out our testimonials and reviews from our satisfied clientele from Yelp!</sub>
        <div className={styles.icon_container}>
          <Image layout="fill" src="/badges/rating2.png"/>
        </div>
        <div className={styles.article_container}>
          {testimonials.map((testimonial, idx) => {
            return (
              <article data-aos="fade-in" key={idx} className={styles.article_section}>
                <h1 className={styles.article_header}>{testimonial.title}</h1>
                <sub className={styles.article_sub}>{testimonial.case}</sub>
                <p className={styles.article_para}>&quot;{testimonial.desc}&quot;</p>
              </article>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

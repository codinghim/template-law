import ContactForm from '../components/contactform'
import Layout from '../components/layout'
import styles from '../styles/pages/contact.module.scss'

export default function Contact() {
  return (
    <Layout>
      <section className={styles.contact_section}>
        <h1 className={styles.header}>Contact</h1>
        <ContactForm/>
      </section>
    </Layout>
  )
}

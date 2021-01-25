import styles from './styles/contactform.module.scss'

export default function ContactForm() {
  return (
    <section className={styles.contact_section}>

        <div className={styles.contact_form_container}>
          <div className={styles.contact_form}>

              <input className={styles.input_text} type="text"  placeholder="Name"/>
              <input className={styles.input_text} type="email" placeholder="E-mail"/>

            <input className={styles.input_text_subject} type="text" placeholder="Subject"/>
            <textarea className={styles.input_textarea} placeholder="Message"/>
            <button className={styles.input_btn}>Submit</button>
          </div>
          <div className={styles.firm_info}>
            <h1 className={styles.firm_header}>Address</h1>
            <sub>1004-1004 Madison Ave</sub>
            <sub>New York, NY 10040</sub>
            <h1 className={styles.firm_header}>Open Hours</h1>
            <sub>Monday - Friday 9:00AM to 6:00PM</sub>
            <h1 className={styles.firm_header}>Email</h1>
            <sub>mclaurenandjohnson@email.com</sub>
            <h1 className={styles.firm_header}>Phone</h1>
            <sub>(987)-123-1004</sub>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6179.4736307687845!2d-73.94293223071843!3d40.780626506914665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1610851188348!5m2!1sen!2sus" frameBorder="0" className={styles.iframe} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </section>
  )
}

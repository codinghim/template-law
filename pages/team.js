import styles from '../styles/pages/team.module.scss'
import Layout from '../components/layout'
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function About() {

  const attorneys= [
    {
      imgSrc: '/team/team6.jpg',
      name: 'First Name Last Name',
      description: 'You can place a small desired description for the attorney here! Lorem Ipsum.',
      education: 'University, Degree, Year',
      practice: 'Practice Area'
    },
    {
      imgSrc: '/team/team4.jpg',
      name: 'First Name Last Name',
      description: 'You can place a small desired description for the attorney here! Lorem Ipsum.',
      education: 'University, Degree, Year',
      practice: 'Practice Area'
    },
    {
      imgSrc: '/team/team2.jpg',
      name: 'First Name Last Name',
      description: 'You can place a small desired description for the attorney here! Lorem Ipsum.',
      education: 'University, Degree, Year',
      practice: 'Practice Area'
    },
  ]

  const associates = [
    {
      imgSrc: '/team/team1.jpg',
      name: 'First Name Last Name',
      education: 'University, Degree, Year',
      practice: 'Practice Area'
    },
    {
      imgSrc: '/team/team5.jpg',
      name: 'First Name Last Name',
      education: 'University, Degree, Year',
      practice: 'Practice Area'
    },
    {
      imgSrc: '/team/team3.jpg',
      name: 'First Name Last Name',
      education: 'University, Degree, Year',
      practice: 'Practice Area'
    },
    {
      imgSrc: '/team/team7.jpg',
      name: 'First Name Last Name',
      education: 'University, Degree, Year',
      practice: 'Practice Area'
    },
  ]


  return (
    <Layout>
      <section className={styles.team_section}>
        <h1 className={styles.main_header}>Meet The Team</h1>
        <h1 className={styles.sub_header}>Attorneys</h1>
        <section className={styles.sub_section}>
          <div className={styles.card_container}>
            {attorneys.map((attorney, idx) => {
              return (
                <div className={styles.card} key={idx}>
                  <div className={styles.img_container}>
                    <Image src={attorney.imgSrc} layout="fill" objectPosition="top" objectFit="cover"/>
                  </div>
                  <h1 className={styles.card_header}>
                    {attorney.name}
                  </h1>
                  <p className={styles.card_para}>{attorney.description}</p>
                  <p className={styles.card_service}>Service Specialty: {attorney.practice}</p>
                  <p className={styles.card_edu}>Education: {attorney.education}</p>

                </div>
              )
            })}
          </div>
        </section>
        <section className={styles.sub_section}>
          <h1 className={styles.sub_header}>Associates</h1>
          <div className={styles.card_container}>
            {associates.map((associate, idx) => {
              return (
                <div className={styles.card} key={idx}>
                  <div className={styles.img_container}>
                    <Image src={associate.imgSrc} layout="fill" objectPosition="top" objectFit="cover"/>
                  </div>
                  <h1 className={styles.card_header}>
                    {associate.name}
                  </h1>
                  <p className={styles.card_service}>Service Specialty: {associate.practice}</p>
                  <p className={styles.card_edu}>Education: {associate.education}</p>
                </div>
              )
            })}
          </div>
        </section>
      </section>
    </Layout>
  )
}

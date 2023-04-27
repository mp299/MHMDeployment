import Head from 'next/head'
import styles from '../styles/global.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>myWebClass.org - Learn Tech Skills</title>
        <link rel="stylesheet" type="text/css" href="/styles/Homepage.css"/>
      </Head>
      <header>
        <h1>myWebClass.org</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="intro" className={styles.intro}>
          <h2>Learn Tech Skills with myWebClass.org</h2>
          <p>Are you a student or a teacher looking to improve your tech skills? Look no further than myWebClass.org. We offer a wide range of courses in programming, web development, graphic design, and more. Our courses are designed to help you succeed in your career or your studies.</p>
          <p>With a monthly subscription, you can access all of our courses at any time. We offer flexible learning options to fit your schedule and your budget.</p>
          <a href="#" className={`${styles.cta} cta`}>Get Started Today</a>
        </section>
      </main>
      <footer>
        <p>&copy; myWebClass.org 2023. All rights reserved.</p>
      </footer>
    </>
  )
}
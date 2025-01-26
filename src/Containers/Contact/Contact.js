import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import ContactHero from '../../Components/ContactHero/ContactHero'
import ContactForm from '../../Components/ContactForm/ContactForm'
// import MobileNav from '../../Components/MobileNav/MobileNav'

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import ProjectHero from '../../Components/ProjectHero/ProjectHero'
import ProjectMain from '../../Components/ProjectMain/ProjectMain'

const Projects = () => {
  return (
    <>
      <Navbar />
      <ProjectHero />
      <ProjectMain />
      <Footer />
    </>
  );
}

export default Projects
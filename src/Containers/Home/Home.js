import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HomepageHero from '../../Components/HomepageHero/HomepageHero'
import Footer from '../../Components/Footer/Footer'
import WorkProcess from '../../Components/WorkProcess/WorkProcess'
import Blog from '../../Components/Blog/Blog'
import Description from '../../Components/Description/Description'
import Techwiz from '../../Components/Techwiz/Techwiz'
import Associate from '../../Components/Associate/Associate'
import HomepageProject from '../../Components/HomepageProject/HomepageProject'
import Technologies from '../../Components/Technologies/Technologies'

const Home = () => {
  return (
    <>
      <Navbar />
      <HomepageHero />
      <Associate />
      <Description />
      <Technologies />
      <WorkProcess />
      <Techwiz />
      <Blog />
      <HomepageProject />
      <Footer />
    </>
  );
}

export default Home
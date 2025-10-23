import CaseStudies from '../components/Home/CaseStudies'
import Hero from '../components/Home/Hero'
import HeroScroll from '../components/Home/HeroScroll'

import Introscroller from '../components/Home/Introscroller'
import OmniSection from '../components/Home/OmniSection'
import StoryBanner from '../components/Home/StoryBanner'


import Navbar from '../components/Navbar/Navbar'


const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <div className="home-first-section">
          <Hero/>
        </div>
        <div className="home-first-section">
          <Introscroller/>
        </div>

         <div className="home-first-section">
          <HeroScroll/>
        </div>

        <CaseStudies/>
        <OmniSection/>
        <StoryBanner/>

  
   

   
        
    </div>
  )
}

export default Homepage
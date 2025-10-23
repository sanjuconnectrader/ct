import InsightsSection from '../components/Blogs/InsightsSection'
import Footer from '../components/Footer/Footer'
import CaseStudies from '../components/Home/CaseStudies'
import Hero from '../components/Home/Hero'
import HeroHeadline from '../components/Home/HeroHeadline'
import HeroScroll from '../components/Home/HeroScroll'

import Introscroller from '../components/Home/Introscroller'
import OmniSection from '../components/Home/OmniSection'
import StoryBanner from '../components/Home/StoryBanner'
import WhatYouWillAchieve from '../components/Home/WhatYouWillAchieve'


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
        <WhatYouWillAchieve/>

        <InsightsSection/>
        <HeroHeadline/>

        <Footer/>

  
   

   
        
    </div>
  )
}

export default Homepage
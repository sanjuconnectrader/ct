import InsightsSection from '../components/Blogs/InsightsSection'
import Footer from '../components/Footer/Footer'
import CaseStudies from '../components/Home/CaseStudies'
import ConnectraderHero from '../components/Home/ConnectraderHero'
import Hero from '../components/Home/Hero'
import HeroImpact from '../components/Home/HeroImpact'



import OmniSection from '../components/Home/OmniSection'
import Philosophy from '../components/Home/Philosophy'
import StoryBanner from '../components/Home/StoryBanner'
import ValuesAlt from '../components/Home/ValuesAlt'
import WhatYouWillAchieve from '../components/Home/WhatYouWillAchieve'


import Navbar from '../components/Navbar/Navbar'


const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <div className="home-first-section">
          <Hero/>
        </div>
    
        <ValuesAlt/>
        <ConnectraderHero/>
        <Philosophy/>
        <HeroImpact/>

   
        <CaseStudies/>
        <OmniSection/>
        <StoryBanner/>
        <WhatYouWillAchieve/>

        <InsightsSection/>


        <Footer/>

  
   

   
        
    </div>
  )
}

export default Homepage
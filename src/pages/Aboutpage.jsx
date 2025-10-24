import Aboutheader from "../components/About/Aboutheader"
import CompanyEssence from "../components/About/CompanyEssence"
import CorporateStewardship from "../components/About/CorporateStewardship"
import FAQBlock from "../components/About/FAQBlock"

import TeamIntro from "../components/About/TeamIntro"
import ValueProposition from "../components/About/ValueProposition"
import Values from "../components/About/Values"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

const Aboutpage = () => {
    return (
        <div>
        <Navbar/>
        <Aboutheader/>
        <TeamIntro/>
        <ValueProposition/>    
        <CompanyEssence/>
        <CorporateStewardship/>
        <FAQBlock/>
  
        


        <Footer/>

        </div>
    )
}

export default Aboutpage
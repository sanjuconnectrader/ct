import Footer from "../../components/Footer/Footer"
import Navbar from '../../components/Navbar/Navbar'
import Webdesign from "../../components/Service/Web/Webdesign"
import WebdesignFaq from "../../components/Service/Web/WebdesignFaq"
import Webdesignheader from "../../components/Service/Web/Webdesignheader"
const Webpage = () => {
    return (
        <div>
        <Navbar/>
        <Webdesignheader/>

        <Webdesign/>

        <WebdesignFaq/>

        <Footer/>

        </div>
    )
}

export default Webpage
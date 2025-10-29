import Footer from "../../components/Footer/Footer"
import Navbar from '../../components/Navbar/Navbar'
import Mobiledetails from "../../components/Service/Mobile/Mobiledetails"
import MobileFaq from "../../components/Service/Mobile/MobileFaq"
import Mobileheader from "../../components/Service/Mobile/Mobileheader"

const Mobilepage = () => {
    return (
        <div>
            <Navbar />
            <Mobileheader />

            <Mobiledetails />
            <MobileFaq />
            <Footer />
        </div>
    )
}

export default Mobilepage
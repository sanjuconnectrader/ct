import Footer from "../../components/Footer/Footer"
import Navbar from '../../components/Navbar/Navbar'
import UiFaq from "../../components/Service/Ui/UiFaq"
import Uiheader from "../../components/Service/Ui/Uiheader"
import Uiuxdetails from "../../components/Service/Ui/Uiuxdetails"

const Uipage = () => {
    return (
        <div>
        <Navbar/>
        <Uiheader/>
        <Uiuxdetails/>
        <UiFaq/>


        <Footer/>

        </div>
    )
}

export default Uipage
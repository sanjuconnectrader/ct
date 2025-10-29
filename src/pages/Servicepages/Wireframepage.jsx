import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Wireframingheader from '../../components/Service/Wireframing/Wireframingheader'
import Wireframingdetails from '../../components/Service/Wireframing/Wireframingdetails'
import Wireframefaq from '../../components/Service/Wireframing/Wireframefaq'

const Wireframepage = () => {
    return (
        <div>
        <Navbar/>
        <Wireframingheader/>
        <Wireframingdetails/>
        <Wireframefaq/>


        <Footer/>

        </div>
    )
}

export default Wireframepage
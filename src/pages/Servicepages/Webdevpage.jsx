import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Webdevheader from '../../components/Service/Webdevelopment/Webdevheader'
import WebdevelopmentdetailsFaq from '../../components/Service/Webdevelopment/WebdevelopmentdetailsFaq'
import Webdevelopmentdetails from '../../components/Service/Webdevelopment/Webdevelopmentdetails'

const Webdevpage = () => {
    return (
        <div>
            <Navbar />
            <Webdevheader />

            <Webdevelopmentdetails/>
            <WebdevelopmentdetailsFaq/>
       



            <Footer />

        </div>
    )
}

export default Webdevpage
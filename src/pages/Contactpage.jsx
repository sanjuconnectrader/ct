import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'
import Contactheader from '../components/Contact/Contactheader'

const Contactpage = () => {
    return (
        <div>
            <Navbar />
            <Contactheader/>
            <Contact/>
            <Footer />

        </div>
    )
}

export default Contactpage
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Moyerheader from '../../components/Projects/Moyer/Moyerheader'
import MoyerDetails from '../../components/Projects/Moyer/MoyerDetails'
import MoyerPhoto from '../../components/Projects/Moyer/MoyerPhoto'
import Moyerobjective from '../../components/Projects/Moyer/Moyerobjective'
import Moyerconclusion from '../../components/Projects/Moyer/Moyerconclusion'

const Moyerpage = () => {
    return (
        <div>
            <Navbar />
            <Moyerheader />
            <MoyerDetails />
            <Moyerobjective />
            <MoyerPhoto />
            <Moyerconclusion/>



            <Footer />

        </div>
    )
}

export default Moyerpage
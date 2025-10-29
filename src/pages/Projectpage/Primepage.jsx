import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Primedheader from '../../components/Projects/Primed/Primedheader'
import PrimedDetails from '../../components/Projects/Primed/PrimedDetails'
import Primedconclusion from '../../components/Projects/Primed/Primedconclusion'
import Primedobjective from '../../components/Projects/Primed/Primedobjective'

const Primepage = () => {
  return (
    <div>
        <Navbar/>
        <Primedheader/>

        <PrimedDetails/>
        <Primedobjective/>


        <Primedconclusion/>



        <Footer/>
    </div>
  )
}

export default Primepage
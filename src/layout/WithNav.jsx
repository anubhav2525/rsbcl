import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar.jsx/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Carousel/Carousel'
import Home from '../components/Home/Home'
import DirectoryExciseOffice from '../components/Directory/Excise/Office/DirectoryExciseOffice'
import DirectoryrsbclOffice from '../components/Directory/RSBCL/Office/DirectoryrsbclOffice'
import DirectoryrsbclDepots from '../components/Directory/RSBCL/Depots/DirectoryrsbclDepots'
import DirectoryrsgsmOffice from "../components/Directory/RSGSM/HeadOffice/DirectoryrsgsmOffice"
import DirectoryrsgsmReduction from '../components/Directory/RSGSM/ReductionCenter/DirectoryrsgsmReduction'
import DirectoryrsgsmSugarmill from '../components/Directory/RSGSM/SugarMill/DirectoryrsgsmSugarmill'
import Contact from '../components/Contact/Contact'
import AboutExciseIntroduction from ".././components/About/Excise/Introduction/AboutExciseIntroduction"
import AboutExciseOrganisationSetup from "../components/About/Excise/OrganisationSetup/AboutExciseOrganisationSetup"
import AboutrsbclIntroduction from '../components/About/RSBCL/Introduction/AboutrsbclIntroduction'
import AboutrsbclDirectors from '../components/About/RSBCL/Directors/AboutrsbclDirectors'
import Aboutrsgsm from "../components/About/RSGSM/Aboutrsgsm"
import AdministrativeDashboard from '../components/AdministrativeDashboard/AdministrativeDashboard'

const WithNav = () => {
    return (
        <div className="bg-white  min-h-screen">
            <header className=''>
                <Header />
                <Navbar />
            </header>
            <main className='bg-white dark:bg-slate-900 min-h-96 w-full'>
                {/* <Carousel /> */}
                {/* <Outlet /> */}
                {/* <Home /> */}

                {/* excise  */}
                {/* <DirectoryExciseOffice /> */}

                {/* rsbcl */}
                {/* <DirectoryrsbclOffice /> */}
                {/* <DirectoryrsbclDepots /> */}

                {/* rsgsm */}
                {/* <DirectoryrsgsmOffice /> */}
                {/* <DirectoryrsgsmReduction /> */}
                {/* <DirectoryrsgsmSugarmill /> */}

                {/* contact us */}
                {/* <Contact /> */}

                {/* about excise  */}
                {/* <AboutExciseIntroduction /> */}
                {/* <AboutExciseOrganisationSetup /> */}
                {/* <AboutrsbclIntroduction /> */}
                {/* <AboutrsbclDirectors /> */}
                {/* <Aboutrsgsm /> */}


                {/* Administrative Dashboard */}
                {/* <AdministrativeDashboard /> */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default WithNav

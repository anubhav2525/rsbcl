import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const WithNav = () => {
    return (
        <div className="bg-white min-h-screen">
            <header className=''>
                <Header />
                <Navbar />
            </header>
            <main className='bg-white dark:bg-slate-900 min-h-96 w-full'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default WithNav

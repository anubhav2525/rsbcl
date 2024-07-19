import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar.jsx/Navbar'
import AdministrativeDashboard from '../components/AdministrativeDashboard/AdministrativeDashboard'

const AdministratorLayout = () => {
    return (
        <div className="bg-white min-h-screen">
            <header className=''>
                <Header />
                <Navbar />
            </header>
            <main className='bg-white dark:bg-slate-950 max-h-screen w-full'>
                <AdministrativeDashboard />
            </main>
        </div>
    )
}

export default AdministratorLayout

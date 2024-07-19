import React from 'react'
import ContactCard from './ContactCard'
const Contact = () => {
  return (
    <div className="min-h-screen lg:max-w-7xl mx-auto bg-white dark:bg-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  )
}

export default Contact

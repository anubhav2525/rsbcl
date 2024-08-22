import React from 'react'
import PersonalInfoBasic from './PersonalInfoBasic'
import ContactInfoBasic from './ContactInfoBasic'

const BasicDetail = () => {
    return (
        <div className="rounded-lg bg-gray-50 dark:bg-gray-900">
            {/* personal details */}
            <PersonalInfoBasic />

            {/* contact details */}
            <ContactInfoBasic />
        </div>
    )
}

export default BasicDetail

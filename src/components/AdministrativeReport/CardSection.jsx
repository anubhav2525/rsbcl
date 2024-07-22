import React from 'react'
import Card from './Card'

const CardSection = () => {
    return (
        <div className='grid my-4 grid-cols-1 sm:grid-cols-3 gap-4 md:grid-cols-4 '>
            <Card price="150.00" percentage="5" category="Electronics" />
            <Card price="200.00" percentage="-2.5" category="Furniture" />
            <Card price="120.00" percentage="3.2" category="Clothing" />
            <Card price="120.00" percentage="3.2" category="Clothing" />
        </div>
    )
}

export default CardSection

import React from 'react'
import Card from './Card'
export default function () {
    return (
        <>
            <div className='w-full md:w-10/12 mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                    <Card id='1' />
                    <Card id='2' />
                    <Card id='3' />
                    <Card id='4' />
                    <Card id='5' />
                    <Card id='6' />
                </div>
            </div>
        </>
    )
}

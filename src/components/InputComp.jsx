import React from 'react'

export default function InputComp(props) {



    const { type, title, placeholder } = props; //destructing method
    return (
        <>
            <div className='mb-3 col-6'>
                <label htmlFor="">{title}</label>
                <input type={type} className='form-control ' placeholder={placeholder} />
            </div>
        </>
    )
}

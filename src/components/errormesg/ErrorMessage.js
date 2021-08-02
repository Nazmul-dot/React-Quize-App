import React from 'react'

const ErrorMessage = ({ children }) => {
    return (
        <>
            <div className='border d-flex justify-content-center bg-danger py-1'>
                {children}
            </div>
        </>
    )
}

export default ErrorMessage

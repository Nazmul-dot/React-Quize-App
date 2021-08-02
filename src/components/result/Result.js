import { Button } from '@material-ui/core'
import React from 'react'

const Result = ({ score }) => {
    return (
        <>
            <div>
                <h1 className='display-1 text-center my-5'
                    style={{
                        fontFamily: `'Montserrat', sans-serif`
                    }}
                >FINAL SCORE : {score}</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <Button variant='contained' color='secondary' size='large' href='/' >go to homepage</Button>
            </div>
        </>
    )
}

export default Result

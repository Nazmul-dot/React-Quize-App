import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './ques.css'
import ErrorMessage from '../errormesg/ErrorMessage'
import { useHistory } from 'react-router-dom'
const Quesion = ({ score, setScore, questions, setQuestions, options, currQ, setcurrQ, correct }) => {

    console.log(options, correct)
    const [select, setselect] = useState('')
    const [error, seterror] = useState(false)
    const history = useHistory()

    const cheakQuize = (op) => {
        setselect(op)
        seterror(false)
        if (correct === op) {
            setScore(score + 1)
        }
    }
    const handleNext = () => {
        if (currQ > 8) {
            history.push('/result')
        }
        else if (select) {
            setcurrQ(currQ + 1)
            seterror(false)
            setselect('')
        } else {
            seterror(true)
        }

    }
    const handleSelect = (op) => {
        if (select === op && select === correct) return "select";
        else if (select === op && select !== correct) return "wrong";
        if (op === correct) return "select";
    };

    const handleout = () => {
        setcurrQ(0)
        setQuestions()
    }
    return (
        <>
            <div className='container  mt-3'>
                <div className=''>
                    <h3 className='text-center'>Question: {currQ + 1}</h3>
                </div>
                <div className='border border-4 my-2'>
                    <h5 className='text-center mb-2 md-md-4'>{questions[currQ].question}</h5>

                    <div className='row  my-4'>
                        {
                            error &&
                            (
                                <div className='col-10 mx-auto rounded-3 my-3'>
                                    <ErrorMessage>
                                        <h4 className='text-white'>Please Select One Option</h4>
                                    </ErrorMessage>

                                </div>
                            )
                        }
                        {
                            options && (
                                options.map((op) =>
                                    <div className='col-md-5  mx-auto mb-2 mb-md-5 d-flex justify-content-center'>
                                        <button
                                            className={`singleoption ${select && handleSelect(op)} `}
                                            onClick={() => cheakQuize(op)}
                                            disabled={select}
                                        >
                                            {op}
                                        </button>
                                    </div>
                                )
                            )
                        }
                        <div className='col-12  d-flex justify-content-around gap-2'>
                            <Button
                                variant='contained'
                                color='secondary'
                                style={{ padding: '0px 50px' }}
                                href='/'
                                onClick={handleout}
                            >quit</Button>
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={handleNext}
                            >
                                {currQ > 8 ? "submit" : "next question"}

                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quesion

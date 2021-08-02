import React, { useState, useEffect } from 'react'
import Quesion from '../quesion/Quesion'
import { CircularProgress } from "@material-ui/core";
const Quize = ({ name, score, setScore, questions, setQuestions }) => {
    const [currQ, setcurrQ] = useState(0)
    const [options, setoptions] = useState()

    useEffect(() => {
        setoptions(
            questions &&
            handleShuffle([
                questions[currQ]?.correct_answer,
                ...questions[currQ]?.incorrect_answers,
            ])
        )
    }, [currQ, questions])
    const handleShuffle = (alloptions) => {
        return alloptions.sort(() => Math.random() - 0.5)
    }
    return (
        <>
            {
                questions ? (
                    <div className='container-fluid'>
                        <div className='d-flex justify-content-center'>
                            <h3 className=' p-2 shadow '>Welcome, {name}</h3>
                        </div>
                        <div className=' d-flex justify-content-between '>
                            {
                                questions && (
                                    <p>{questions[currQ]?.category}</p>
                                )
                            }
                            <p>
                                SCORE : {score}
                            </p>
                        </div>
                        <div>
                            {
                                questions && (
                                    <Quesion
                                        options={options}
                                        currQ={currQ}
                                        setcurrQ={setcurrQ}
                                        questions={questions}
                                        setQuestions={setQuestions}
                                        score={score}
                                        setScore={setScore}
                                        correct={questions[currQ]?.correct_answer}
                                    />
                                )
                            }

                        </div>
                    </div>
                ) :
                    (
                        <div className='m-5 d-flex justify-content-center align-items-center'>
                            <CircularProgress
                                style={{ margin: 100 }}
                                color="inherit"
                                size={150}
                                thickness={1}
                            />
                        </div>
                    )
            }

        </>
    )
}

export default Quize

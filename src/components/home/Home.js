import React, { useState } from 'react'
import { Button, TextField, MenuItem } from '@material-ui/core'
import Categories from '../../data/Data'
import { useHistory } from 'react-router-dom'
import ErrorMessage from '../errormesg/ErrorMessage'
const Home = ({ name, setname, fetchQuestions }) => {
    const history = useHistory()
    const [error, seterror] = useState(false)
    const [category, setcategory] = useState('')
    const [difficulty, setdifficulty] = useState('')
    const handlequize = () => {

        if (!name || !category || !difficulty) {
            seterror(true)
            return;
        }
        else {
            seterror(false)
            fetchQuestions(category, difficulty)
            history.push('/quize')
        }


    }
    return (
        <>
            <div className='container-fluid mt-2 mt-md-5'>
                <div className='row mt-5'>
                    <div className='col-md-6  mx-auto order-2 order-md-1 d-flex flex-column justify-content-center'>
                        <div className='row  gy-4 mt-2 mt-md-0'>
                            {
                                error && (
                                    <div className='col-11 mx-auto'>
                                        <ErrorMessage>
                                            <h4>Fill All The Field</h4>
                                        </ErrorMessage>
                                    </div>
                                )

                            }
                            <div className='col-11 mx-auto'>
                                <TextField
                                    label='Enter Your Name'
                                    variant='outlined'
                                    fullWidth
                                    onChange={(e) => setname(e.target.value)}
                                />
                            </div>
                            <div className='col-11 mx-auto'>
                                <TextField
                                    label='Select Category'
                                    select
                                    variant='outlined'
                                    fullWidth
                                    onChange={(e) => setcategory(e.target.value)}
                                >
                                    {Categories.map((cat) => (
                                        <MenuItem key={cat.category} value={cat.value}>
                                            {cat.category}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className='col-11 mx-auto'>
                                <TextField
                                    label='Enter Your Name'
                                    variant='outlined'
                                    select
                                    fullWidth
                                    onChange={(e) => setdifficulty(e.target.value)}
                                >
                                    <MenuItem key="Easy" value="easy">
                                        Easy
                                    </MenuItem>
                                    <MenuItem key="Medium" value="medium">
                                        Medium
                                    </MenuItem>
                                    <MenuItem key="Hard" value="hard">
                                        Hard
                                    </MenuItem>
                                </TextField>
                            </div>
                            <div className='col-11 mx-auto'>
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    size="large"
                                    fullWidth
                                    onClick={handlequize}
                                >start quize</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6  mx-auto order-1 order-md-2 d-flex justify-content-center align-items-center'>
                        <img className='img-fluid' src="./quize222.svg" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home

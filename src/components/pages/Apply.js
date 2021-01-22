import React, {useState} from 'react'
import '../pages/PagesStyle.css'
import {Button} from '../Button'
import {Link} from 'react-router-dom'
import Appform from '../Appform'
function Apply() {

    const [isHidden, setIsHidden] = useState(false);

    function onchange() {
        setIsHidden(!isHidden);
    }

    return (
        <div className='Apply'>
            <div className="Apply-container">
                <div className="Fillup-form">
                    <div className="Fillup-label-container">
                        <h2>Fill up</h2>
                        <label>Fill this up to apply!</label>
                    </div>

                    <div className="Label-row1-fillup">
                        <label>Student ID</label>
                        <label className='row1-label1'>Year level</label>
                        <label className='row2-label2'>Semester</label>
                    </div>

                    <div className="Input-row1-fillup">
                        <input type="text"/>
                        <select>
                            <option>1st</option>
                            <option>2nd</option>
                            <option>3rd</option>
                            <option>4th</option>
                        </select>

                        <select>
                            <option>1st</option>
                            <option>2nd</option>
                        </select>
                    </div>

                    <div className="Label-row2-fillup">
                        <label>Adviser</label>
                    </div>

                    <div className="Input-row2-fillup">
                        <select>
                            <option>Sample Adviser</option>
                            <option>Sample Adviser</option>
                            <option>Sample Adviser</option>
                            <option>Sample Adviser</option>
                        </select>
                        <Button buttonSize='btn--normal' buttonColor='green' onClick={onchange}>Generate</Button>
                    </div>

                    <div className="Register-row">
                        <label>ICS student and dont have an account?</label>
                        <Link to='/Register'>
                            <Button buttonStyle='btn--outlined' buttonColor='gray'>Register</Button>
                        </Link>
                    </div>

                </div>
                
                {isHidden && <Appform/>}
        
            </div>
        </div>
    )
}

export default Apply

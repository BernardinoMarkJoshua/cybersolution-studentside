import React from 'react'
import '../pages/PagesStyle.css'
import {Button} from '../Button'

function Register() {
    return (
        <div className='Register'>
            <div className="Register-container">
                <div className="Register-topbar-label">
                    <h1>Register</h1>
                    <label>Please fill this up to register.</label>

                    <form className='Register-form'>
                        <label>StudentID</label>
                        <input type="text"/>
                        <label>Firstname</label>
                        <input type="text"/>
                        <label>Middlename</label>
                        <input type="text"/>
                        <label>Lastname</label>
                        <input type="text"/>
                        <label>Email</label>
                        <input type="text"/>
                        <label>Contact no.</label>
                        <input type="text"/>
                        <label>Course</label>

                        <div className="Select-container-register">
                            <select>
                                <option value="" disabled selected>Select Course</option>
                                <option>BSCS</option>
                                <option>BSIT</option>
                            </select>

                            <Button>Register</Button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register

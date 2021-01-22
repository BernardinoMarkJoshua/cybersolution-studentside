import React from 'react'
import './ComponentStyle.css'
import {Link} from 'react-router-dom'
import IcsLogo from './assets/ics.png'
function Navbar() {
    return (
        <div className='Navbar'>
            <div className="Navbar-container">
                <div className="Logo-container">
                    <img src={IcsLogo} alt="ics-logo" width={50} height={50}/>
                    <Link className='Link' to='/'>
                        <label>ICS-DLOA</label>
                        <label className='Navbar-Link-Bottom'>Director's List Online Application</label>
                    </Link>
                </div>
                <div className="Function-container">
                    <div className="Function-container-continer">
                        <Link className='Link-function' to='/'>
                            <label>Dashboard</label>
                        </Link>

                        <Link className='Link-function' to='/Apply'>
                            <label>Apply</label>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

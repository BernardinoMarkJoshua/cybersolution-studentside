import React from 'react'
import '../components/ComponentStyle.css'
import IcsLogo from '../components/assets/ics.png'
import WmsuLogo from '../components/assets/wmsu.png'
import {Button} from '../components/Button'

function Appform() {
    return (
        <div className='Appform'>
            <div className="Appform-container">
                <div className="Appform-topbar-row1">
                    <img className='ics-logo-appform' src={IcsLogo} alt="icslogo" width={60} height={60}/>
                    <div className="Appform-topbar-container">
                        <label>Republic of the Philipines</label>
                        <label>Western Mindanao State University</label>
                        <label className='bold1'>INSTITUTE OF COMPUTER STUDIES</label>
                        <label>Zamboanga City</label>
                    </div>
                    <img className='wmsu-logo-appform' src={WmsuLogo} alt="icslogo" width={60} height={60}/> 
                </div>

                <div className="Appform-topbar-row2">
                    <label>FOR: Roderick Go</label>
                    <label>Director, ICS</label>
                </div>

                <div className="Appform-topbar-row3">
                    <label>Sir: I, Jerico James Arevalo Ramos, have the honor for the inclusion in the Director's List </label>
                    <label>for the 2nd sem, 2020-2021 based on my academic ratings for the given period, to wit:</label>
                </div>

                <div className="Appform-topbar-row4">
                    <table>
                        <thead>
                            <th>Subject code</th>
                            <th>Subject name</th>
                            <th>Units</th>
                            <th>Grade</th>
                        </thead>
                            <tr>
                                <td>CC100</td>
                                <td>Introduction to Computing</td>
                                <td>3</td>
                                <td><input className='table-textfield' type="text"/></td>
                            </tr>
                            <tr>
                                <td>CC101</td>
                                <td>Computer programming</td>
                                <td>4</td>
                                <td><input className='table-textfield' type="text"/></td>
                            </tr>
                            <tr>
                                <td>CAS101</td>
                                <td>Purposive Communication</td>
                                <td>3</td>
                                <td><input className='table-textfield' type="text"/></td>
                            </tr>
                            <tr>
                                <td>MATH100</td>
                                <td>Mathematics in the Modern World</td>
                                <td>3</td>
                                <td><input className='table-textfield' type="text"/></td>
                            </tr>
                            <tr>
                                <td>US101</td>
                                <td>Understanding the Self</td>
                                <td>3</td>
                                <td><input className='table-textfield' type="text"/></td>
                            </tr>
                            <tr>
                                <td>FIL101</td>
                                <td>Komunikasyon sa Akademikong Filipino</td>
                                <td>3</td>
                                <td><input className='table-textfield' type="text"/></td>
                            </tr>
                            <tr>
                                <td>PE101</td>
                                <td>PE101</td>
                                <td>2</td>
                                <td><input className='table-textfield' type="text"/></td>
                            </tr>
                            <tr>
                                <td>NSTP1</td>
                                <td>National Service Training programming</td>
                                <td>3</td>
                                <td><input className='table-textfield' type="text"/></td>    
                            </tr>
                            <tr>
                                <td>EUTHA</td>
                                <td>Euthenics</td>
                                <td>2</td>
                                <td><input className='table-textfield' type="text"/></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td></td>
                                <td><input className='table-textfield' type="text" placeholder='total'/></td>
                                <td><input className='table-textfield' type="text" placeholder='total'/></td>
                
                            </tr>
                        <tbody>

                        </tbody>
                    </table>
                </div>

                <div className="Button-submit-container">
                    <div className="uploadfile">
                        <label>Drag and drop PDF file here</label>
                    </div>

                    <div>
                        <Button buttonSize='btn-normal'>Submit</Button>
                    </div>
                </div>

                <div className="Appform-topbar-row5">
                    <div className="Left-side">
                        <label>Verified by:</label>
                        <label>undefined</label>
                        <input type="text"/>
                    </div>

                    <div className="Right-side">
                        <label>Student ID: 2016-00406</label>
                        <label>Name: Jerico James Arevalo Ramos</label>
                        <label>Course: BSCS</label>
                        <label>Year Level: 1st</label>
                        <label>Section: A</label>
                    </div>
                </div>

                <div className="Appform-bottombar-row1">
                    <label>Roderick Go</label>
                    <label className='director'>Director, ICS</label>
                    <label>Sir: upon verification by the committee Mr./Ms. Jerico James Arevalo Ramos has been found to </label>
                    <label>process the qualifications, and none of the disqualifications, for the inclusion in the Institute's </label>
                    <label>Director's List for the period indicated.</label>
                </div>

                <div className="Appform-bottombar-row2">
                    <label>Therefore, we hereby recommend for approval his/her application as an achiever</label>
                </div>

                <div className="Appform-bottombar-row3">
                    <div className="Left-bottom">
                        <input type="text"/>
                        <label>Sample name1</label>
                        <label>IT Head</label>
                        <input type="text"/>
                        <label>Sample name2</label>
                        <label>Guidance & Counseling Coordinator</label>
                        <input type="text"/>
                        <label>Sample name3</label>
                        <label>College Secretary</label>
                    </div>

                    <div className="Right-bottom">
                    <input type="text"/>
                        <label>Sample name4</label>
                        <label>CS Head</label>
                        <input type="text"/>
                        <label>Sample name5</label>
                        <label>Student Affair Coordinator</label>
                        <input type="text"/>
                        <label>Sample name6</label>
                        <label>Chairperson</label>
                    </div>
                </div>

                <div className="Appform-bottombar-row4">
                    <label>Upon the recommendation of the Committee, Mr./Ms. Jerico James Arevalo for the inclusion</label>
                    <label>academic period herein stated.</label>
                </div>

                <div className="Appform-bottombar-row5">
                    <div className="Date">
                        <label>Date: 1/17/2021</label>
                    </div>

                    <div className="admin-signiture-bottom">
                        <input type="text"/>
                        <label>Roderick Go</label>
                        <label>Director,ICS</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appform

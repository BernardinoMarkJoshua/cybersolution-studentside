import React from 'react'
import '../pages/PagesStyle.css'

function Dashboard() {
    return (
        <div className='Dashboard'>
            <div className="DashBoard-container">
                <div className="DashBoard-intro-label">
                    <div className='DasBoard-intro-label-container'>
                        <label>Western Mindanao State University</label>
                        <label className='Bottom-label-dashboard'>Institute of Computer Studies</label>
                    </div>
                </div>
                
                <div className="Table-container">
                    <h1 className='Leaderboard-label'>Leaderboard</h1>
                    <label>Congratulations achievers! keep it up!</label>
                    <table className='Dasboard-table'>
                        <thead>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Course/Sec/Year</th>
                            <th>GPA</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Jisoo Kim</td>
                                <td>BSCS A2</td>
                                <td>1.0</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jheo Jimenez</td>
                                <td>BSCS A2</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Joshua Rellosa</td>
                                <td>BSCS A2</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Jerico James Ramos</td>
                                <td>BSCS A2</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Ronald Arcilla</td>
                                <td>BSCS A2</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>Anthony Berondo</td>
                                <td>BSCS A2</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>Reiner Acedo</td>
                                <td>BSCS A2</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td>Benjie Felipe</td>
                                <td>BSCS A2</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>9</td>
                                <td>Jake Ancjas</td>
                                <td>BSCS A2</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>10</td>
                                <td>Ryan Ajalil</td>
                                <td>BSCS A2</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>11</td>
                                <td>Shelby John Paul</td>
                                <td>BSCS B3</td>
                                <td>1.0</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Marcia Jessye</td>
                                <td>BSCS B3</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>13</td>
                                <td>Alex Githa</td>
                                <td>BSCS B3</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>14</td>
                                <td>Samson Braxton</td>
                                <td>BSCS B3</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>15</td>
                                <td>Kara Melantha</td>
                                <td>BSCS B3</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>16</td>
                                <td>Sam Nanny</td>
                                <td>BSCS B3</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>17</td>
                                <td>Delbert Kimberley</td>
                                <td>BSCS B3</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>18</td>
                                <td>Lavern Travers</td>
                                <td>BSCS B3</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>19</td>
                                <td>Patsy Lyla</td>
                                <td>BSCS B3</td>
                                <td>1.0</td>
                            </tr>

                            <tr>
                                <td>20</td>
                                <td>Darcie Wilbur</td>
                                <td>BSCS B3</td>
                                <td>1.0</td>
                            </tr>


                        </tbody>
                    </table>
                    <a className='anchortag' href="/">view all</a>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

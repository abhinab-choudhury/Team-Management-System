import "./styles.css"
import { Employees } from "./Employees.js"
import { useState } from "react"

export default function Body() {

    let List = []
    for(let i = 0;i < Employees.length; i++) { 
        let employee = Employees[i]
        List.push(
        <li key={employee.id} className="my-3">
            <div className="card">
                <img src={employee.img} className="card-img-top" alt={employee.name} />
                <div className="card-body text-center mb-3">
                    <h5 className="card-title">{employee.name}</h5>
                    <p className="card-text">{employee.team}</p>
                </div>
            </div>
        </li>
        )
    }
    const [employee, setEmployee] = useState(List)
    const [team, setTeam] = useState('total') 
    const [teamCount, setTeamCount] = useState(List.length)
    const handleTeamSelection = (event) => {
        let team = event.target.value
        setTeam(team)
        List = []

        if(team === 'total') {
            for(let i = 0;i < Employees.length; i++) { 
                let employee = Employees[i]
                List.push(
                    <li key={employee.id} className="my-3">
                        <div className="card">
                            <img src={employee.img} className="card-img-top" alt={employee.name} />
                            <div className="card-body text-center mb-3">
                                <h5 className="card-title">{employee.name}</h5>
                                <p className="card-text">{employee.team}</p>
                            </div>
                        </div>
                    </li>
                )
            }
        } else {
            for(let i = 0;i < Employees.length; i++) { 
                let employee = Employees[i]
                if(employee.team === team) {
                    List.push(
                        <li key={employee.id} className="my-3">
                            <div className="card">
                                <img src={employee.img} className="card-img-top" alt={employee.name} />
                                <div className="card-body text-center mb-3">
                                    <h5 className="card-title">{employee.name}</h5>
                                    <p className="card-text">{employee.team}</p>
                                </div>
                            </div>
                        </li>
                    )
                }
            }
        }
        setEmployee(List)
        setTeamCount(List.length)
    }
    return (
        <>
            <div className="main-body border rounded container my-2">
                
                <span style={{fontWeight:600}}>Members</span>
                <h3>There are <spam>{teamCount}</spam> member/s in <spam>{team}</spam> </h3>
                <hr />
                
                <div>
                    <select name="Team" id="team" value={team} onChange={handleTeamSelection}>
                        <option value="total">Members</option>
                        <option value="Team - A">Team - A</option>
                        <option value="Team - B">Team - B</option>
                        <option value="Team - C">Team - C</option>
                        <option value="Team - D">Team - D</option>
                    </select>
                </div>
                <ul>
                    <div className="list">
                        {employee}
                    </div>
                </ul>
            </div>
        </>
    )
}
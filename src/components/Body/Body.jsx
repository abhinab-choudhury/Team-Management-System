import "./styles.css"
import { Employees } from "./Employees.js"
import { useState } from "react"

export default function Body(props) {

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
                            <div className={`card bg-${props.mode}`}>
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
            <div className={`main-body border-${props.mode} rounded container my-2 bg-${props.mode}`}>
                
                <div className={props.mode == 'dark'?'text-light d-inline':'d-inline'} style={{fontWeight:700,fontSize:'40px'}}>Members</div>
                <h3 className={props.mode == 'dark'?'text-light':''}>There are <spam>{teamCount}</spam> member/s in <spam>{team}</spam> </h3>
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
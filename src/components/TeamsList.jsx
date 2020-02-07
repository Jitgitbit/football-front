import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    if(props.teams.length === 0) return <h1>Loading teams</h1>

    return (
        <ul>
            {props.teams.map(team => 
                <li key={team.id}>
                    <Link to={`/teams/${team.id}`}style={{color:'lightgreen'}}>
                        {team.name}
                    </Link>
                </li>
            )}
        </ul>
    )
}
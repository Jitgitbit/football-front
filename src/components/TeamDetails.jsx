import React from 'react'
import TeamForm from './TeamForm'
import {Link} from 'react-router-dom'


export default (props) => {
    const { team, toggleEdit, editMode } = props
    if(!team.name) return <h1>Loading</h1>

    if(editMode) {
        return (
            <>
                <TeamForm
                    name={team.name}
                    
                    onChange={props.onChange}
                    onSubmit={props.onSubmit}
                />
                <button onClick={toggleEdit}>Edit</button>
            </>
        )
    }

    return (
        <div>
            <h1>{team.name}</h1>
            
            <button onClick={props.delete}>Delete this team</button>
            <button onClick={toggleEdit}>Edit</button>
            <br></br>
            <button><Link to={'/'}>Back to the list</Link></button>
        </div>
    )
}

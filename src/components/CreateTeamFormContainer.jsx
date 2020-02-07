import React from 'react'
import {connect} from 'react-redux'
import { createTeam } from '../actions/teams'
import TeamForm from './TeamForm'
import {Link} from 'react-router-dom'


class CreateTeamFormContainer extends React.Component {
  state = {
    name: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      name: '',
    })
    
    this.props.createTeam(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
    <div>
    <TeamForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
    <button><Link to={'/'}>Back to the list</Link></button>
    </div>
    )
  }
}

export default connect(null, {createTeam})(CreateTeamFormContainer)
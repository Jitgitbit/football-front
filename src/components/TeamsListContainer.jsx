import React from 'react'
import {loadTeams} from '../actions/teams'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TeamsList from './TeamsList'

class TeamsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadTeams()
  }

  render() {
    return (
      <>
        <TeamsList teams={this.props.teams} />
        <button><Link to={'teams/new'}>Add a Team!</Link></button>
      </>
    )
  }
}

const mapStateToProps = state => ({
  teams: state.teams
})

export default connect(mapStateToProps, {loadTeams})(TeamsListContainer)
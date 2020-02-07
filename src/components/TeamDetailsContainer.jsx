import React from 'react'
import {connect} from 'react-redux'
import TeamDetails from './TeamDetails'
import {loadTeam, updateTeam, deleteTeam} from '../actions/teams'

class TeamDetailsContainer extends React.Component {
  state = {
      editMode: false,
      name: '',
      date: '',
      description: ''
  }

  onChange = (team) => {
    this.setState({
        [team.target.name]: team.target.value
    })
  }

  onSubmit = (team) => {
    team.prteamDefault()

    const { name, date, description } = this.state

    this.props.updateTeam(this.props.team.id, {
        name, date, description        
    })

    this.setState({
        name: '',
        date: '',
        description: ''
    })

    this.toggleEdit()
  }
    
  componentDidMount() {
    this.props.loadTeam(Number(this.props.match.params.id))
  }

  delete = () => {
      this.props.deleteTeam(this.props.team)
      this.props.history.push('/')
  }

  toggleEdit = () => {
    const { name, date, description } = this.props.team
    this.setState({ editMode: !this.state.editMode, name, date, description })
  }

  render() {
      const team = this.state.editMode 
        ? { name: this.state.name, 
            date: this.state.date, 
            description: this.state.description } : this.props.team

    return <TeamDetails 
        team={team} 
        delete={this.delete}
        toggleEdit={this.toggleEdit}
        editMode={this.state.editMode}
        onChange={this.onChange}
        onSubmit={this.onSubmit}/>
        
  }
}

const mapStateToProps = state => ({
  team: state.team
})

export default connect(mapStateToProps, {loadTeam, updateTeam, deleteTeam})(TeamDetailsContainer)
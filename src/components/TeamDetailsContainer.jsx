import React from 'react'
import {connect} from 'react-redux'
import TeamDetails from './TeamDetails'
import {loadTeam, updateTeam, deleteTeam} from '../actions/teams'

class TeamDetailsContainer extends React.Component {
  state = {
      editMode: false,
      name: '',
      
  }

  onChange = (team) => {
    this.setState({
        [team.target.name]: team.target.value
    })
  }

  onSubmit = (team) => {
    team.preventDefault()

    const { name, } = this.state

    this.props.updateTeam(this.props.team.id, {
        name,       
    })

    this.setState({
        name: '',
        
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
    const { name, } = this.props.team
    this.setState({ editMode: !this.state.editMode, name, })
  }

  render() {
      const team = this.state.editMode 
        ? { name: this.state.name, 
            
        } : this.props.team

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
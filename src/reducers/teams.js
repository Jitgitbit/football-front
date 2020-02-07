import { TEAMS_FETCHED, TEAM_CREATE_SUCCESS, TEAM_DELETE_SUCCESS, TEAM_UPDATE_SUCCESS } from '../actions/teams.js'

export default (state = [], action) => {    
    switch (action.type) {
        case TEAMS_FETCHED:
            return action.teams
        case TEAM_CREATE_SUCCESS:
            return [...state, action.team]
        case TEAM_DELETE_SUCCESS:
            return state.filter(team => team.id !== action.team.id)
        case TEAM_UPDATE_SUCCESS:
            return state.map(team => {
                if(team.id === action.team.id){
                    return action.team
                }
                return team
            })
    
        default:
            return state
    }
}
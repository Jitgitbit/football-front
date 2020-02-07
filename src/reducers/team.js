import { TEAM_FETCHED, TEAM_UPDATE_SUCCESS } from '../actions/teams.js'

export default (state = {}, action) => {
    switch (action.type) {
        case TEAM_FETCHED:
            return action.team
        case TEAM_UPDATE_SUCCESS:
            return action.team

        default:
            return state
    }
}
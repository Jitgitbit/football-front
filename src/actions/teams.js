import request from 'superagent'

export const TEAMS_FETCHED = 'TEAMS_FETCHED'
export const TEAM_FETCHED = 'TEAM_FETCHED'
export const TEAM_CREATE_SUCCESS = 'TEAM_CREATE_SUCCESS'
export const TEAM_DELETE_SUCCESS = 'TEAM_DELETE_SUCCESS'
export const TEAM_UPDATE_SUCCESS = 'TEAM_UPDATE_SUCCESS'

const baseUrl = 'http://localhost:4001'

const teamsFetched = teams => ({
  type: TEAMS_FETCHED,
  teams
})

const teamFetched = team => ({
  type: TEAM_FETCHED,
  team
})

const teamCreateSuccess = team => ({
  type: TEAM_CREATE_SUCCESS,
  team
})

const teamDeleteSuccess = team => ({
  type: TEAM_DELETE_SUCCESS,
  team
})

const teamUpdateSuccess = team => ({
  type: TEAM_UPDATE_SUCCESS,
  team
})



export const deleteTeam = (team) => (dispatch) => {
  request
    .delete(`${baseUrl}/teams/${team.id}`)
    .then(response => {
      if(response.ok){
        // passing the original team object because the api 
        // returns {} instead of the deleted record
        dispatch(teamDeleteSuccess(team))
      }
    })
}

export const loadTeams = () => (dispatch, getState) => {
  // when the state already contains teams, we don't fetch them again
  if (getState().teams.length > 0) return

  // a GET /teams request
  request(`${baseUrl}/teams`)
    .then(response => {
      // dispatch an TEAMS_FETCHED action that contains the teams
      dispatch(teamsFetched(response.body))
    })
    .catch(console.error)
}

export const loadTeam = (id) => (dispatch) => {
  request(`${baseUrl}/teams/${id}`)
    .then(response => {
      dispatch(teamFetched(response.body))
    })
    .catch(console.error)
}



export const createTeam = (data) => dispatch => {
  request
    .post(`${baseUrl}/teams`)
    .send(data)
    .then(response => {
      dispatch(teamCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const updateTeam = (id, data) => dispatch => {
  request
    .put(`${baseUrl}/teams/${id}`)
    .send(data)
    .then(response => {
      dispatch(teamUpdateSuccess(response.body))
    })
    .catch(console.error)
}
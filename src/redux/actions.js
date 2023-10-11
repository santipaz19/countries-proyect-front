import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SEARCH = "SEARCH"
export const DELETE_FILTERS = "DELETE_FILTERS"


export const getCountries = () => async (dispatch) => {
    try {
        let json = await axios.get('http://localhost:3001/countries')
        return dispatch({ type: GET_COUNTRIES, payload: json.data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getActivities = () => async (dispatch) => {
    try {
        let json = await axios.get('http://localhost:3001/activities')
        return dispatch({ type: GET_ACTIVITIES, payload: json.data })
    } catch (error) {
        console.log(error.message)
    }
}

export const getByName = (value) => async (dispatch) => {
    try {
        if (value) {
            let json = await axios.get(`http://localhost:3001/countries?name=${value}`)
            return dispatch({ type: SEARCH, payload: json.data })

        }
    } catch (error) {
        // return dispatch({ type: ERROR })
        console.log(error.message)
    }
}

export const deleteFilters = () => dispatch => {
    return dispatch({ type: DELETE_FILTERS })
}
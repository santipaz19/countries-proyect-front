import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SEARCH = "SEARCH"
export const ERROR = "ERROR"
export const DELETE_FILTERS = "DELETE_FILTERS"
export const CONTINENTS = "CONTINENTS"
export const ORDER_COUNTRIES = "ORDER_COUNTRIES"
export const FILTER_ACTIVITY = "FILTER_ACTIVITY"

// Todos los paises
export const getCountries = () => async (dispatch) => {
    try {
        let json = await axios.get('http://localhost:3001/countries')
        return dispatch({ type: GET_COUNTRIES, payload: json.data })
    } catch (error) {
        return dispatch({ type: ERROR, payload })
    }
}
// Todas las actividades
export const getActivities = () => async (dispatch) => {
    try {
        let json = await axios.get('http://localhost:3001/activities')
        return dispatch({ type: GET_ACTIVITIES, payload: json.data })
    } catch (error) {
        return dispatch({ type: ERROR, payload })
    }
}
// 1 pais desde SearchBar
export const getByName = (value) => async (dispatch) => {
    try {
        if (value) {
            let json = await axios.get(`http://localhost:3001/countries?name=${value}`)
            return dispatch({ type: SEARCH, payload: json.data })

        }
    } catch (error) {
        return dispatch({ type: ERROR, payload })
    }
}

export const deleteFilters = () => dispatch => {
    return dispatch({ type: DELETE_FILTERS })
}

export const filterContinents = (payload) => dispatch => {
    return dispatch({ type: CONTINENTS, payload })
}

export const orderCountries = (payload) => dispatch => {
    return dispatch({ type: ORDER_COUNTRIES, payload })
}

export const filterActivities = (payload) => dispatch => {
    return dispatch({ type: FILTER_ACTIVITY, payload })
}
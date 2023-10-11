import { GET_COUNTRIES, GET_ACTIVITIES, SEARCH, DELETE_FILTERS } from './actions'

const initialState = {
    allCountries: [],
    countries: [],
    // error: false,
    // check: false,
    activities: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                // visibleCountries: action.payload.slice(0, 10),
                // pages: Math.ceil(action.payload.length / 10),
                // activePage: 1,
                // error: 0
            };

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };

        case SEARCH:
            return {
                ...state,
                countries: [action.payload]
            }

        case DELETE_FILTERS:
            return {
                ...state,
                countries: state.allCountries
            }


        default:
            return state;
    }
}
export default rootReducer;
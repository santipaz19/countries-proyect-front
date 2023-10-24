import { GET_COUNTRIES, GET_ACTIVITIES, SEARCH, DELETE_FILTERS, CONTINENTS, ORDER_COUNTRIES, FILTER_ACTIVITY } from './actions'

const initialState = {
    allCountries: [],
    countries: [],
    visibleCountries: [],
    pages: 0,
    activePage: 1,
    cantPage: 10,
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

        case CONTINENTS:
            const select = [...state.allCountries]
            let filter = select.filter(event => event.continente === action.payload)
            console.log(filter);
            return {
                ...state,
                countries: action.payload === 'all' ? [...state.allCountries] : filter
            }

        case ORDER_COUNTRIES:
            let sortedCountries;
            if (action.payload === 'ASC') {
                sortedCountries = [...state.countries].sort((a, b) => a.nombre.localeCompare(b.nombre));
            } else if (action.payload === 'DESC') {
                sortedCountries = [...state.countries].sort((a, b) => b.nombre.localeCompare(a.nombre));
            } else {
                // Si es "Sin ordenar", simplemente usamos la copia sin ordenar
                sortedCountries = [...state.allCountries];
            }
            return {
                ...state,
                countries: sortedCountries
            };

        case FILTER_ACTIVITY:
            const allCountries = state.countries
            const filters = allCountries.filter((country) =>
                country.Activities.some((activity) => activity.nombre === action.payload))
            console.log(filters)
            return {
                ...state,
                countries: filters !== null ? filters : [...state.allCountries]
            }

        default:
            return state;
    }

}
export default rootReducer;
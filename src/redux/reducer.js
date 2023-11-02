import { GET_COUNTRIES, GET_ACTIVITIES, SEARCH, DELETE_FILTERS, CONTINENTS, ORDER_COUNTRIES, FILTER_ACTIVITY, ERROR } from './actions'

const initialState = {
    allCountries: [],
    countries: [],
    activities: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                error: 0
            };

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
                error: 0
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
            }
            else if (action.payload === 'POP-ASC') {
                sortedCountries = [...state.countries].sort((a, b) => b.poblacion - a.poblacion);
            }
            else if (action.payload === 'POP-DESC') {
                sortedCountries = [...state.countries].sort((a, b) => a.poblacion - b.poblacion);
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

            return {
                ...state,
                countries: filters !== null ? filters : [...state.allCountries]
            }

        case ERROR:
            return {
                ...state,
                error: 1
            }

        default:
            return state;
    }

}
export default rootReducer;
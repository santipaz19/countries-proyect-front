import { Card } from '../card/Card';
import style from './countries.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities, deleteFilters, filterContinents, orderCountries, filterActivities } from '../../redux/actions';
import { useEffect, useState } from 'react';
import notfound from '../../assets/notfound3.png'
import { Pagination } from '../pagination/pagination';


export default function Countries() {

    const dispatch = useDispatch();
    // traigo data del estado global
    const countries = useSelector((state) => state.countries)
    const activities = useSelector((state) => state.activities)


    // const [loading, setLoading] = useState(true);

    // estados para manejar filtros
    const [orderFilter, setOrderFilter] = useState('all');
    const [continentFilter, setContinentFilter] = useState('all');
    const [activityFilter, setActivityFilter] = useState('NA');

    // paginacion
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const max = Math.ceil(countries.length / perPage)


    const handleSubmit = () => {
        setOrderFilter('NA')
        setContinentFilter('all')
        setActivityFilter('NA')
        setCurrentPage(1)
        dispatch(deleteFilters())
        dispatch(filterContinents('all'))
    }
    //  dispatch de filtros
    const filterChange = (e) => {
        dispatch(filterContinents(e.target.value))
        setContinentFilter(e.target.value)
        setCurrentPage(1)
        if (orderFilter === 'ASC' || orderFilter === 'DESC') {
            order(orderFilter);
        }
        if (activityFilter !== 'NA') {
            filterbyActivity(activityFilter);
        }
    }

    const filterActivity = (e) => {
        dispatch(filterActivities(e.target.value))
        setActivityFilter(e.target.value)
        setCurrentPage(1)
    }

    const filterbyActivity = (e) => {
        dispatch(filterActivities(e))
    }

    const orderChange = (e) => {
        dispatch(orderCountries(e.target.value))
        setOrderFilter(e.target.value)
        if (activityFilter !== 'NA') {
            filterbyActivity(activityFilter);
        }
    }

    const order = (e) => {
        dispatch(orderCountries(e))
    }




    useEffect(() => {
        if (!countries[0] && countries[0] !== null) {
            dispatch(getCountries());
        }
        if (!activities[0]) {
            dispatch(getActivities());
        }

    }, [dispatch, countries, activities]);

    return (
        <div className={style.allCont} >
            <div className={style.img2}>
                <div className={style.container}>
                    <h1>Explora el Mundo</h1>
                </div>
            </div>
            <div className={style.info}>
                <h2 className={style.subtitle}>Listado de Paises:</h2>
                <button className={style.btn} onClick={handleSubmit}>Reset Filters</button>
            </div>

            <div className={style.fullContainer}>
                <div className={style.filters}>
                    <div >
                        <div className={style.oneSelect}>
                            <label>Filtrar por continente: </label>
                            <select value={continentFilter} name="name" onChange={filterChange} className={style.select}>
                                <option value="all">Sin filtrar</option>
                                <option value="Americas" >America</option>
                                <option value="Asia" >Asia</option>
                                <option value="Africa" >Africa</option>
                                <option value="Oceania">Oceania</option>
                                <option value="Europe">Europa</option>
                            </select>
                        </div>
                        <div className={style.oneSelect}>
                            <label>Ordenar por: </label>
                            <select value={orderFilter} className={style.select} name="name" onChange={orderChange} >
                                <option value="NA">Sin ordenar</option>
                                <option value="ASC" >A-Z</option>
                                <option value="DESC" >Z-A</option>
                                <option value="POP-ASC" >Poblacion (↑)</option>
                                <option value="POP-DESC" >Poblacion (↓)</option>
                            </select>
                        </div>
                        <div className={style.oneSelect}>
                            <label>Filtrar por actividad: </label>
                            <select value={activityFilter} className={style.select} name="name" onChange={filterActivity} >
                                <option value="NA">Sin filtrar</option>
                                {activities.map(({ nombre, id }) => (
                                    <option key={id} value={nombre}>
                                        {nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className={style.tarjetas}>
                    {countries[0] !== null ? (
                        countries?.slice(
                            (currentPage - 1) * perPage,
                            (currentPage - 1) * perPage + perPage
                        ).map((country) => (
                            <Card key={country.id} countries={country} />
                        ))
                    ) : (
                        <div className={style.notFound}>
                            <img src={notfound} alt='404' /></div>
                    )}
                </div>
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} max={max} />
        </div >

    );
}


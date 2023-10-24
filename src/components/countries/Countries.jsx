import { Card } from '../card/Card';
import style from './countries.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities, deleteFilters, filterContinents, orderCountries, filterActivities } from '../../redux/actions';
import { useEffect, useState } from 'react';
import notfound from '../../assets/notfound3.png'


export default function Countries() {

    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries)
    const activities = useSelector((state) => state.activities)
    const [loading, setLoading] = useState(true);
    const [orderFilter, setOrderFilter] = useState('all');
    const [continentFilter, setContinentFilter] = useState('all');
    const [activityFilter, setActivityFilter] = useState('NA');


    const handleSubmit = () => {
        setOrderFilter('NA')
        setContinentFilter('all')
        setActivityFilter('NA')
        dispatch(deleteFilters())
        dispatch(filterContinents('all'))
    }

    const filterChange = (e) => {
        dispatch(filterContinents(e.target.value))
        setContinentFilter(e.target.value)
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
    }

    const order = (e) => {
        dispatch(orderCountries(e))
    }

    const filterbyActivity = (e) => {
        dispatch(filterActivities(e))
    }
    const orderChange = (e) => {
        dispatch(orderCountries(e.target.value))
        setOrderFilter(e.target.value)
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
        <div >
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
                        <div >
                            <label>Filtrar por pais: </label>
                            <select value={continentFilter} className="input" name="name" onChange={filterChange}>
                                <option value="all">Sin filtrar</option>
                                <option value="Americas" >America</option>
                                <option value="Asia" >Asia</option>
                                <option value="Africa" >Africa</option>
                                <option value="Oceania">Oceania</option>
                                <option value="Europe">Europa</option>
                            </select>
                        </div>
                        <div>
                            <label>Ordenar por: </label>
                            <select value={orderFilter} className="input" name="name" onChange={orderChange} >
                                <option value="NA">Sin ordenar</option>
                                <option value="ASC" >A-Z</option>
                                <option value="DESC" >Z-A</option>
                            </select>
                        </div>
                        <div>
                            <label>Filtrar por actividad: </label>
                            <select value={activityFilter} className="input" name="name" onChange={filterActivity} >
                                <option value="NA">Sin ordenar</option>
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
                        countries?.map((country) => (
                            <Card key={country.id} countries={country} />
                        ))
                    ) : (
                        <div className={style.notFound}>
                            <img src={notfound} alt='404' /></div>
                    )}


                </div>

            </div>
        </div >

    );
}


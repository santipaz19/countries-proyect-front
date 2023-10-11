import { Card } from '../card/Card';
import style from './countries.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities, deleteFilters } from '../../redux/actions';
import { useEffect, useState } from 'react';
import notfound from '../../assets/notfound3.png'


export default function Countries() {

    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries)
    const activities = useSelector((state) => state.activities)
    const [loading, setLoading] = useState(true);


    const handleSubmit = () => {
        dispatch(deleteFilters())
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
                        <label>Ordenar por: </label>
                        <select className="input" name="name" >
                            <option value="ASC" >A-Z</option>
                            <option value="DES" >Z-A</option>
                            <option value="PA" >Poblacion Asc</option>
                            <option value="PD" >Poblacion Des</option>
                            <option value="NA">Sin ordenar</option>
                        </select>
                    </div>
                    <h2>hola</h2>
                </div>
                {console.log(countries)}
                <div className={style.tarjetas}>
                    {console.log(countries)}
                    {/* {countries?.map(country => {
                        return <Card key={country.id} countries={country} />
                    })} */}

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


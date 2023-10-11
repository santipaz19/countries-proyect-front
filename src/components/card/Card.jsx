import style from './card.module.css'
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow4.png'


export function Card(countries) {
    const pais = countries.countries

    return (
        <div className={style.card}>
            <div className={style.cardImg}>
                <img src={pais.bandera} alt={pais.nombre} />
            </div>
            <h1 className={style.cardTitle}>
                {pais.nombre}
            </h1>
            <h2 className={style.cardBody}>
                {pais.continente}
            </h2>
            <Link to={`/countries/${pais.id}`} >
                <button className={style.btn}> More info
                </button>
            </Link>
        </div>
    );
}
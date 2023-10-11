import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./detail.module.css";
import { Link } from "react-router-dom";

const Detail = () => {
    const { idPais } = useParams();
    const [countryDetail, setCountryDetail] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/countries/${idPais}`)
            .then(({ data }) => {
                if (data) {
                    setCountryDetail(data);
                } else {
                    window.alert("No hay paises con ese ID");
                }
            })
            .catch((error) => {
                console.log(error);
                window.alert("Error al cargar los datos del pais");
            });
        return () => {
            setCountryDetail({});
        };
    }, [idPais]);


    return (
        <div className={style.fullCard}>
            <Link className={style.home} to={"http://localhost:5173/home"}>
                <button className={style.btn}>Go back</button>
            </Link>
            <h1 className={style.title} >{countryDetail.nombre}</h1>
            <hr className={style.h} />
            <div className={style.info}>
                <div className={style.img}>
                    <img src={countryDetail.bandera} alt={countryDetail.nombre} />
                </div>
                <div className={style.detalles} >
                    <div className={style.card}>
                        <h2 className={style.elemento}><span className={style.text}>ID:</span> {countryDetail.id}</h2>
                        <h4 className={style.elemento}><span className={style.text}>Continente:</span>  {countryDetail.continente}</h4>
                        <h4 className={style.elemento}><span className={style.text}>Capital:</span>   {countryDetail.capital}</h4>
                        <h4 className={style.elemento}><span className={style.text}>Poblacion:</span>   {countryDetail.poblacion}</h4>
                        <h4 className={style.elemento}><span className={style.text}>Subregion: </span>  {countryDetail.subregion}</h4>
                        <h4 className={style.elemento}><span className={style.text}>Area:</span>      {countryDetail.area} km²</h4>
                    </div>

                </div>
            </div>
            <Link target="_blank" to={`https://es.wikipedia.org/wiki/${countryDetail.nombre}`}>
                <button className={style.btn}>Wikipedia</button>
            </Link>
        </div >
    );
};

export default Detail;


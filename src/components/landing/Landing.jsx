import { Link } from "react-router-dom";
import style from "./landing.module.css"

export default function Landing() {
    return (
        <div className={style.landing}>
            <div className={style.container}>
                <h1 className={style.title}>Descubre Nuevos Destinos y Experiencias</h1>
                <h2>Encuentra países, agrega actividades y crea tu propia guía de viaje.</h2>
                <Link to={'/home'}>
                    <button className={style.btn}>Explorar</button>
                </Link>
            </div>
        </div >
    );
}
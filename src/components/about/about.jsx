import style from './about.module.css'
import help1 from '../../assets/HELP1.png'
import help2 from '../../assets/HELP2.png'
import help3 from '../../assets/HELP3.png'
// import help4 from '../../assets/HELP4.png'
// import help1 from '../../assets/HELP1.png'
import help6 from '../../assets/HELP6.png'
import help7 from '../../assets/formguie.png'
export function About() {

    return (
        <div className={style.allText}>
            <h1 className={style.subtitle}>Guía de Uso</h1>
            <hr className={style.h} />
            <ul className={style.text}>
                <li>
                    <h2 className={style.subtitle}>Listado de Países</h2>
                    <p>
                        Al ingresar a la página, verás un listado de todos los países disponibles. Cada tarjeta de país incluirá:
                    </p>
                    <div className={style.info}>
                        <ul>
                            <li>Bandera del país.</li>
                            <li>Nombre del país.</li>
                            <li>Capital del país.</li>
                            <li>Un botón "More Info" que te permitirá obtener información detallada sobre el país.</li>
                        </ul>
                        <img className={style.img} src={help1} alt='help1' />
                    </div>

                </li>
                <li>
                    <h2 className={style.subtitle}>Ver Información Detallada</h2>
                    <p>
                        Cuando haces clic en el botón "More Info" en la tarjeta de un país, serás redirigido a otra página que muestra información detallada sobre ese país. En esta página, encontrarás:
                    </p>
                    <div className={style.info}>

                        <ul>
                            <li>Información general sobre el país, como población, área, idioma, etc.</li>
                            <li>Un botón "Wikipedia" que te llevará a la página de Wikipedia del país si deseas obtener información adicional.</li>
                        </ul>
                        <img className={style.img} src={help2} alt='help2' />
                    </div>

                </li>
                <li>
                    <h2 className={style.subtitle}>Búsqueda de Países</h2>
                    <p>
                        En la barra de navegación, encontrarás un campo de búsqueda que te permitirá buscar un país por nombre. Simplemente ingresa el nombre del país que estás buscando y presiona "Buscar".
                    </p>
                    <img src={help3} alt='help3' />
                </li>
                <li>
                    <h2 className={style.subtitle}>Crear Nueva Actividad</h2>
                    <p>
                        También en la barra de navegación, encontrarás un botón "New Activity". Al hacer clic en este botón, podrás crear una nueva actividad. Deberás proporcionar la siguiente información:
                    </p>
                    <div className={style.info}>
                        <ul>
                            <li>Nombre de la actividad.</li>
                            <li>Horas estimadas para completar la actividad.</li>
                            <li>Temporada en la que se puede realizar la actividad.</li>
                            <li>Dificultad de la actividad.</li>
                            <li>Una descripción de la actividad.</li>
                            <li>Seleccionar a qué países está asociada la actividad. Puedes asociar la actividad a uno o más países.</li>
                        </ul>
                        <img className={style.img} src={help7} alt='help7' />
                    </div>

                </li>
                <li>
                    <h2 className={style.subtitle}>Filtrar Países y Ordenar</h2>
                    <p>
                        En la página principal de "Home", encontrarás opciones para filtrar y ordenar los países. Puedes:
                    </p>
                    <ul>
                        <li>Filtrar por continente para ver solo los países de un continente específico.</li>
                        <li>Ordenar alfabéticamente de la A a la Z o de la Z a la A.</li>
                        <li>Ordenar por población de forma ascendente o descendente.</li>
                    </ul>
                </li>
                <li>
                    <h2 className={style.subtitle}>Restablecer Filtros</h2>
                    <p>
                        Si deseas eliminar los filtros y ver todos los países nuevamente, simplemente haz clic en el botón "Reset Filters".
                    </p>
                    <img src={help6} alt='help6' />
                </li>
            </ul>
            <p>
                Con esta guía, deberías poder aprovechar al máximo las funciones de la página web y explorar la información detallada sobre los países, buscar países específicos, crear nuevas actividades y aplicar filtros y ordenamientos según tus necesidades. ¡Disfruta explorando!
            </p>
        </div>
    );
}
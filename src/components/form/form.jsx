import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, getCountries } from "../../redux/actions";
import { validate } from "./validation";
import axios from "axios";
import style from './form.module.css';
import form from "../../assets/form2.jpg"

export default function Form() {
    const [error, setError] = useState({})
    const [selectedCountry, setSelectedCountry] = useState([])

    const [create, setCreate] = useState(
        {
            nombre: "",
            dificultad: "",
            descripcion: "",
            duracion: "",
            temporada: "",
            countries: []
        }
    )

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries)


    const handleInput = (event) => {
        setCreate({
            ...create,
            [event.target.name]: event.target.value
        })
    }

    const handleSelect = (event) => {
        const selectedCountry = event.target.value;
        if (selectedCountry && !create.countries.includes(selectedCountry)) {
            setCreate({
                ...create,
                countries: [...create.countries, selectedCountry],
            });
            setSelectedCountry(""); // Limpiar el valor seleccionado
        }
    }

    const handleRemoveCountry = (country) => {
        const updatedCountries = create.countries.filter((c) => c !== country);
        setCreate({
            ...create,
            countries: updatedCountries,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (Object.keys(error).length === 0) {
                // Realizar la solicitud
                await axios.post("http://localhost:3001/activities", create);
                alert('Actividad creada con éxito');
                dispatch(getActivities())
                dispatch(getCountries())
                // Restablecer el formulario y el estado
                setCreate({
                    nombre: "",
                    dificultad: "",
                    descripcion: "",
                    duracion: "",
                    temporada: "",
                    countries: []
                });
                setSelectedCountry("");
                setError({});
            } else {
                alert('Faltan datos');
            }
        } catch (error) {
            alert('Error al crear la actividad');
        }
    }

    useEffect(() => {
        setError(validate(create))
        if (!allCountries[0]) {
            dispatch(getCountries());
        }
    },
        [dispatch, allCountries, create]
    )

    const orderCountries = [...allCountries].sort((a, b) => a.nombre.localeCompare(b.nombre));


    return (
        <div className={style.all}>
            <form onSubmit={handleSubmit} className={style.form}>
                <h2 >Crear Actividad</h2>
                <div className={style.intoForm}>
                    <div>
                        <div className={style.column}>
                            <label className={style.label}>Nombre:</label>
                            <input
                                className={style.input}
                                type="text"
                                name="nombre"
                                value={create.nombre}
                                onChange={handleInput}
                                autoComplete="off"
                            />
                            {error && error.nombre && <span className={style.error}>{error.nombre}</span>}
                        </div>

                        <div className={style.column} >
                            <label className={style.label}>Dificultad:</label>
                            <select
                                value={create.dificultad}
                                name="dificultad"
                                onChange={handleInput} className={style.input}>
                                <option value="">Selecionar dificultad</option>
                                <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                                <option value="2">⭐⭐ ☆ ☆ ☆</option>
                                <option value="3">⭐⭐⭐ ☆ ☆</option>
                                <option value="4">⭐⭐⭐⭐ ☆</option>
                                <option value="5">⭐⭐⭐⭐⭐</option>
                            </select>
                            {error && error.dificultad && <span className={style.error}>{error.dificultad}</span>}
                        </div>

                        <div className={style.column}>
                            <label className={style.label} >Descripcion:</label>
                            <textarea value={create.descripcion} name="descripcion" onChange={handleInput} className={style.input} />
                            {error && error.descripcion && <span className={style.error}>{error.descripcion} </span>}
                        </div>

                        <div className={style.column}>
                            <label className={style.label} >Tiempo estimado:</label>
                            <input value={create.duracion} type="number"
                                name="duracion"
                                onChange={handleInput}
                                min="1"
                                max="100" className={style.input}
                            />
                            {error && error.duracion && <span className={style.error}>{error.duracion}</span>}
                        </div>

                        <div className={style.column}>
                            <label className={style.label} >Temporada</label>
                            <select value={create.temporada} name="temporada" onChange={handleInput} className={style.input}>
                                <option value="">Selecionar temporada</option>
                                <option value="Verano">Verano</option>
                                <option value="Otonio">Otonio</option>
                                <option value="Invierno">Invierno</option>
                                <option value="Primavera">Primavera</option>
                            </select>
                            {error && error.temporada && <span className={style.error}>{error.temporada}</span>}
                        </div>

                        <div className={style.column}>
                            <label className={style.label} >Pais:</label>
                            <select value={selectedCountry} onChange={handleSelect} className={style.input}>
                                <option value="">Agregar pais</option>
                                {orderCountries.map(({ nombre, id }) => (
                                    <option key={id} value={nombre}>
                                        {nombre}
                                    </option>
                                ))}
                            </select>

                            {error && error.pais && <span className={style.error}>{error.pais}</span>}
                        </div>

                        <ul className={style.select}>
                            {create.countries.map((country) => (
                                <ul key={country}>
                                    <button type="button" className={style.x} onClick={() => handleRemoveCountry(country)}>
                                        ❌
                                    </button>
                                    {country}
                                </ul>
                            ))}
                        </ul>
                        <button type="submit" className={style.button}>Crear</button>
                    </div>
                </div>
            </form >
        </div >
    );
}

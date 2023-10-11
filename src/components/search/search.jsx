import style from './search.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getByName } from "../../redux/actions";
import lupa from '../../assets/lupa.png'
import { useLocation } from 'react-router-dom'





export function Search() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const location = useLocation();
    const isHome = location.pathname === "/home";

    const handleChange = (event) => {
        if (isHome) {
            setInput(event.target.value);
        }
        else {
            alert('Solo puedes bucar desde home')
            history.push("/home")
        }
    };

    const handleSubmit = () => {

        if (input.length === 0) {
            alert('Ingrese un Pais')
        }
        else {
            dispatch(getByName(input))
            setInput('')
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            dispatch(getByName(input))
            setInput('')
        }
    }

    return (
        <div className={style.search}>
            <input className={style.input} onKeyDown={handleKeyDown} type='search' value={input} placeholder='Ingrese un pais' onChange={handleChange} />
            <button className={style.btn} onClick={handleSubmit}><img src={lupa} alt='busqueda' /></button>
        </div>
    );
}
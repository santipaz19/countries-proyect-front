// import SearchBar from "../SearchBar/SearchBar";
import style from './nav.module.css'
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo4.png"
import { Search } from '../search/search';

export default function Nav({ onSearch }) {
    return (
        <div className={style.navContainer}>
            <div className={style.nav}>
                <NavLink className={style.home} to={'/home'}>
                    <img src={logo} alt='logo' className={style.logo} />
                </NavLink>
                <div className={style.links}>
                    <NavLink className={style.home} to={'/home'}>
                        <button className={style.btn2}><p>Home</p></button>
                    </NavLink>
                    <NavLink className={style.home} to={'/new-activity'}>
                        <button className={style.btn2}><p>New Activity</p></button>
                    </NavLink>
                    <NavLink className={style.home} to={'/about'}>
                        <button className={style.btn2}><p>How to use</p></button>
                    </NavLink>
                </div>
                <div><Search /></div>
            </div>
        </div >
    );
}
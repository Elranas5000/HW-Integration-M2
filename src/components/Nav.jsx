import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import style from "./componentsStyles/Nav.module.css"


const Nav = ({onSearch}) =>{
    return(
        <div className={style.nave}>
            <SearchBar onSearch={onSearch}/>
            <button className={style.boton}>
                <Link to="/about">About</Link>
            </button>
            <button className={style.boton}>
                <Link to="/home">Home</Link>
            </button>
            <button className={style.boton}>
                <Link to="/favorites">Favorites</Link>
            </button>
        </div>
    )
}

export default Nav;
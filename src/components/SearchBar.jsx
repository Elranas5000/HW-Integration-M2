import { useState } from "react";
import style from "./componentsStyles/SearchBar.module.css"
import logo from "../Rick-and-Morty.png"

export default function SearchBar({onSearch}) {

   
const [id, setId] = useState("");

const handleChange = (event)=>{
   setId(event.target.value)
}

return (

   <div className={style.searchBar}>
      <div className={style.topBar}>
         <ul className={style.left}>
            <img className={style.title} src={logo} alt='logo'/>
         </ul>
         <ul className={style.right}>
            <input className={style.searchInput} type='search' onChange={handleChange} value={id} />
            <button className={style.searchIcon} onClick={()=> onSearch(id)}>Add</button>
         </ul>
      </div>
   </div> 
   
);
}

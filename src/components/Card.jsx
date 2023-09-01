import { Link } from "react-router-dom";
import style from "./componentsStyles/Card.module.css";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";



function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }
      else{
         setIsFav(true)
         addFav({id, name, species, gender, image}) //le paso el pj entero
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.cardContainer}>

         <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

         <div className={style.imageContainer}>
            <button className={style.closeButton} onClick={()=>onClose(id)}>X</button>
            <img className={style.characterImage}src={image} alt='' /> 
         </div>

         <div className={style.atributes}>
            <Link to={`/Detail/${id}`}>
               <h2 className={style.name}>{name}</h2>
            </Link>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         

      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);

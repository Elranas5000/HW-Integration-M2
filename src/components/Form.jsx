import { useState } from "react";
import validation from "./validation";
import style from "./componentsStyles/Form.module.css"

const Form = ({ login }) =>{

    const [errors, setErrors] = useState({})

    const [userData, setUserData] = useState({
        email: "",
        password:""
    });
    
    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    return(

        <form className={style.form} onSubmit={handleSubmit}>
            <label className={style.text} htmlFor="email"> Email
                <input name="email" value={userData.email} type="text" onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
            </label>
            <hr />
            <label className={style.text} htmlFor="password"> Password
                <input name="password" value={userData.password} type="text" onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
            </label>
            <hr />
            <button className={style.button}>Submit</button>
        </form>
    )
}

export default Form;
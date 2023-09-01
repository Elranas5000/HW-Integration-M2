const validation = (userData) => {
    const errors = {};

    //email validation
    if(!/[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/i.test(userData.email)){
        errors.email = "Ingrese un E-mail válido"
    }
    if(!userData.email){
        errors.email = "Ingrese un E-mail"
    }
    if(userData.email.length > 35){
        errors.email = "Su E-mail no puede tener más de 35 caracteres"
    }

    //password validation
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "La contraseña debe tener al menos 1 número"
    }
    if( userData.password.length < 6  || userData.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }

    return errors;
}

export default validation;
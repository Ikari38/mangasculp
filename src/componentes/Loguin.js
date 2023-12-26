import React , {useState} from 'react';

export const Loguin = () => {
  return (
    <div>
    <h1>Loguin</h1>
    <form>
    <label for="nombre">Nombre: </label>
    <input type="text" id="nombre" placeholder="Nombre de usuario"/> <br />
    <label for="passw">Password:</label>
    <input type="password" id="passw" placeholder="Contraseña"/> <br/>
    <button type='submit' onClick={logger}>Iniciar Sesion</button>
    <div id="falla"></div>
    </form>
    <p>No estas registrado aun? Registrate! <button onClick={register_user}>Registrarse</button> </p>      
    </div>
  )
} 
// TODO Cambiar a una pagina en la que se rellene un formulario para que el usuario se registre contra nuestra bbdd
function register_user() {
  validate_new_user()
  // implementar la creacion del user  
}

function validate_new_user() {
  // Implementar una funcion que valide que user tiene los elementos necesarios / 
  // user no coincide con uno ya registrado
  // la pasword tiene al menos una mayuscula y un numero
  // validar que el email sigue un formato correcto
  // si el user no existe y cumple con los parametros de arriba se registra en la bbdd
}

function logger() {
    let log=false;
    let user=document.getElementById("nombre").value;
    let password=document.getElementById("passwd").value;
 //comprobamos que user corresponde a su password en la bbdd, si tal palante
    //Comprobar que los datos son correctos respecto al usuario
    if(user=="Jonathan"){
        log=true;
    }
    if(log===false){
        document.getElementById("falla").style="color:red;";
        document.getElementById("falla").innerHTML="El usuario o la contraseña son incorrectos";
    }else{
        alert("Inicio de sesión completado con exito");
    }
}

class User {
    constructor(nombre,correo){
        this.nombre = nombre;
        this.correo = correo;
    }


    borrarUser(id_user){
        console.log(`El usuario con el id: "${id_user}" ha sido eliminado de la base de datos`);
    }
}

const variable = new User("jesus","correo@correo.com");
variable.borrarUser(1);
//* Si no queremos inicializar un nuevo objeto, podemos crear un metodo estatico, para poder usarlo simplemente accediendo a la clase

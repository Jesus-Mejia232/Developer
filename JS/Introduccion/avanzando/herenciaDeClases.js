class User {
    tipo = "usuario";

    constructor(nombre,password){
        this.nombre = nombre;
        this.password = password;
    }

    obtenerPosts () {
        const posts = ["post1","post2"];
        return posts;
    }
}

class Mod extends User {
    constructor(nombre, password, permisos){
        super(nombre,password); // Con super podemos copiar todas las propiedades y metodos de la clase anterior. Aqui basicamente lo que estamos haciendo es, remplazar el valor 
        // de las dos variables, por el valor de esta clase, con los valores que esta clase reciba
        this.permisos = permisos;
    }
     
    borrarPosts (id) {  
        if(this.permisos.includes("borrar")){
            console.log(`El post con el id ${id} ha sido eliminado`);
        } else {
            console.log("No tienes los permisos para borrar posts");
        };
    };
};


//? Creando otra clase, con un usuario tipo administrador(superior a un moderador)

class Admin extends Mod {
    constructor(nombre, password, permisos){
        super(nombre, password, permisos);
    }

    eliminarUser (nombre) {
        if (this.permisos.includes("admin")){
            console.log(`El user ${nombre} ha sido eliminado`)
        }
    }
}

const user1 = new Mod ("Jesus","12234",["editar"]);
user1.borrarPos(4);

const newJesus = new Admin ("Admin","admin123",["admin","editar","eliminarUsers"]);
newJesus.eliminarUser("user1");


//? Creando modulos estaticos
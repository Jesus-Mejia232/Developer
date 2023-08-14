//? Block Scope/ Alcance tipo bloque
        //* - Pertenecen las variables declaradas con const o let dentro de un bloque {}
        //* - Solo podemos acceder a ellas dentro del bloque

        //* Con bloque se refiere a. En el caso del ejemplo que pondremos, a un condiconal, las variables que se cree dentro 
        //* del condiconal solo podrán ser accedidas dentro del condiconal, fuera de este no existirán.


        const edad = 19;

        if (edad => 18){
            const permiso = true;
            console.log(permiso);

            if(true) {
                console.log(permiso);
            }

            const funcionNueva = () => {
                console.log(permiso);
            }
            funcionNueva();
        };

        // console.log(permiso)

        //* Las variables con "Local Scope" pueden ser accedidas por funciones o condicionales anidados, es decir dentro del bloque
        //* de donde viene la variable a la que queremos acceder1
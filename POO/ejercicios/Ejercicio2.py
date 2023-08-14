class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def mostrar_datos(self):
        return (f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años")


class Estudiante(Persona):
    def __init__(self, nombre, edad, grado):
        super().__init__(nombre, edad)
        self.grado = grado

    def mostrar_grado(self):
        print(
            f"Hola, mi nombre es {self.nombre}, tengo {self.edad} años, y estoy en el grado {self.grado}")


alumno = Estudiante("Jesus", 17, "Universidad")

print(alumno.mostrar_datos())
alumno.mostrar_grado()

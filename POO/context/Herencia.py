class Persona:
    def __init__(self, nombre, edad, nacionalidad):
        self.nombre = nombre
        self.edad = edad
        self.nacionalidad = nacionalidad


class Artista:
    def __init__(self, habilidad):
        self.habilidad = habilidad

    def mostrar_habilidad(self):
        print(f"Mi habilidad es {self.habilidad}")


class EmpleadoArtista(Persona, Artista):
    def __init__(self, nombre, edad, nacionalidad, empresa, salario, habilidad):
        Persona.__init__(self, nombre, edad, nacionalidad)
        Artista.__init__(self, habilidad)
        self.salario = salario
        self.empresa = empresa

    def presentarse(self):
        return (f"{super().mostrar_habilidad()}")


prueba = EmpleadoArtista("Jesus", 17, "Hondureño",
                         "Empresa", 109000, "programar")

hola = EmpleadoArtista("Edgardo", 17, "Hondureño")

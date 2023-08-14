class Persona:
    def __init__(self, nombre, edad):
        self._nombre = nombre
        self._edad = edad

    # Metodo para acceder y obtener atributo privado o muy muy privado
    def get_nombre(self):
        return (self._nombre)

    # Metodo para modificar atributo privado o muy muy privado
    def set_nombre(self):
        return (self._nombre)


persona = Persona("Jesus", 17)
getdatos = persona.get_nombre()

print(getdatos)

class Cliente:
    def __init__(self, nombre, edad):
        self._nombre = nombre
        self.__edad = edad

    def get_obteniendoDatos(self):
        return self._nombre, self.__edad

    def set_modificandoDatos(self, newNombre, newEdad):
        self._nombre = newNombre
        self.__edad = newEdad


sujeto = Cliente("Jesus", 17)
obteniendoDatos = sujeto.get_obteniendoDatos()
print(obteniendoDatos)

sujeto.set_modificandoDatos("Edgardo", 17)
obteniendoDatos = sujeto.get_obteniendoDatos()
print(obteniendoDatos)

class Cliente:
    def __init__(self, nombre, edad):
        self._nombre = nombre,
        self._edad = edad

    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self, new_nombre):
        self._nombre = new_nombre

    @nombre.deleter
    def nombre(self):
        del self._nombre


# Obteniendo el dato e imprimiendo en pantalla
instancia = Cliente("Jesus", 17)
objeto = instancia.nombre
print(objeto)

# Modificando el dato, obteniendo, e imprimiendo en pantalla
instancia.nombre = "Edgardo"
objeto = instancia.nombre
print(objeto)

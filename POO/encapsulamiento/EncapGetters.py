class Cliente:
    def __init__(self, nombre, edad):
        self._nombre = nombre,
        self._edad = edad

    def get_nombre(self):
        return self._nombre


instanciaCliente = Cliente("Jesus", 17)

obteniendoDato = instanciaCliente.get_nombre()
print(obteniendoDato)

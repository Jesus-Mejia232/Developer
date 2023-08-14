# Atributos de una clase: Un atributo es una caracteristica que tiene una clase
class Telefono:
    def __init__(self, marca, modelo, camara):
        self.marca = marca
        self.modelo = modelo
        self.camara = camara

    def llamar():
        print("Has realizado una llamada")

    def cortar():
        print("has cortado la llamada")


telefono1 = Telefono("Samsung", "Galaxy", "128MP")

print(telefono1.camara)

# Métodos de una clase: Un método, básicamente es una acción, es algo que la clase hará, en otras palabras, un método es una función, dentro
# De una clase

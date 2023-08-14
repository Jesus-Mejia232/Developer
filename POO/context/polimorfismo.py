# Qué es el polimorfismo?
# En palabras más vagas, el polimorfismo significa, de cierta forma, la variedad de resutltados que hay, ya que lo que

class Animal:
    def sonido(self):
        pass


class Gato(Animal):
    def sonido(self):
        print("Miau")
        

class Perro(Animal):
    def sonido(self):
        print("Guau")


def hacer_sonido(animal):
    return (animal.sonido())


# Formas de hacer polimorfismo

perro = Perro()
gato = Gato()

# Forma 1
gato.sonido()
# dean
# Forma 2
hacer_sonido(gato)

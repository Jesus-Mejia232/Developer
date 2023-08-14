class Animal:
    def comer(self):
        print("Comiendo")


class Mamifero(Animal):
    def amamantar(self):
        print("amamantando")


class Ave(Animal):
    def volar(self):
        print("volar")


class Murcielago(Mamifero, Ave):
    pass


murcie = Ave()

murcie.comer()
murcie.volar()

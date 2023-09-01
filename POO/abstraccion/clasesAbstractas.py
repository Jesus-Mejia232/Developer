from abc import ABC, abstractclassmethod


class Cliente(ABC):
    @abstractclassmethod
    def __init__(self, nombre, apellido, edad, dni, actividad):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad
        self.dni = dni
        self.actividad = actividad

    @abstractclassmethod
    def hacer_actividad(self):
        pass

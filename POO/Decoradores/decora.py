def decorador(funcion):
    def funcion_modificada():
        print("Antes de llamar la función")
        funcion()
    return funcion_modificada


# Forma 1 de hacer un decorador
def saludo():
    print("Despues de llamar la funcion")

# Instanciamos la funcion:


instancia_de_funcion = decorador(saludo())


# Forma 2 de hacer un decorador en python y la forma optima de hacerlo

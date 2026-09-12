total = 0

def addition(a):
    nombre_un = float(input("Entrer un nombre: "))
    nombre_deux = float(input("entrer un deuxième nombre: "))
    resultat = 0
    b = 0
    resultat += nombre_un + nombre_deux + a
        
    print(resultat)


def soustraction(a):
    nombre_un = float(input("Entrer un nombre: "))
    nombre_deux = float(input("entrer un deuxième nombre: "))
    resultat = 0
    b = 0
    resultat += nombre_un - nombre_deux - a
        
    print(resultat)

def multiplication(a):
    a
    nombre_un = float(input("Entrer un nombre: "))
    nombre_deux = float(input("entrer un deuxième nombre: "))
    resultat = 0
    b = 0
    resultat += nombre_un * nombre_deux 
        
    print(resultat)

def pourcentage(a):
    a
    nombre_un = float(input("Entrer un nombre: "))
    nombre_deux = float(input("entrer un deuxième nombre: "))
    resultat = 0
    b = 0
    resultat += (nombre_un / 100) * nombre_deux + nombre_deux
        
    print(resultat)

def parametre(a):
    
    if a == 1:
        addition(total)
    elif a == 2:
        soustraction(total)
    elif a == 3:
        multiplication(total)
    elif a == 4:
        pourcentage(total)

from modules.fonction_calculatrice import addition
from modules.fonction_calculatrice import parametre

total = 0

b = int(1)
c = int(2)

fonction_addition = float(input("Faite un choix: "))

match fonction_addition:
    case 1:
        parametre(b)
    case 2:
        parametre(c)
    case 3:
        parametre(int(3))
    case 4:
        parametre(int(4))
    case _:
        print("ce choix n'est pas disponible")




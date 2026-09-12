import json
     
def calcul(c, a, b):
     total = 0
     if c == "+":
          total = a + b
     elif c == "-":
          total = a - b
     elif c == "/":
          total = a / b
     elif c == "*":
          total = a * b
     elif c == "%":
          total = (a / 100) * b
     else:
          print('ce calcul n\'est pas disponible')
     
     return total

select_operation = input("Entrer une opération, +, -, /, x ou % ")
entre_un_chiffre = float(input("Entrer un chiffre "))
entrer_un_deuxieme_chiffre = float(input("Entrer un pourcentrage "))

total = calcul(select_operation, entre_un_chiffre, entrer_un_deuxieme_chiffre)

def adition(a, b):
     t = b + a 
     return t

c = adition(entre_un_chiffre, total)

print(f"Pourcentage de {entrer_un_deuxieme_chiffre}% sur {entre_un_chiffre} = {total}. Total = {c}")
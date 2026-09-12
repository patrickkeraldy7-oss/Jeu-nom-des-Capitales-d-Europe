
try:
    nombreUn = float(input('Entrer un nombre: '))
    nombreDeux = float(input('entrer un deuxième nombre: '))
    
    operation = input('Choisisser une operation: ')
    nombreUn = nombreUn
    nombreDeux = nombreDeux
    resultat = 0
    if operation == '+':
   
       print(nombreUn + nombreDeux)
    elif operation == '-':
       resultat = nombreUn - nombreDeux
       print(resultat)
    elif operation == '*':
       resultat = nombreUn * nombreDeux
       print(resultat)

    elif operation == '/' and nombreDeux == 0:
       raise SystemExit('Division par 0 impossible')
    elif operation == '/':
       resultat = round(nombreUn / nombreDeux)
       print(resultat)

except ZeroDivisionError:
   print("Division par 0 impossible")
except ValueError:
   print("erreur de ceci n'est pas un chifre")
   

nombres = input('Entrer une suite de chiffres séparé par des virgules: ')

nouveau_nombres = nombres.replace(", ", " ")


liste = nouveau_nombres.split()
liste_un = []
for x in liste:
       
       liste_int = [int(x) for x in liste]
       print(liste_int)

a = len(liste_int) - 1
y = 0
int(y)

nombre_un = 0
while y < a:
   y += 1
   nombre_un += liste_int[0] + liste_int[y]
   print(nombre_un)

total_nombre = len(liste_int)

moyenne_total = nombre_un / total_nombre
print('La moyenne total dans la liste est:', moyenne_total)
print('le nombre total dans la liste est: ', total_nombre)

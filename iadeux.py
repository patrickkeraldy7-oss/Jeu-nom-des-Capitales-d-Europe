import json, csv
textes_ajouter = "bonjour", " Salut"
base = []

with open("base.csv", mode="w") as file:
    for texte in textes_ajouter:
        base.append('"' + texte + "t")
    ecrires = csv.writer(file, delimiter=",")
    ecrires.writerow(base)
   

print(base)
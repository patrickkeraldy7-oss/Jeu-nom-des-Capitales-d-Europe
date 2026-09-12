
import csv
import requests
from bs4 import BeautifulSoup


titres = "Ceci est le titre de la page"
titre_textes = [titres]


descriptions = ("Ceci est la descrioption de la page.")

description_textes = []
for description in descriptions:
    description_textes.append(description)

en_tete = ["titre", "description"]
with open("unedata.csv", mode="w") as file_csv:
    ecrire = csv.writer(file_csv,  delimiter=",")
    ecrire.writerow(en_tete)
    for titre, description in zip(titre_textes, description_textes):
        ecrire.writerow([titre, description])

with open("unedata.csv") as file:
    for ligne in file:
        lire = file.read()
        print(lire)

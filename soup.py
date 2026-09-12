import requests
from bs4 import BeautifulSoup

dic_produits = dict()

with open('index.html', 'r', encoding="utf-8") as file:
    soup = BeautifulSoup(file.read(), "html.parser")

produits = soup.find_all("li")

for produit in produits:
    name = produit.find("h2").string
    prix = produit.find("p", class_="prix").string
    list_prix = prix.split(" ")
    dic_produits[name] = {"prix": list_prix[1]}

    description = produit.find_all("p")[-1].string
    dic_produits[name]["description"] = description
  


for name in dic_produits.keys():
    str_prix = dic_produits[name]["prix"]
    prix = str_prix
    prix = float(prix)
    prix_dollar = prix * 1.2
    dic_produits[name]["prix_dollar"] = f"{prix_dollar}$"

print(dic_produits["Collier"])


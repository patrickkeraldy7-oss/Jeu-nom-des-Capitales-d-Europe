import json

with open("pieces.json", "r", encoding="utf-8") as f:
    pieces = json.load(f)
for p in pieces:
    print("Nom: ", p["nom"])
    print("prix: ", p["prix"])
    print("quantite: ", p["quantite"])
    print("-" * 20)

valeurs_total = 0.0

for p in pieces:
    valeurs_total += p["prix"] * p["quantite"]
print("Valeur total du stock : ", valeurs_total, "€")
import json


with open("questions.json", "r", encoding="utf-8") as f:
 data = json.read(f)
 data = [{
    "bonjour": "Bonjour !",
    "salut": "Salut !",
    "Qui est tu": "Je suis ton IA fait maison",
    "comment tu t'appelle": "Je suis une IA fait maison",
    "pomme": "Il y a plusieures sorte de pomme, pomme de terre et le fruit la pomme du cot\u00e9 nourriture ect,..",
    "question ": "Question ?"
}]

cle = input("toi : ")

while (cle != "exit()"):
     
   if cle in data:
       
      print(data[cle])
      cle = input("toi : ")
   else:
      print("Je ne connais pas cette phrase ")
      entrer = input("Quel est la réponse ? ")
      data[cle] = entrer
   

with open("questions.json", "w") as f:
   json.dump(data, f, indent=4)
  



    
    




    
    
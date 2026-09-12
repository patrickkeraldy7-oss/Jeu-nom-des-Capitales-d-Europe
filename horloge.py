import datetime
from tkinter import *
import time
import pytz 


root = Tk() # je crée une variable pour la fonction TK
root.title("Horloge Numérique") # je crée un titre pour le nom de l'orloge
root.geometry("400x150") # j'indique la dimension

label_heure = Label(root, font=("Arial", 50), bg="black", fg="white") # j'ajoute un label pour l'affichage
label_heure.pack(anchor="center")

label_autre = Label(root, font=("Arial", 25), bg="black", fg="white")
label_autre.pack(anchor="center")

def mise_a_jour_heure():
    heure_actuel = time.strftime("%H:%M:%S") # une variable pour l'heure
    label_heure.config(text= heure_actuel) # configuration de l'heure dans le label
    label_heure.after(1000, mise_a_jour_heure) # actualisation de la fonction de l'heure toute les secondes

    autre = "Un texte ici"
    label_autre.config(text= autre)
mise_a_jour_heure() # démarrge de l'orloge
root.mainloop() # la boucle de l'orloge
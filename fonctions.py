def salaire_mensuel(salaire_annuel):
    mensuel = salaire_annuel / 12
    return mensuel


def salaire_hebdomadaire(salaie_mensuel):
    hebdomadaire = salaie_mensuel / 4
    return hebdomadaire


def salaire_horaire(salaire_hebdomadaire, heures_travailles):
    salaire_par_heures = salaire_hebdomadaire / heures_travailles
    return salaire_par_heures

annuel = int(input('Quel est votre salaire annuel: '))
heures = int(input("combien d'eures travaillez vous par semaines: "))

le_salaire_mensuel = salaire_mensuel(annuel)
hebdomadaire = salaire_hebdomadaire(le_salaire_mensuel)
par_heures = salaire_horaire(hebdomadaire, heures)

print('Votre salaire horaire est de : ', par_heures)


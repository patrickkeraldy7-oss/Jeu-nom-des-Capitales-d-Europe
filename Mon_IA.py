import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

try:
    with open("data.json", "r+") as f:
        data = json.load(f)
except:
    data = json = {
        "questions": ["bonjour", "salut"],
        "reponses": ["Bonjour à toi", "Salut !"]
    }

# Données d'entrainement

# Transformer le texte en nombres
vectorizer = TfidfVectorizer()
model = MultinomialNB()

# Entraîner un modèle
def entrainer():
    X = vectorizer.fit_transform(data["reponses"])
    model.fit(X, data["questions"])
entrainer()

# Fonction IA
def ia(message):
    X_test = vectorizer.transform([message])
    proba = model.predict_proba(X_test)[0]
    prediction = model.predict(X_test)[0]

    print("Confiance :", max(proba))

    if max(proba) < 0.40:
        return None

    return prediction


def apprendre(question, reponse):
    print("J'apprends :", question, "->", reponse)
    data["questions"].append(question)
    data["reponses"].append(reponse)

    with open("data.json", "w") as f:
        json.dump(data, f, indent=4)

    entrainer()

# Test
while True:
    message = input("Entrer un mot ")
    reponse = ia(message)

    if reponse is None:
        print("IA : Je ne connas pas encore.Quelle est la bonne réponse ?")
        bonne = input("toi : ")
        apprendre(message, bonne)
        print("IA : Merci, j'ai appris !")
    elif message == "e-":
        exit()
    else: 
        print("IA :", reponse)


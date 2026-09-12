import requests

if __name__ == "__main__":
    resultat = requests.get("https://google.fr")
    print(resultat.content)
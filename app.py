from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():

    return "<h1>Hello depuis Python dans Edge !</h1><input type='text' value='Entrer votre texte' id='texte'><br><button id='ok'>ok</button><br><script>const texte = document.getElementById('texte'); texte.addEventListener('click', ()=>{ if(texte.value = 'ok'){texte.value='teste'};})</script>"



if __name__ == "__main__":
    app.run(debug=True)


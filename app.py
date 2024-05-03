from flask import Flask, render_template, request, jsonify
from chat import get_msg
app = Flask(__name__)
app._static_folder = "./static"


@app.get('/')
def home():
    return render_template('index.html')


@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    response = get_msg(text)
    message = {"answer": response}
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug=True)

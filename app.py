from flask import Flask, request, jsonify
from flask_cors import CORS
from spellchecker import SpellChecker

app = Flask(__name__)

# Explicitly allow credentials and set allowed origin
CORS(app, supports_credentials=True, origins=["https://briantrommater.com"])

spell = SpellChecker()
phishing_keywords = ["urgent", "password", "click here", "verify", "update your account", "login now"]

def calculate_risk(text):
    words = text.lower().split()
    score = sum(1 for word in phishing_keywords if word in words)
    misspelled = spell.unknown(words)
    risk_percentage = min(100, score * 20)
    if misspelled:
        risk_percentage = max(risk_percentage, 75)
    return {"risk_score": risk_percentage}

@app.route('/analyze', methods=['POST'])
def analyze_text():
    data = request.json
    if not data or 'text' not in data:
        return jsonify({"error": "No text provided"}), 400
    return jsonify(calculate_risk(data['text']))

@app.route('/')
def home():
    return "Phishing risk analyzer is running!"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

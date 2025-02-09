from flask import Flask, request, jsonify
from flask_cors import CORS  # Import Flask-CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Basic phishing risk scoring
def calculate_risk(text):
    phishing_keywords = ["urgent", "password", "click here", "verify", "update your account", "login now"]
    score = sum(1 for word in phishing_keywords if word in text.lower())
    return {"risk_score": min(100, score * 20)}

@app.route('/analyze', methods=['POST'])
def analyze_text():
    data = request.json
    if 'text' not in data:
        return jsonify({"error": "No text provided"}), 400
    return jsonify(calculate_risk(data['text']))

if __name__ == '__main__':
    app.run(debug=True)

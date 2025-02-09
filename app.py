from flask import Flask, request, jsonify

app = Flask(__name__)

# Basic phishing risk scoring
def calculate_risk(text):
    phishing_keywords = ["urgent", "password", "click here", "verify", "update your account", "login now"]
    score = sum(1 for word in phishing_keywords if word in text.lower())
    risk_percentage = min(100, score * 20)  # Normalize to a 100 scale
    return {"risk_score": risk_percentage}

@app.route('/analyze', methods=['POST'])
def analyze_text():
    data = request.json
    if 'text' not in data:
        return jsonify({"error": "No text provided"}), 400
    
    result = calculate_risk(data['text'])
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)

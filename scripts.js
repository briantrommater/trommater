async function analyzeText() {
    const text = document.getElementById("inputText").value;
    const response = await fetch("https://trommater-production.up.railway.app/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text })
    });

    const result = await response.json();
    document.getElementById("result").innerText = `Risk Score: ${result.risk_score}%`;
}

// Ensure the page loads before running any scripts
document.addEventListener('DOMContentLoaded', () => {
    console.log("Phishing Detection Tool Loaded.");
});

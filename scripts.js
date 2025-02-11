async function analyzeText() {
    const text = document.getElementById("inputText").value;
    const resultElement = document.getElementById("result");

    if (!resultElement) {
        console.error("Error: 'result' element not found in the DOM.");
        return;
    }

    const response = await fetch("https://trommater-production.up.railway.app/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text })
    });

    if (!response.ok) {
        console.error("Failed to fetch:", response.statusText);
        resultElement.innerText = "Error: Could not analyze text.";
        return;
    }

    const result = await response.json();
    resultElement.innerText = `Risk Score: ${result.risk_score}%`;
}

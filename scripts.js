async function analyzeText() {
    console.log("Analyze button clicked!");

    const text = document.getElementById("inputText").value;
    const resultElement = document.getElementById("riskScore");

    if (!resultElement) {
        console.error("Error: 'riskScore' element not found in the DOM.");
        return;
    }

    console.log("Sending text to API:", text);

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
    console.log("Received response:", result);

    const riskScore = result.risk_score;
    resultElement.innerText = `Risk Score: ${riskScore}%`;

    // Remove previous color classes
    resultElement.classList.remove("low-risk", "medium-risk", "high-risk");

    // Apply new color class based on risk score
    if (riskScore < 25) {
        resultElement.classList.add("low-risk");  // Green
    } else if (riskScore >= 25 && riskScore < 75) {
        resultElement.classList.add("medium-risk");  // Yellow
    } else {
        resultElement.classList.add("high-risk");  // Red
    }
}

async function analyzeText() {
    console.log("Analyze button clicked!"); // Debugging line

    const text = document.getElementById("inputText").value;
    const resultElement = document.getElementById("riskScore");

    if (!resultElement) {
        console.error("Error: 'result' element not found in the DOM.");
        return;
    }

    console.log("Sending text to API:", text); // Debugging line

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
    console.log("Received response:", result); // Debugging line

    resultElement.innerText = `Risk Score: ${result.risk_score}%`;
}

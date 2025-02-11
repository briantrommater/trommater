async function analyzeText() {
    const text = document.getElementById("inputText").value;

    const response = await fetch("https://trommater-production.up.railway.app/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text })
    });

    if (!response.ok) {
        console.error("Failed to fetch:", response.statusText);
        document.getElementById("result").innerText = "Error: Could not analyze text.";
        return;
    }

    const result = await response.json();
    document.getElementById("result").innerText = `Risk Score: ${result.risk_score}%`;
}

async function analyzeText() {
    const text = document.getElementById("inputText").value;

    const response = await fetch("https://trommater-production.up.railway.app/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text }),
        credentials: "include"  // ✅ Ensure CORS credentials are handled
    });

    if (!response.ok) {
        console.error("Failed to fetch:", response.status, response.statusText);
        document.getElementById("result").innerText = `Error: ${response.status} ${response.statusText}`;
        return;
    }

    const result = await response.json();
    document.getElementById("result").innerText = `Risk Score: ${result.risk_score}%`;
}

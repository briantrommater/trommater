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
    const originalImage = [
    "img1.jpg", "img2.jpg", "img3.jpg",
    "img4.jpg", "img5.jpg", "img6.jpg",
    "img7.jpg", "img8.jpg", "img9.jpg"
        ];

    let shuffledImage = [...originalImage];

    function shuffleTiles() {
    shuffledImage.sort(() => Math.random() - 0.5);
    renderTiles();
    }

    function renderTiles() {
    const grid = document.getElementById("captchaGrid");
    grid.innerHTML = "";
    shuffledImage.forEach((src, index) => {
        let tile = document.createElement("div");
        tile.classList.add("captcha-tile");
        tile.style.backgroundImage = `url(${src})`;
        grid.appendChild(tile);
        });
    }

    function verifyCaptcha() {
    if (JSON.stringify(shuffledImage) === JSON.stringify(originalImage)) {
        document.getElementById("captchaResult").innerText = "✅ Correct!";
    } else {
        document.getElementById("captchaResult").innerText = "❌ Not yet correct!";
    }
    }

    window.onload = renderTiles;

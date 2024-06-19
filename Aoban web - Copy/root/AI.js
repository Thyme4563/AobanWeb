function processInput() {
    const userInput = document.getElementById("ai-input").value.toLowerCase();
    let response = '';

    // Greeting Detection
    if (userInput.includes("hello")) {
        const greetings = ["Greetings Human", "Hello Human", "Hi human I am an AI"];
        response = greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Emotion Detection
    if (userInput.includes("how are you")) {
        const emotions = ["sad", "normal", "happy"];
        const emotionResponses = ["I am feeling ", "Oh yeah, I'm feeling "];
        const selectedEmotion = emotions[Math.floor(Math.random() * emotions.length)];
        const selectedResponse = emotionResponses[Math.floor(Math.random() * emotionResponses.length)];
        response = selectedResponse + selectedEmotion;
    }

    if (response === '') {
        response = "I'm not sure how to respond to that.";
    }

    document.getElementById("ai-response").innerText = response;
}
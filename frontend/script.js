async function sendPrompt() {

    const input = document.getElementById("prompt");

    const prompt = input.value;

    if (prompt === "") return;

    const chatBox = document.getElementById("chatBox");

    chatBox.innerHTML += `
        <div class="user">
            <b>You:</b> ${prompt}
        </div>
    `;

    input.value = "";

    const response = await fetch("/chat", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            prompt: prompt
        })

    });

    const data = await response.json();

    chatBox.innerHTML += `
        <div class="bot">
            <b>Bot:</b> ${data.reply}
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;

}
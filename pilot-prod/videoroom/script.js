document.addEventListener('DOMContentLoaded', function () {
    const reportButton = document.getElementById('reportButton');
    const nextButton = document.getElementById('nextButton');
    const sendButton = document.getElementById('sendButton');
    const chatInput = document.getElementById('chatInput');
    const messageBox = document.getElementById('messageBox');

    reportButton.addEventListener('click', reportUser);
    nextButton.addEventListener('click', skipUser);
    sendButton.addEventListener('click', sendMessage);

    function reportUser() {
        // Implement reporting logic here
        alert('User reported.');
    }

    function skipUser() {
        // Implement skipping logic here
        alert('Skipped to the next user.');
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message !== '') {
            displayMessage('You: ' + message);
            // Implement sending message logic here
            chatInput.value = '';
        }
    }

    function displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageBox.appendChild(messageElement);
    }
});

let reloadCount = 0;
let isButtonDisabled = false;

function checkLoginStatus() {
    const loginSwitch = document.getElementById('loginSwitch');
    const loginStatus = document.getElementById('loginStatus');
    
    if (loginSwitch.checked) {
        loginStatus.textContent = "Logged in";
        window.localStorage.setItem("isLoggedIn", "true");
        window.onbeforeunload = null;
        isButtonDisabled = false; // Allow unlimited reloads when logged in
    } else {
        loginStatus.textContent = "Non Logged in";
        isButtonDisabled = true; // Limit reloads when not logged in
    }
}

function simulateReload() {
    if (isButtonDisabled) {
        reloadCount++;
        if (reloadCount === 9) {
            document.getElementById('lastChancePopup').style.display = 'block';
        } else if (reloadCount === 10) {
            document.getElementById('lastChancePopup').style.display = 'none';
            document.getElementById('blockIPPopup').style.display = 'block';
            blockIP();
            disableButton();
        } else {
            updateReloadCount();
            alert("Page has been virtually reloaded.");
        }
    } else {
        updateReloadCount();
        alert("Page has been virtually reloaded.");
    }
}

function updateReloadCount() {
    const reloadCountDisplay = document.getElementById('reloadCount');
    reloadCountDisplay.textContent = reloadCount;
}

function closeLastChancePopup() {
    document.getElementById('lastChancePopup').style.display = 'none';
}

function blockIP() {
    // Simulate IP blocking
    setTimeout(function() {
        document.getElementById('blockIPPopup').style.display = 'none';
    }, 5000); // Hides the popup after 5 seconds (5000 milliseconds)
}

function disableButton() {
    const reloadButton = document.getElementById('reloadButton');
    reloadButton.disabled = true;
    reloadButton.style.backgroundColor = '#FF5733'; // Change button color to red
    isButtonDisabled = true;
}

document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = window.localStorage.getItem("isLoggedIn");
    const loginSwitch = document.getElementById('loginSwitch');
    if (isLoggedIn === "true") {
        loginSwitch.checked = true;
    }
    checkLoginStatus();

    loginSwitch.addEventListener('change', checkLoginStatus);
});

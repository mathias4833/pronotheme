var actualMode = false;


function checkStoredSettings(storedSettings) {
    // check if stored value already exists
    if ((storedSettings.darkMode !== false) && (storedSettings.darkMode !== true)) {
        browser.storage.local.set({darkMode: false});
    }
    actualMode = !storedSettings.darkMode;
    updateMode();
    actualMode = !actualMode;
}


function updateMode() {
    // change button style depending on actual mode
    if (!actualMode) {
        document.getElementById('pronotheme').className = 'pronotheme darkPronote';
        document.body.className = 'darkMode';
    } else {
        document.getElementById('pronotheme').className = 'pronotheme lightPronote';
        document.body.className = 'lightMode';
    }
}


function sendMessage() {
    // send the new value of actualMode to ./content_scripts/script.js
    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
        browser.tabs.sendMessage(tabs[0].id, actualMode);
    });
    browser.storage.local.set({darkMode: !actualMode});
    actualMode = !actualMode;
}


function handleButtonClick() {
    document.addEventListener("click", (e) => {
        console.log(browser.storage.local.get(), 'hey');
        if (e.target.id === 'pronotheme') {
            updateMode();
            sendMessage();
        }
        else if (e.target.classList.contains("clear")) {
            browser.tabs.reload();
            window.close();
        }
    });
}


function onError(e) {
    console.error(e);
}


function initFunction() {
    // update theme if button pressed
    handleButtonClick();

    // check what mode to display in the popup
    const gettingStoredSettings = browser.storage.local.get();
    gettingStoredSettings.then(checkStoredSettings, onError);
}


initFunction();
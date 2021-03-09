// method for removing a node element
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}


function changeTheme(request, sender, sendResponse) {
    deleteStylesheet();

    // inject css file to apply dark Theme
    if (request) {
        let cssLink = browser.extension.getURL("content_scripts/style.css");
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssLink;
        link.id = 'pronothemeDarkMode';
        document.head.appendChild(link);
    }
}


function deleteStylesheet() {
    try {
        document.getElementById('pronothemeDarkMode').remove();
    } catch (error) {}
}


function checkStoredSettings(storedSettings) {
    // check if stored value already exists
    if ((storedSettings.darkMode !== false) && (storedSettings.darkMode !== true)) {
        browser.storage.local.set({darkMode: false});
    }

    // change the actual theme
    changeTheme(storedSettings.darkMode);
}


function onError(e) {
    console.error(e);
}


function initFunction() {
    // remove useless scroll
    document.documentElement.style.overflow = 'hidden';

    // wait for popup's instructions
    browser.runtime.onMessage.addListener(changeTheme);

    // check what mode to display
    const gettingStoredSettings = browser.storage.local.get();
    gettingStoredSettings.then(checkStoredSettings, onError);
}


initFunction();
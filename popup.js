function getUrl() {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        function(tabs){
            var url = tabs[0].url;
            chrome.storage.sync.set({ 'data' : url });
        }
    );
}
chrome.tabs.onActivated.addListener(getUrl);
chrome.tabs.onUpdated.addListener(getUrl);
function readJSONToStorage(link, name) {
    var request = new XMLHttpRequest();
    request.open("GET", link, true);
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = {};
            obj[name] = JSON.parse(this.responseText.replace(/[‘’“”]/, "'").replace("…", "..."));
            chrome.storage.local.set(obj);
        }
    };
    request.send();
}

function stringToBias(biasString) {
    switch(biasString) {
        case 'left': return -50;
        case 'leftcenter': return -15;
        case 'center': return 0;
        case 'rightcenter': return 15;
        case 'right': return 50;
    }
    return 0;
}
function stringToQuality(qualityString) {
    switch(qualityString) {
        case 'HIGH': return 50;
        case 'MIXED': return 30;
        case 'LOW': return 10;
    }
    return 0;
}


function getUrl() {
    
    chrome.storage.local.get(null, function (local) {
        var nameToData = local.nameToData;
        var nameToStats = local.nameToStats;
        var linkToName = local.linkToName;
        chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT }, function (tabs) {
            var url = tabs[0].url.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1].replace("www.", "");

            chrome.storage.sync.set({ 'siteURL': url });
            if (url in linkToName) url = linkToName[url];
            chrome.storage.sync.set({ 'data': url });
            chrome.storage.sync.get(null, function (data) {
                var url = data.data;
                name.innerHTML = url;
                var bias = 0, quality = 0;
                var siteData = nameToData[data.siteURL];
                if (url in nameToStats) {
                    bias = nameToStats[url]["bias"];
                    quality = nameToStats[url]["quality"];
                } else if (siteData != undefined) {
                    bias = stringToBias(siteData[0]["bias"]);
                    quality = stringToQuality(siteData[0]["factual"]);
                } else {
                    chrome.browserAction.setIcon({ path: "icon3.png" });
                    return;
                }
                chrome.storage.sync.set({ 'total': (data.total == undefined ? 0 : data.total) + 1 });
                chrome.storage.sync.set({ 'totalBias': (data.totalBias == undefined ? 0 : data.totalBias) + bias });
                chrome.storage.sync.set({ 'totalQuality': (data.totalQuality == undefined ? 0 : data.totalQuality) + quality });
                if (Math.abs(bias) > 15 || quality < 50) chrome.browserAction.setIcon({ path: "icon2.png" });
                else chrome.browserAction.setIcon({ path: "icon.png" });
            });
        });
        chrome.tabs.executeScript(null, {
            file: "getPageMetas.js"
        }, function() {
            if (chrome.runtime.lastError) {
                console.log('There was an error : \n' + chrome.runtime.lastError.message);
            }
        });
        
    });
}

readJSONToStorage("https://jeffreyatw.com/static/mbfc/sources.json", "nameToData");
readJSONToStorage("linkToName.json", "linkToName");
readJSONToStorage("nameToLink.json", "nameToLink");
readJSONToStorage("nameToStats.json", "nameToStats");

chrome.tabs.onActivated.addListener(getUrl);
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {if(changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined) getUrl();});
chrome.runtime.onMessage.addListener(function(request, sender) {
	if (request.method == "getMetas") {
        var metas = request.metas;
        var content = "";
        var bestNum = -1;
        for (var i in metas) {
            if (metas[i][1]=="og:title") {
                chrome.storage.sync.set({"metas": metas[i][3]}); 
            }
        }
	}
});

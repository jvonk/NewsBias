var mapName = {
    "abcnews.go.com": "ABC",
    "afp.com": "AFP",
    "aljazeera.com": "Al Jazeera US/Canada News",
    "alternet.org": "Alternet",
    "ap.org": "AP",
    "apnews.com": "AP",
    "axios.com": "Axios",
    "bbc.com": "BBc",
    "bipartisanreports.com": "Bipartisan Report",
    "bloomberg.com": "Bloomberg",
    "breitbart.com": "Breitbart",
    "businessinsider.com": "Business Insider",
    "buzzfeednews.com": "BuzzFeed News",
    "buzzfeed.com": "BuzzFeed News",
    "cbs.com": "CBS",
    "cnet.com": "CBS",
    "cbsnews.com": "CBS",
    "csmonitor.com": "Christian Science Monitor",
    "cnn.com": "CNN",
    "westernjournal.com": "Conservative Tribune",
    "c-span.org": "CSPAN",
    "thedailybeast.com": "Daily Beast",
    "dailycaller.com": "Daily Caller",
    "dailykos.com": "Daily Kos",
    "dailymail.co.uk": "Daily Mail",
    "dailysignal.com": "Daily Signal",
    "dailywire.com": "Daily Wire",
    "davidwolfe.com": "David Wolfe",
    "democracynow.org": "Democracy Now",
    "drudgereport.com": "Drudge Report",
    "ft.com": "Financial Times",
    "thefiscaltimes.com": "Fiscal Times",
    "forbes.com": "Forbes",
    "foreignpolicy.com": "Foreign Policy",
    "fortune.com": "Fortune",
    "forwardprogressives.com": "Forward Progressives",
    "foxnews.com": "Fox",
    "freespeech.org": "FreeSpeech TV",
    "guacamoley.com": "Guacamoley",
    "huffpost.com": "Huffington Post",
    "huffingtonpost.com": "Huffington Post",
    "ijr.com": "IJR",
    "infowars.com": "InfoWars",
    "theintercept.com": "Intercept",
    "jacobinmag.com": "Jacobin",
    "latimes.com": "LA Times",
    "marketwatch.com": "Marketwatch",
    "mic.com": "Mic",
    "motherjones.com": "Mother Jones",
    "msnbc.com": "MSNBC",
    "nationalenquirer.com": "National Enquirer",
    "nationalreview.com": "National Review",
    "nbc.com": "NBC",
    "newrepublic.com": "New Republic",
    "nypost.com": "New York Post",
    "nytimes.com": "New York Times",
    "newsandguts.com": "News and Guts",
    "newsmax.com": "NewsMax",
    "npr.org": "NPR",
    "oann.com": "OAN",
    "occupydemocrats.com": "Occupy Democrats",
    "ozy.com": "OZY",
    "palmerreport.com": "Palmer Report",
    "patribotics.blog": "Patribotics",
    "pbs.org": "PBS",
    "pjmedia.com": "PJ Media",
    "politico.com": "Politico",
    "propublica.org": "ProPublica",
    "qz.com": "Quartz",
    "reason.com": "Reason",
    "redstate.com": "RedState",
    "reuters.com": "Reuters",
    "mobile.reuters.com": "Reuters",
    "secondnexus.com": "Second Nexus",
    "shareblue.com": "ShareBlue",
    "slate.com": "Slate",
    "talkingpointsmemo.com": "Talking Points Memo",
    "theadvocate.com": "The Advocate",
    "theamericanconservative.com": "The American Conservative",
    "theatlantic.com": "The Atlantic",
    "theblaze.com": "The Blaze",
    "economist.com": "The Economist",
    "thefederalist.com": "The Federalist",
    "thegatewaypundit.com": "The Gateway Pundit",
    "theguardian.com": "The Guardian",
    "thehill.com": "The Hill",
    "thenation.com": "The Nation",
    "newyorker.com": "The New Yorker",
    "theskimm.com": "The Skimm",
    "theweek.com": "The Week",
    "forbes.com": "Forbes",
    "weeklystandard.com": "The Weekly Standard",
    "tyt.com": "The Young Turks",
    "thinkprogress.org": "Think Progress",
    "time.com": "Time",
    "truthout.org": "Truthout",
    "twitchy.com": "Twitchy",
    "usatoday.com": "USA Today",
    "vanityfair.com": "Vanity Fair",
    "vice.com": "Vice",
    "vox.com": "Vox",
    "wsj.com": "Wall Street Journal",
    "washingtonexaminer.com": "Washington Examiner",
    "freebeacon.com": "Washington Free Beacon",
    "washingtonmonthly.com": "Washington Monthly",
    "washingtonpost.com": "Washington Post",
    "washingtontimes.com": "Washington Times",
    "wnd.com": "WND",
    "wonkette.com": "Wonkette",
    "worldtruth.tv": "WorldTruth.Tv"
    
}
var map = {  
    "ABC":{  
        "quality":57,
        "bias":0,

    },
    "AFP":{  
        "quality":62,
        "bias":0
    },
    "Al Jazeera US/Canada News":{  
        "quality":54,
        "bias":-1
    },
    "Alternet":{  
        "quality":18,
        "bias":-23
    },
    "AP":{  
        "quality":62,
        "bias":0
    },
    "Axios":{  
        "quality":52,
        "bias":-2
    },
    "BBC":{  
        "quality":54,
        "bias":-3
    },
    "Bipartisan Report":{  
        "quality":13,
        "bias":-27
    },
    "Bloomberg":{  
        "quality":58,
        "bias":4
    },
    "Breitbart":{  
        "quality":8,
        "bias":34
    },
    "Business Insider":{  
        "quality":39,
        "bias":0
    },
    "BuzzFeed News":{  
        "quality":51,
        "bias":-15
    },
    "CBS":{  
        "quality":57,
        "bias":4
    },
    "Christian Science Monitor":{  
        "quality":54,
        "bias":6
    },
    "CNN":{  
        "quality":32,
        "bias":-6
    },
    "Conservative Tribune":{  
        "quality":12,
        "bias":35
    },
    "CSPAN":{  
        "quality":59,
        "bias":0
    },
    "Daily Beast":{  
        "quality":41,
        "bias":-21
    },
    "Daily Caller":{  
        "quality":12,
        "bias":24
    },
    "Daily Kos":{  
        "quality":20,
        "bias":-24
    },
    "Daily Mail":{  
        "quality":19,
        "bias":13
    },
    "Daily Signal":{  
        "quality":30,
        "bias":-15
    },
    "Daily Wire":{  
        "quality":16,
        "bias":28
    },
    "David Wolfe":{  
        "quality":2,
        "bias":-32
    },
    "Democracy Now":{  
        "quality":48,
        "bias":-19
    },
    "Drudge Report":{  
        "quality":38,
        "bias":16
    },
    "Financial Times":{  
        "quality":48,
        "bias":3
    },
    "Fiscal Times":{  
        "quality":39,
        "bias":12
    },
    "Forbes":{  
        "quality":44,
        "bias":3
    },
    "Foreign Policy":{  
        "quality":45,
        "bias":9
    },
    "Fortune":{  
        "quality":46,
        "bias":5
    },
    "Forward Progressives":{  
        "quality":15,
        "bias":-25
    },
    "Fox":{  
        "quality":20,
        "bias":27
    },
    "FreeSpeech TV":{  
        "quality":37,
        "bias":-25
    },
    "Guacamoley":{  
        "quality":17,
        "bias":-20
    },
    "Huffington Post":{  
        "quality":24,
        "bias":-20
    },
    "IJR":{  
        "quality":41,
        "bias":2
    },
    "InfoWars":{  
        "quality":1,
        "bias":44
    },
    "Intercept":{  
        "quality":49,
        "bias":-23
    },
    "Jacobin":{  
        "quality":47,
        "bias":-28
    },
    "LA Times":{  
        "quality":58,
        "bias":-6
    },
    "Marketwatch":{  
        "quality":50,
        "bias":5
    },
    "Mic":{  
        "quality":39,
        "bias":-18
    },
    "Mother Jones":{  
        "quality":40,
        "bias":-24
    },
    "MSNBC":{  
        "quality":34,
        "bias":-19
    },
    "National Enquirer":{  
        "quality":6,
        "bias":10
    },
    "National Review":{  
        "quality":51,
        "bias":20
    },
    "NBC":{  
        "quality":57,
        "bias":-3
    },
    "New Republic":{  
        "quality":46,
        "bias":-19
    },
    "New York Post":{  
        "quality":20,
        "bias":18
    },
    "New York Times":{  
        "quality":52,
        "bias":-5
    },
    "News and Guts":{  
        "quality":31,
        "bias":-15
    },
    "NewsMax":{  
        "quality":43,
        "bias":-28
    },
    "NPR":{  
        "quality":56,
        "bias":-5
    },
    "OAN":{  
        "quality":23,
        "bias":28
    },
    "Occupy Democrats":{  
        "quality":9,
        "bias":-30
    },
    "OZY":{  
        "quality":43,
        "bias":0
    },
    "Palmer Report":{  
        "quality":8,
        "bias":-34
    },
    "Patribotics":{  
        "quality":1,
        "bias":-40
    },
    "PBS":{  
        "quality":57,
        "bias":-5
    },
    "PJ Media":{  
        "quality":17,
        "bias":26
    },
    "Politico":{  
        "quality":55,
        "bias":-3
    },
    "ProPublica":{  
        "quality":46,
        "bias":-5
    },
    "Quartz":{  
        "quality":44,
        "bias":-5
    },
    "Reason":{  
        "quality":42,
        "bias":18
    },
    "RedState":{  
        "quality":11,
        "bias":29
    },
    "Reuters":{  
        "quality":62,
        "bias":0
    },
    "Second Nexus":{  
        "quality":23,
        "bias":-23
    },
    "ShareBlue":{  
        "quality":33,
        "bias":-21
    },
    "Slate":{  
        "quality":43,
        "bias":-20
    },
    "Talking Points Memo":{  
        "quality":41,
        "bias":-13
    },
    "The Advocate":{  
        "quality":40,
        "bias":-23
    },
    "The American Conservative":{  
        "quality":33,
        "bias":28
    },
    "The Atlantic":{  
        "quality":46,
        "bias":-15
    },
    "The Blaze":{  
        "quality":8,
        "bias":27
    },
    "The Economist":{  
        "quality":48,
        "bias":4
    },
    "The Federalist":{  
        "quality":26,
        "bias":27
    },
    "The Gateway Pundit":{  
        "quality":12,
        "bias":35
    },
    "The Guardian":{  
        "quality":48,
        "bias":-6
    },
    "The Hill":{  
        "quality":54,
        "bias":9
    },
    "The Nation":{  
        "quality":47,
        "bias":-17
    },
    "The New Yorker":{  
        "quality":47,
        "bias":-9
    },
    "The Skimm":{  
        "quality":49,
        "bias":-2
    },
    "The Week":{  
        "quality":44,
        "bias":-10
    },
    "Forbes":{  
        "quality":44,
        "bias":-10
    },
    "The Weekly Standard":{  
        "quality":46,
        "bias":18
    },
    "The Young Turks":{  
        "quality":27,
        "bias":-24
    },
    "Think Progress":{  
        "quality":42,
        "bias":-13
    },
    "Time":{  
        "quality":43,
        "bias":-1
    },
    "Truthout":{  
        "quality":36,
        "bias":-24
    },
    "Twitchy":{  
        "quality":14,
        "bias":29
    },
    "USA Today":{  
        "quality":52,
        "bias":0
    },
    "Vanity Fair":{  
        "quality":38,
        "bias":-12
    },
    "Vice":{  
        "quality":42,
        "bias":-10
    },
    "Vox":{  
        "quality":43,
        "bias":-16
    },
    "Wall Street Journal":{  
        "quality":53,
        "bias":11
    },
    "Washington Examiner":{  
        "quality":35,
        "bias":18
    },
    "Washington Free Beacon":{  
        "quality":41,
        "bias":24
    },
    "Washington Monthly":{  
        "quality":30,
        "bias":-23
    },
    "Washington Post":{  
        "quality":51,
        "bias":-10
    },
    "Washington Times":{  
        "quality":33,
        "bias":20
    },
    "WND":{  
        "quality":4,
        "bias":36
    },
    "Wonkette":{  
        "quality":12,
        "bias":-34
    },
    "WorldTruth.Tv":{  
        "quality":1,
        "bias":20
    }
};
function getUrl() {
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
        function(tabs){
            var url = tabs[0].url;
            url = url.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1].replace("www.", "");
            chrome.storage.sync.set({ 'datab' : url });
            if (url in mapName) {
                url = mapName[url];
            }
            chrome.storage.sync.set({ 'data' : url });
        }
    );
}
chrome.tabs.onActivated.addListener(getUrl);
chrome.tabs.onUpdated.addListener(getUrl);

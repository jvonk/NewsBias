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

let name = document.getElementById('url');
let bias = document.getElementById('bias');
let quality = document.getElementById('quality');

var percentColors = [
    { pct: 0.0, color: { r: 0x00, g: 0x00, b: 0xff } },
    { pct: 0.5, color: { r: 0xcc, g: 0xcc, b: 0xcc } },
    { pct: 1.0, color: { r: 0xff, g: 0x0, b: 0x00 } } ];

var getColorForPercentage = function(pct, alpha) {
    var color = getColor(pct, alpha);
    return 'rgba(' + [color.r, color.g, color.b].join(',') + alpha;
    // or output as hex if preferred
}

var getColor = function(pct, alpha) {
    for (var i = 1; i < percentColors.length - 1; i++) {
        if (pct < percentColors[i].pct) {
            break;
        }
    }
    var lower = percentColors[i - 1];
    var upper = percentColors[i];
    var range = upper.pct - lower.pct;
    var rangePct = (pct - lower.pct) / range;
    var pctLower = 1 - rangePct;
    var pctUpper = rangePct;
    return {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
}
var getBias = function(input) {
    if (input<-30) return "This website has an extreme left bias.";
    if (input<-10) return "This website has a strong left bias.";
    if (input<-5) return "This website has a left bias.";
    if (input<0) return "This website has a slight left bias.";
    if (input==0) return "This website has minimal bias.";
    if (input<=5) return "This website has a slight right bias.";
    if (input<=10) return "This website has a strong right bias.";
    else return "This website has an extreme right bias.";
}
var getQuality = function(input) {
    var val = 100-Math.round(input*100/62-1);
    return "Of all news websites in the database, "+val+"% are more accurate than this.";
}
var getFeedback = function(input) {
    if (input < 15) return "This is an excellent choice. Keep it up.";
    if (input < 30) return "This is a decent choice. Can you do better?";
    if (input < 70) return "This is a okay choice. Try better.";
    if (input < 100) return "This is a poor choice. Please switch.";
    else return "This is awful. Switch now.";
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(a) {
    return "#" + componentToHex(a.r) + componentToHex(a.g) + componentToHex(a.b);
}
chrome.storage.sync.get('data', function(data) {
    var url = data.data;
    name.innerHTML=url;
    if (!(url in map)) {
        document.body.innerHTML+='<p>No data could be found.</p>';
        return;
    }
    name.innerHTML=url;
    var b = map[url]["bias"];
    var q = map[url]["quality"];
    chrome.storage.sync.get('bias', function(data) {
        b=data.bias;
    });
    chrome.storage.sync.get('quality', function(data) {
        q=data.quality;
    });
    var description = getBias(b)+" "+Math.round(Math.abs(b)*100/45+1)+"% of websites are less biased. "+getQuality(q)+" "+getFeedback(2*Math.abs(b)+(62-q));
    var colorBackground = getColor((b+50)/100, ',0.8)');
    colorBackground.r = Math.min(255, colorBackground.r+51);
    colorBackground.g = Math.min(255, colorBackground.g+51);
    colorBackground.b = Math.min(255, colorBackground.b+51);
    name.style.background=rgbToHex(colorBackground);
    document.body.innerHTML+='<p>'+description+'</p>';
    document.body.innerHTML+='<canvas id="chart" width="400" height="400"></canvas>';
    bias.innerHTML="Bias: "+b;
    quality.innerHTML="Quality: "+q;
    var dataArray = new Array();
    var labelArray = new Array();
    var colors = new Array();
    for (var key in map) {
        if (!map.hasOwnProperty(key) || key==url) continue;
        var data = map[key];
        dataArray.push({
            x: Math.round(data["bias"]*95/44),
            y: Math.round(data["quality"]*100/62),
            r: 7
        });
        labelArray.push(key);
        var color = getColorForPercentage((data["bias"]+50)/100, ',0.4)');
        colors.push(color);
    }
    new Chart(document.getElementById("chart"), {
        type: 'bubble',
        data: {
            labels: labelArray,
            datasets: [{
                backgroundColor: colors,
                borderColor: colors,
                label: 'Others',
                data: dataArray
            },
            {
                label: 'Current',
                backgroundColor: getColorForPercentage((b+50)/100, ',0.8)'),
                borderColor: getColorForPercentage((b+50)/100,',0.8)'),
                data: [{
                    x: Math.round(b*50/44),
                    y: Math.round(q*100/62),
                    r: 20
                }]
            }],
            backgroundColor: "#FF9966"
        },
        options: {
            scales: {
                xAxes: [{              
                    scaleLabel: {
                        display: true,
                        labelString: 'Bias'
                    },
                    type: 'linear',
                    position: 'bottom'
                }],
                yAxes: [{              
                    scaleLabel: {
                        display: true,
                        labelString: 'Quality'
                    },
                    type: 'linear',
                    position: 'left'
                }],
            },
            tooltips: {
               callbacks: {
                  label: function(tooltipItem, data) {
                     var label = data.labels[tooltipItem.index];
                     if (tooltipItem.datasetIndex>0) {
                         label = url;
                     }
                     return label + ': Bias ' + tooltipItem.xLabel + ' Quality ' + tooltipItem.yLabel;
                  }
                }
            }
        }
    });
});
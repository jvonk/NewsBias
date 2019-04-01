
var percentColors = [
    { pct: 0.0, color: [0x00, 0x00, 0xff] },
    { pct: 0.5, color: [0xcc, 0xcc, 0xcc] },
    { pct: 1.0, color: [0xff, 0x0, 0x00] }];

function getColorForPercentage(pct, alpha) {
    return 'rgba(' + getColor(pct).join(',') + alpha;
}

function getColor(pct) {
    for (var i = 1; i < percentColors.length - 1; i++) {
        if (pct < percentColors[i].pct) break;
    }
    var lower = percentColors[i - 1];
    var upper = percentColors[i];
    var pctUpper = (pct - lower.pct) / (upper.pct - lower.pct);
    var pctLower = 1 - pctUpper;
    return [Math.floor(lower.color[0] * pctLower + upper.color[0] * pctUpper),
    Math.floor(lower.color[1] * pctLower + upper.color[1] * pctUpper),
    Math.floor(lower.color[2] * pctLower + upper.color[2] * pctUpper)];
}
function getBiasString(input) {
    if (input < -30) return "This website has an extreme left bias.";
    if (input < -10) return "This website has a strong left bias.";
    if (input < -5) return "This website has a left bias.";
    if (input < 0) return "This website has a slight left bias.";
    if (input == 0) return "This website has minimal bias.";
    if (input <= 5) return "This website has a slight right bias.";
    if (input <= 10) return "This website has a strong right bias.";
    else return "This website has an extreme right bias.";
}
function getQualityString(input) {
    return "Of all news websites in the database, " + (100 - Math.round(input * 100 / 62 - 1)) + "% are more accurate than this.";
}

function getFeedbackString(input) {
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
    return "#" + componentToHex(a[0]) + componentToHex(a[1]) + componentToHex(a[2]);
}


chrome.storage.local.get(null, function (local) {
    var nameToData = local.nameToData;
    var nameToStats = local.nameToStats;
    var nameToLink = local.nameToLink;
    var dataArray = new Array();
    var labelArray = new Array();
    var colorArray = new Array();
    var descriptionElement = document.getElementById('description');
    var otherElement = document.getElementById('other');
    var nameElement = document.getElementById('url');
    chrome.storage.sync.get(null, function (data) {
        var siteLink = data.data in nameToLink ? nameToLink[data.data] : data.siteURL;
        var siteDataRaw = nameToData[siteLink];
        var siteData = siteDataRaw[0];
        var siteDescription = siteData["notes"].replace(/ *\([^)]*\) */g, " ").replace("Updated", " ").replace(/^History/, ' ').replace(/\s\s+/g, ' ');
        var siteDescriptionArray = siteDescription.split(/[.?!]/g);
        for (var i = 0; descriptionElement.innerHTML.length + siteDescriptionArray[i].length < 900; i++) {
            if (siteDescriptionArray[i] == undefined || siteDescriptionArray[i] == "" || siteDescriptionArray[i] == " ") break;
            descriptionElement.innerHTML += siteDescriptionArray[i] + '.';
        }
        var siteBias = siteData["bias"];
        if (siteBias == 'left') nameElement.style.background = '#0000FF';
        else if (siteBias == 'leftcenter') nameElement.style.background = '#DDDDFF';
        else if (siteBias == 'center') nameElement.style.background = '#EEEEEE';
        else if (siteBias == 'rightcenter') nameElement.style.background = '#FFDDDD';
        else if (siteBias == 'right') nameElement.style.background = '#FF0000';
        nameElement.href = siteData["url"];
        var url = data.data;
        for (var key in nameToStats) {
            if (!nameToStats.hasOwnProperty(key) || key == url) continue;
            var stats = nameToStats[key];
            dataArray.push({
                x: Math.round(stats["bias"] * 95 / 44),
                y: Math.round(stats["quality"] * 100 / 62),
                r: 7
            });
            labelArray.push(key);
            var colorForPercentage = getColorForPercentage((stats["bias"] + 50) / 100, ',0.4)');
            colorArray.push(colorForPercentage);
        }
        nameElement.innerHTML = url;
        var b = 0, q = 0;
        if (url in nameToStats) {
            nameElement.innerHTML = url;
            b = nameToStats[url]["bias"];
            q = nameToStats[url]["quality"];
            var otherDescription = getBiasString(b) + " " + Math.round(Math.abs(b) * 100 / 45 + 1) + "% of websites are less biased. " + getQualityString(q) + " " + getFeedbackString(2 * Math.abs(b) + (62 - q));
            var colorBackground = getColor((b + 50) / 100);
            colorBackground[0] = Math.min(255, colorBackground[0] + 51);
            colorBackground[1] = Math.min(255, colorBackground[0] + 51);
            colorBackground[2] = Math.min(255, colorBackground[0] + 51);
            nameElement.style.background = rgbToHex(colorBackground);
            otherElement.innerHTML += '<p>' + otherDescription + '</p>';
        } else if (siteData != undefined) {
            nameElement.innerHTML = siteData["name"]
            var biase = siteData["bias"];
            var text = "";
            if (biase == 'left') { text += "This website has a strong left bias. "; b = -70; }
            else if (biase == 'leftcenter') { text += "This website has a left bias. "; b = -20; }
            else if (biase == 'center') { text += "This website has minimal bias. "; b = 0; }
            else if (biase == 'rightcenter') { text += "This website has a right bias. "; b = 20; }
            else if (biase == 'right') { text += "This website has a strong right bias. "; b = 70; }
            else if (biase == 'fake-news') { text += "This website is FAKE news. "; q = 0; }
            biase = siteData["factual"];
            if (biase == 'MIXED') { text += "The site is sometimes factual. "; q = 30; }
            else if (biase == 'HIGH') { text += "The site is usually factual. "; q = 50; }
            else if (biase == 'LOW') { text += "The site is rarely factual. "; q = 10; }
            else if (text != "") otherElement.innerHTML += '<p>' + text + '</p>';
        } else {
            otherElement.innerHTML += "<a target='_blank' href='https://mediabiasfactcheck.com/submit-source'>This site is not in the database.<br>Click to add.</a>"
            return;
        }
        var totalT = 1;
        var totalB = 1.0;
        var totalQ = 1.0;
        totalT = data.total;
        totalB = data.totalBias;
        totalQ = data.totalQuality;
        var viewT = "";
        var temp = Math.round(totalB / totalT * 94 / 44);
        if (temp <= -40) viewT = "from the extreme left";
        else if (temp <= -15) viewT = "from the left";
        else if (temp < -5) viewT = "that is left leaning";
        else if (temp <= 5) viewT = "that is balanced";
        else if (temp < 15) viewT = "that is right leaning";
        else if (temp < 40) viewT = "from the right";
        else viewT = "from the extreme right";
        otherElement.innerHTML += "<p>Your tend to view content " + viewT + ". Your average accuracy is " + Math.round(totalQ / totalT * 100 / 62) + "%.</p>";
        var graphElement = document.getElementById("graph");
        graphElement.innerHTML += '<canvas id="chart" width="400" height="400"></canvas>';
        var chart = new Chart(document.getElementById("chart"), {
            type: 'bubble',
            data: {
                labels: labelArray,
                datasets: [{
                    backgroundColor: colorArray,
                    borderColor: colorArray,
                    label: 'Others',
                    data: dataArray
                },
                {
                    label: 'Current',
                    backgroundColor: getColorForPercentage((b + 50) / 100, ',0.8)'),
                    borderColor: getColorForPercentage((b + 50) / 100, ',0.8)'),
                    data: [{
                        x: Math.round(b * 95 / 44),
                        y: Math.round(q * 100 / 62),
                        r: 30
                    }]
                }, {
                    label: 'Average',
                    backgroundColor: getColorForPercentage((totalB / totalT + 50) / 100, ',0.8)'),
                    borderColor: getColorForPercentage((totalB / totalT + 50) / 100, ',0.8)'),
                    data: [{
                        x: Math.round(totalB / totalT * 95 / 44),
                        y: Math.round(totalQ / totalT * 100 / 62),
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
                        label: function (tooltipItem, data) {
                            var label = data.labels[tooltipItem.index];
                            if (tooltipItem.datasetIndex == 1) {
                                label = url;
                            } else if (tooltipItem.datasetIndex == 2) {
                                label = "Average";
                            }
                            return label + ': Bias ' + tooltipItem.xLabel + ' Accuracy ' + tooltipItem.yLabel;
                        }
                    }
                }
            }
        });
        document.getElementById("chart").onclick = function (evt) {
            var activePoints = chart.getElementsAtEvent(evt);
            var point = activePoints[activePoints.length - 1];
            if (point._index == 0) return;
            var beta = Object.keys(nameToStats)[point._index];
            var gamma = "https://www." + nameToLink[beta];
            chrome.tabs.create({ url: gamma });
        };

        var suggestedElement = document.getElementById('suggested');
        var feed2json = "https://api.rss2json.com/v1/api.json?rss_url=";
        var descriptionLink = "https%3A%2F%2Fnews.google.com%2Frss%2Fsearch%3Fq%3D"+ encodeURIComponent(data.metas).replace(/%20/g, "%2B")+"&api_key=z6hgvtruazf0ghcv27xrgo6ieyznezyet0i9khad";
        var request = new XMLHttpRequest();
        request.open("GET", feed2json + descriptionLink, true);
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText);
                var items = obj["items"];
                for (var item = 1; item < items.length; item++) {
                    var link = items[item]["link"].match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1].replace("www.", "");
                    
                    suggestedElement.innerHTML += "<tr>"+items[item]["content"]+"</tr>";
                }
            }
        };
        request.send();
    });
});
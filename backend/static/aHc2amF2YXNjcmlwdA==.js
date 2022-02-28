function clearInput(event){
    event.preventDefault();
    document.getElementById('search_input').value = "";
    results.innerHTML = "";
}



function searchStock(event){
    let isValid = document.querySelector('#input_wrap').reportValidity();
    event.preventDefault();
    if(isValid) {
        let para = document.getElementById('search_input').value;
        let url = "https://my-project-571-hw6-340621.wl.r.appspot.com/hw6/api/info/" + para;
        $.ajax({
            url: url, 
            success: function(result){
                let results = document.getElementById("results");
                if(result.candle.s == "ok")  {
                    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    let currentDate = new Date();
                    const offset = currentDate.getTimezoneOffset();
                    let time = new Date(currentDate.getTime() - (offset*60*1000)).toISOString().split('T')[0]
                    let recommend = result.recommend;
                    let news = result.news;
                    let jsonprofile = result.profile;
                    let jsonquote = result.quote;
                    let jsoncandle = result.candle;
                    console.log(jsoncandle);
                    let tradeday = new Date(jsonquote.t*1000);
                    let change = jsonquote.d;
                    let changep = jsonquote.dp;
                    if(change >= 0) {
                        change = change + '<img src="img/GreenArrowUp.png">';
                        changep = changep + '<img src="img/GreenArrowUp.png">';
                    } else {
                        change = change + '<img src="img/RedArrowDown.png">';
                        changep = changep + '<img src="img/RedArrowDown.png">';
                    }
                    let data1 = [];
                    let data2 = [];
                    for(let i = 0; i < jsoncandle.c.length; i++){
                        let temp1 = [];
                        let temp2 = [];
                        temp1.push(jsoncandle.t[i]*1000);
                        temp1.push(jsoncandle.c[i]);
                        data1.push(temp1);
                        temp2.push(jsoncandle.t[i]*1000);
                        temp2.push(jsoncandle.v[i]);
                        data2.push(temp2);
                    }
                    let newshtml = "";
                    news.forEach(element => {
                        let newsdate = new Date(element.datetime*1000);
                        newshtml += `
                            <div class="newspost">
                                <img src="` + element.image + `">
                                <div>
                                    <div class="headline">` + element.headline + `</div>
                                    <div class="date">` + newsdate.getDate() + " " + months[newsdate.getMonth()] + ", "+ newsdate.getFullYear() + `</div>
                                    <a class="newslink" target="_blank" href="`+element.url+`">See Original Post</a>
                                </div>    
                            </div>`;
                    });
                    results.innerHTML = `
                        <div class="tab">
                            <button id="cbutton" class="tablinks focused" onclick="openTab(event, 'company')">Company</button>
                            <button class="tablinks" onclick="openTab(event, 'summary')">Stock Summary</button>
                            <button class="tablinks" onclick="openTab(event, 'charts')">Charts</button>
                            <button class="tablinks" onclick="openTab(event, 'news')">Latest News</button>
                        </div>
                        <div id="company" class="tabcontent">
                            <img src="`+jsonprofile.logo+`" alt="company logo">
                            <table>
                                <tr>
                                    <td class="col1">Company Name</td>
                                    <td class="col2">`+jsonprofile.name+`</td>
                                </tr>
                                <tr>
                                    <td class="col1">Stock Ticker Symbol</td>
                                    <td class="col2">`+jsonprofile.ticker+`</td>
                                </tr>
                                <tr>
                                    <td class="col1">Stock Exchange Code</td>
                                    <td class="col2">`+jsonprofile.exchange+`</td>
                                </tr>
                                <tr>
                                    <td class="col1">Company IPO Date</td>
                                    <td class="col2">`+jsonprofile.ipo+`</td>
                                </tr>
                                <tr>
                                    <td class="col1">Category</td>
                                    <td class="col2">`+jsonprofile.finnhubIndustry+`</td>
                                </tr>
                            </table>
                        </div>
                        
                        <div id="summary" class="tabcontent">
                            <table>
                                <tr>
                                    <td class="col1">Stock Ticker Symbol</td>
                                    <td class="col2">`+jsonprofile.ticker+`</td>
                                </tr>
                                <tr>
                                    <td class="col1">Trading Day</td>
                                    <td class="col2">`+tradeday.getDate() + " " + months[tradeday.getMonth()] + ", "+ tradeday.getFullYear() +`</td>
                                </tr>
                                <tr>
                                    <td class="col1">Previous Closing Price</td>
                                    <td class="col2">`+jsonquote.pc+`</td>
                                </tr>
                                <tr>
                                    <td class="col1">Opening Price</td>
                                    <td class="col2">`+jsonquote.o+`</td>
                                </tr>
                                <tr>
                                    <td class="col1">High Price</td>
                                    <td class="col2">`+jsonquote.h+`</td>
                                </tr>
                                <tr>
                                    <td class="col1">Low Price</td>
                                    <td class="col2">`+jsonquote.l+`</td>
                                </tr>
                                <tr>
                                    <td class="col1">Change</td>
                                    <td class="col2">`+change+`</td>
                                </tr>
                                <tr>
                                    <td class="col1">Change Percent</td>
                                    <td class="col2">`+changep+`</td>
                                </tr>
                            </table>

                            <table id="ratings">
                                <tr>
                                    <td class="rating ratingL">Strong Sell</td>
                                    <td class="rating rating1">`+recommend[0].strongSell+`</td>
                                    <td class="rating rating2">`+recommend[0].sell+`</td>
                                    <td class="rating rating3">`+recommend[0].hold+`</td>
                                    <td class="rating rating4">`+recommend[0].buy+`</td>
                                    <td class="rating rating5">`+recommend[0].strongBuy+`</td>
                                    <td class="rating ratingH">Strong Buy</td>
                                </tr>
                                
                            </table>
                            <div id="caption1">Recommendation Trends</div>
                        </div>
                        
                        <div id="charts" class="tabcontent">
                        </div>

                        <div id="news" class="tabcontent">
                            `+ newshtml+` 
                        </div>`;
                        // Create the chart
                        Highcharts.stockChart('charts', {          
                            rangeSelector: {
                                buttons: [{
                                    type: 'day',
                                    count: 7,
                                    text: '7d',
                                    title: 'View 7 days'
                                }, {
                                    type: 'day',
                                    count: 15,
                                    text: '15d',
                                    title: 'View 15 days'
                                }, {
                                    type: 'month',
                                    count: 1,
                                    text: '1m',
                                    title: 'View 1 month'
                                }, {
                                    type: 'month',
                                    count: 3,
                                    text: '3m',
                                    title: 'View 3 months'
                                }, {
                                    type: 'month',
                                    count: 6,
                                    text: '6m',
                                    title: 'View 6 months'
                                }],
                                selected: 4
                            },
                            title: {
                                text: 'Stock Price '+jsonprofile.ticker+' '+ time
                            },
                            subtitle: {
                                text: 'Source: <a target="_blank" href="https://finnhub.io/">Finnhub</a>',
                                align: 'center',
                                style: {
                                    fontFamily: 'sans-serif',
                                    textDecoration:'underline',
                                    color: 'black'
                                }
                            },
                            yAxis: [{
                                title: {
                                    text: 'Stock Price',
                                    style: {
                                        color: Highcharts.getOptions().colors[0]
                                    }
                                },
                                labels: {
                                    format: '{value}',
                                    style: {
                                        color: Highcharts.getOptions().colors[0]
                                    }
                                },
                                opposite: false
                            }, {
                                gridLineWidth: 0,
                                title: {
                                    text: 'Volumn',
                                    style: {
                                        color: Highcharts.getOptions().colors[1]
                                    }
                                },
                                labels: {
                                    formatter: function() {
                                    return this.value / 1000000 + "M";
                                    },
                                    style: {
                                        color: Highcharts.getOptions().colors[1]
                                    }
                                }
                            }],
                            series: [{
                                name: 'Stock Price',
                                data: data1,
                                type: 'area',
                                threshold: null,
                                yAxis: 0,
                                tooltip: {
                                    valueDecimals: 2
                                },
                                fillColor: {
                                    linearGradient: {
                                        x1: 0,
                                        y1: 0,
                                        x2: 0,
                                        y2: 1
                                    },
                                    stops: [
                                        [0, Highcharts.getOptions().colors[0]],
                                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                    ]
                                }
                            },
                            {
                                name: 'Volumn',
                                type: 'column',
                                data: data2,
                                yAxis: 1,
                                // dataGrouping: {
                                //     units: [[
                                //         'week', // unit name
                                //         [1] // allowed multiples
                                //     ], [
                                //         'month',
                                //         [1, 2, 3, 4, 6]
                                //     ]]
                                // }
                            }]
                        });
                    document.getElementById("cbutton").click();
                } else {
                    results.innerHTML = '<div id="error">Error: No Record has been found, please enter a valid symbol</div>';
                }  
            }
        });
        
    }
}

// some code used in https://www.w3schools.com/howto/howto_js_tabs.asp
function openTab(evt, tabname) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" focused", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " focused";
}
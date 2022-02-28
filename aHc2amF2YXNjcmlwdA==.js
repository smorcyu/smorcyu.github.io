function clearInput(event){
    event.preventDefault();
    document.getElementById('search_input').value = "";
    results.innerHTML = "";
}



function searchStock(event){
    console.log("pas here");
    let isValid = document.querySelector('#input_wrap').reportValidity();
    event.preventDefault();
    if(isValid) {
        let para = document.getElementById('search_input').value;
        let url = "https://my-project-571-hw6-340621.wl.r.appspot.com/hw6/api/info/" + para;
        fetch(url).then(response => {
            console.log(response.json());
        });

        let results = document.getElementById("results");
        if(true)  {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let profile = '{"country":"US","currency":"USD","exchange":"NASDAQ NMS - GLOBAL MARKET","finnhubIndustry":"Technology","ipo":"1980-12-12","logo":"https://finnhub.io/api/logo?symbol=AAPL","marketCapitalization":2681611,"name":"Apple Inc","phone":"14089961010.0","shareOutstanding":16319.44,"ticker":"AAPL","weburl":"https://www.apple.com/"}';
            let quote = '{"c":162.74,"d":2.67,"dp":1.668,"h":162.85,"l":152,"o":152.58,"pc":160.07,"t":1645736402}';
            let recommend = [{"buy":26,"hold":8,"period":"2022-02-01","sell":0,"strongBuy":17,"strongSell":0,"symbol":"AAPL"},{"buy":25,"hold":7,"period":"2022-01-01","sell":0,"strongBuy":17,"strongSell":0,"symbol":"AAPL"},{"buy":24,"hold":8,"period":"2021-12-01","sell":0,"strongBuy":16,"strongSell":0,"symbol":"AAPL"},{"buy":24,"hold":8,"period":"2021-11-01","sell":0,"strongBuy":16,"strongSell":0,"symbol":"AAPL"}];
            let candle = '{"c":[156.69,155.11,154.07,148.97,149.55,148.12,149.03,148.79,146.06,142.94,143.43,145.85],"h":[157.26,157.04,156.11,155.48,151.42,151.07,149.44,148.97,148.82,144.84,144.6,146.43],"l":[154.39,153.975,153.95,148.7,148.75,146.91,146.37,147.221,145.76,141.27,142.78,143.7001],"o":[154.97,156.98,155.49,155,150.63,150.35,148.56,148.44,148.82,143.8,143.93,144.45],"s":"ok","t":[1630972800,1631059200,1631145600,1631232000,1631491200,1631577600,1631664000,1631750400,1631836800,1632096000,1632182400,1632268800],"v":[82278261,74420207,57305730,140893235,102404329,109296295,83281315,68034149,129868824,123478863,75833962,76404341]}';
            let news = [{"category":"company","datetime":1631179227,"headline":"Tencent Leads $60 Billion Selloff As Gaming Crackdown Fears Grow","id":70401756,"image":"https://s.yimg.com/ny/api/res/1.2/GqxZIjDgjUk3HYz.1cj1Mw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/CCVJvo02fUqKyNGXcMx8bQ--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/e7c875c531c474dbb2ae27414da1e419","related":"AAPL","source":"Yahoo","summary":"(Bloomberg) -- Tencent Holdings Ltd. and Netease Inc. shed more than $60 billion of value as investor fears grow that Chinese regulators are preparing to tighten their grip dramatically on the world's largest gaming industry.Chinese regulators summoned industry executives to a Wednesday meeting to instruct them to break their “solitary focus” on profit and prevent minors from becoming addicted to games, according to the official Xinhua News Agency. Regulators also said there will be a temporary","url":"https://finnhub.io/api/news?id=84c5b4de755ccc3e00ee9c4b208f0861aa73883903a77d5ad317762fbd20a9ee"},{"category":"company","datetime":1631228365,"headline":"Sheryl Sandberg Says Small Businesses Online Revolution Will Continue","id":70428593,"image":"https://s.yimg.com/ny/api/res/1.2/ETDo80erXHJuxOCwaoq_Mw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/WV6Ulbr8mG0eHt3bRj0gwA--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/d20da2fd0206df527f593dffa6362437","related":"AAPL","source":"Yahoo","summary":"(Bloomberg) -- Facebook Inc. Chief Operating Officer Sheryl Sandberg said small businesses will keep choosing the internet to reach their customers even after the pandemic subsides and brick-and-mortar advertising options become more useful.“That digital transformation will continue to happen,” Sandberg said in an interview with Bloomberg News. “It might happen at a slightly slower rate but I think that the transformation and people moving to be online is going to continue to happen.”The Menlo P","url":"https://finnhub.io/api/news?id=19a06062957f933704aa32735cf95caa963aec8b1d87db5fc073407a65ab9b7c"},{"category":"company","datetime":1631227222,"headline":"Apple : MEDIA-Apple fires senior engineering program manager Ashley Gjøvik for allegedly leaking information - Verge","id":70431277,"image":"","related":"AAPL","source":"Finnhub","summary":"-- Source link: https://bit.ly/2YxCceL -- Note: Reuters has not verified this story and does notvouch for its accuracy ... | September 10, 2021","url":"https://finnhub.io/api/news?id=efe075d666077e41df14ddef4d2601e1e0f3e98cf44dd8e55ac4fd6dfda7c331"},{"category":"company","datetime":1631225580,"headline":"Apple: Things Looking up Ahead of Anticipated September iPhone 13","id":70447369,"image":"https://www.nasdaq.com/sites/acquia.prod/files/2019-05/0902-Q19%20Total%20Markets%20photos%20and%20gif_CC8.jpg?654147703","related":"AAPL","source":"Nasdaq","summary":"After a stodgy period, Apple (AAPL) stock has been gaining momentum recently. With shares up 21% over the past 3 months, the year-to-date performance has materially improved. \n\n\n\nThere's also a big catalyst ahead too, which Wedbush' Daniel Ives believes is partly what makes the giant from Cupertino a “top tech name to own.”\n\n\n\n\"The invites are out; iPhone 13 launch around the corner next week,\" Ives noted.\n\n\n\nIves' “enhanced confidence” in the iPhone 13 product cycle is based on Asia supply chain checks, in which the iPhone 13 makes up 35%-45% of the total 130-150 million iPhone builds in Q3.\n\n\n\nSpecs wise, Ives is confident Apple fans can look forward to an iPhone 13 boasting an “eye-popping” 1 terabyte storage option. This is double the amount of the current 512 GB capacity on offer with the highest Pro unit. The new model and will also include several other “key enhancements” with all iPhone 13 models possessing Lidar capabilities.\n\n\n\nThere's “massive pent-up demand” amongst Apple's installed base, says the analyst, pointing out that based on his analysis, over the past 3.5 years, roughly 250 million of the current 975 million iPhone owners have yet to upgrade their handsets.\n\n\n\nElsewhere, Ives thinks Apple remains fairly insulated from the regulators' ire with all things Big Tech, believing the App Store remains a “very defendable moat both in the courts and in the Beltway.” Facebook and Google are both more likely to get caught in the “anti-trust spider web.”\n\n\n\nApple remains the “favorite large cap tech name to play the 5G transformational cycle,” and as such, Ives sticks with an Outperform (i.e. Buy) rating and $185 price target. The implication for investors? Upside of 20%. (To watch Ives' track record, click here)\n\n\n\nSo, that's the Wedbush view, what does the rest of the Street have in mind for Apple? The stock boasts a Moderate Buy consensus rating based on 17 Buys vs. 6 Holds. The average price target is a more modest $166.64, representing 12-month returns of 8%. (See Apple stock analysis on TipRanks)\n\n\n\n\n\n\n\nTo find good ideas for stocks trading at attractive valuations, visit TipRanks' Best Stocks to Buy, a newly launched tool that unites all of TipRanks' equity insights.\n\n\n\nDisclaimer: The opinions expressed in this article are solely those of the featured analyst. The content is intended to be used for informational purposes only. It is very important to do your own analysis before making any investment.","url":"https://finnhub.io/api/news?id=41cc682cc72336b4c4823e4d369ec7731a97a386428fbbb957839819ca5bceee"},{"category":"company","datetime":1631223360,"headline":"Epic Games asks Apple to allow Fortnite's re-release in South Korea after passage of new law","id":70447370,"image":"https://www.nasdaq.com/sites/acquia.prod/files/2021-09-10T013905Z_1_ET1_RTRLXPP_2_LYNXPACKAGER.JPG?1390060399","related":"AAPL","source":"Nasdaq","summary":"\"Fortnite\" creator Epic Games has asked iPhone maker Apple to restore its Fortnite developer account and intends to re-release the popular game on iOS in South Korea, offering both Epic and Apple payment side-by-side, it said in a tweet.","url":"https://finnhub.io/api/news?id=25e422ba2aa635b5b6536b2578e7b75ac9e4265c361d7d5e0177e37b3d3da557"},{"category":"company","datetime":1631221200,"headline":"Their Phone Chargers Rule Amazon, But Anker Has Bigger Ambitions","id":70428365,"image":"https://s.yimg.com/ny/api/res/1.2/pBjVtq6VWa47AEUeXka5BQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/pyRMtLD4SkgZOPa2xgs06Q--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/be31ae7dea5d4f2583e47171e71da2b6","related":"AAPL","source":"Yahoo","summary":"(Bloomberg) -- A decade ago, then-Googler Steven Yang left California for Chinese technology hub Shenzhen to start Anker Innovations Technology Co Ltd. with less than $1 million in seed capital. Since then, he's relied on a pioneering strategy of mining consumer reviews on Amazon.com Inc. to pump out some of the world's most ubiquitous phone accessories.By studying the thousands of reviews and complaints about electronic products posted on the e-commerce platform daily, Yang realized he could re","url":"https://finnhub.io/api/news?id=769c2f061e5896e9c6eb1dd75a89741a0fd1414506d46a3fd15b11069fd72fd0"},{"category":"company","datetime":1631220000,"headline":"Epic Games asks Apple to allow \"Fortnite\" to return in South Korea","id":70447371,"image":"https://www.nasdaq.com/sites/acquia.prod/files/2021-09-10T010530Z_1_CH0_RTRLXPP_2_LYNXPACKAGER.JPG?1385172410","related":"AAPL","source":"Nasdaq","summary":"\"Fortnite\" creator Epic Games has asked iPhone maker Apple Inc to restore its Fortnite developer account and intends to re-release Fortnite on iOS in South Korea offering both Epic payment and Apple payment side-by-side, it said in a tweet.","url":"https://finnhub.io/api/news?id=9de082e14b550b82c68119eb7f9f4e417b9dfeb00296fb8d1c04558d852b5f32"},{"category":"company","datetime":1631218633,"headline":"Why Biden can't fix the semiconductor shortage","id":70428164,"image":"https://s.yimg.com/ny/api/res/1.2/ub4A5VGXbpFIQ9CkBO0iDg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://s.yimg.com/os/creatr-uploaded-images/2021-02/e5c12850-7712-11eb-bed7-ff59768d247a","related":"AAPL","source":"Yahoo","summary":"No matter how vital chips may be, there's no simple fix for shortages in a sector where overcapacity can be deadly.","url":"https://finnhub.io/api/news?id=47c1c68ae65dc2a771f0cac178c1498c05bde9689bd14dcf1a74d252b24e7399"},{"category":"company","datetime":1631218541,"headline":"Amazon Lights Fire Under Hot TV Market With Branded Set Of Devices","id":70428596,"image":"https://s.yimg.com/uu/api/res/1.2/RTN0CDheB.EFq.QhflmaUQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/03547db8e4ed73edea51f94e64670bdc","related":"AAPL","source":"Yahoo","summary":"Amazon pushed deeper into the television market Thursday, announcing an all-new lineup of devices and its first Amazon-branded 4K smart TVs.","url":"https://finnhub.io/api/news?id=f73d2ce4abfbb90370f48ddfa3ae87d424ef3fba8f9ec95c1d618d1b24701cd9"},{"category":"company","datetime":1631217600,"headline":"Samsung decision on new U.S. chip plant location 'imminent' -Texas county judge","id":70446833,"image":"https://www.nasdaq.com/sites/acquia.prod/files/2021-09-09T223412Z_240577150_RC2MMP9HIS07_RTRMADP_2_SAMSUNG-ELEC-USA.JPG?73708146","related":"AAPL","source":"Nasdaq","summary":"A decision by Samsung Electronics on the location of its new $17 billion U.S. chip plant was imminent, the judge for Texas\' Williamson County, which is in the running for the new factory, said on Thursday.","url":"https://finnhub.io/api/news?id=f5c6d9605e8ed8b0bca804031e4b19780594e7ddcc4c5ed1877a88ca149a74d9"}];
            let jsonprofile = JSON.parse(profile);
            let jsonquote = JSON.parse(quote);
            let jsoncandle = JSON.parse(candle);
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
                        selected: 1
                    },
                    title: {
                        text: 'Stock Price '+jsonprofile.ticker
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
                        name: 'Stock Price '+jsonprofile.ticker,
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
                        type: 'column',
                        data: data2,
                        yAxis: 1,
                        dataGrouping: {
                            units: [[
                                'week', // unit name
                                [1] // allowed multiples
                            ], [
                                'month',
                                [1, 2, 3, 4, 6]
                            ]]
                        }
                    }]
                });
            document.getElementById("cbutton").click();
        } else {
            results.innerHTML = '<div id="error">Error: No Record has been found, please enter a valid symbol</div>';
        }  
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
console.log('background page')
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == "hello")
        sendResponse({farewell: "price: "});
        console.log(request)

    });

/*
chrome.browserAction.onClicked.addListener( function() {
    var _analyzeBtn = document.querySelector('#analyze');
    console.log('clicked');
    _analyzeBtn.addEventListener('click', function() {
        var _execData = document.querySelector('#exec_data').value;
        var json_dump = JSON.parse(_execData);
        console.log(json_dump);
        /!*
         *Index 0 = Depth of Child
         *Index 1 = Array of All children indexes
         *Index 2 = Link of the webpage
         * If there are no heading in the google sheet then initilize i = 0
         *!/
        var elements = null;
        for(let i=1;i<json_dump.length;i++){
            //var randomnumber = Math.floor((Math.random()*100)+1);

            chrome.tabs.create({
                url: json_dump[i][2],
                selected: false}, function(tab){
                chrome.tabs.get(tab.id, function(){
                    if(chrome.tabs.status == 'loading'){console.log('loading')}
                    else{console.log('Outside Conditon'+tab.id)}
                })
                document.addEventListener('DOMContentLoaded', function () {
                    elements = getPriceTabOpens(json_dump[i][1],json_dump[i][0]);
                })

                //confirm(tab.id)
                //makeRequest(tab.id)

            });
            /!*chrome.tabs.query({active:true,currentWindowId:true},function(tabs){
                _tabID = tabs.id;
                console.log('tab ID: '+_tabID)
            })*!/

        }
        //json_dump[][2].forEach(windowOpen())
        //console.log('tab ID: '+_tabID)
    });
});*/

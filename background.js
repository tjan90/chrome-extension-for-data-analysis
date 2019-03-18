console.log('background running');
/*
chrome.storage.local.get(null,function(result) {
    //console.log(JSON.stringify(result));
    console.log(result);
    //console.log(result.array);
    var json_array = JSON.parse(result.array);
   /!* for (let i =0; i<json_array.length; i++){
        console.log(json_array[i]);
    }*!/
   for(let i = 0; i<json_array.length; i++){
       console.log(json_array[i])
   }
});*/

chrome.browserAction.onClicked.addListener(function (){
    console.log('background event triggered');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
            console.log(response.farewell);

            chrome.storage.local.get(null, function(result){
                console.log(result)

            });
        });
    });
});


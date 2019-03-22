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

/*
var browserAction = {};
browserAction.QUICK_ADD_API_URL =  'https://www.googleapis.com/drive/v2';
*/


/*
var clientId = '803126468441-1674nab3bkjslss6vbontq47629b197l.apps.googleusercontent.com';
var apiKey = 'AIzaSyC1FxrCcRhWxbPnSvjxOV04gI1roSqo8yQ';
var scopes = 'https://www.googleapis.com/auth/drive';

handleClientLoad()

function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth,1);
}

function checkAuth() {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},handleAuthResult);
}

function handleAuthResult(authResult) {
    var authorizeButton = document.getElementById('authorize-button');

    if (authResult && !authResult.error) {
        authorizeButton.style.visibility = 'hidden';
        makeApiCall();
    }
    else {
        authorizeButton.style.visibility = '';
        authorizeButton.onclick = handleAuthClick;
    }
}

function handleAuthClick(event) {
    gapi.auth.authorize({client_id: clientId, scope: [scopes], immediate: false}, handleAuthResult);
    return false;
}

function makeApiCall() {
    gapi.client.load('drive', 'v2', null);
}

function makeRequest()
{
    var request = gapi.client.request({
        'path': '/drive/v2/files',
        'method': 'GET',
        'params': {'maxResults': '1'}
    });

    request.execute(function(resp) {
        /!*for (i=0; i<resp.items.length; i++) {
            var titulo = resp.items[i].title;
            var fechaUpd = resp.items[i].modifiedDate;
            var userUpd = resp.items[i].lastModifyingUserName;
            var userEmbed = resp.items[i].embedLink;
            var userAltLink = resp.items[i].alternateLink;

            var fileInfo = document.createElement('li');
            fileInfo.appendChild(document.createTextNode('TITLE: ' + titulo + ' - LAST MODIF: ' + fechaUpd + ' - BY: ' + userUpd ));
            document.getElementById('content').appendChild(fileInfo);
        }*!/
        console.log(resp.items.length);
    });

    console.log(makeRequest());
}

*/
import {JSO, Popup} from 'jso-master'

let client = new JSO({
    providerID: "google",
    client_id: "803126468441-1674nab3bkjslss6vbontq47629b197l.apps.googleusercontent.com",
    authorization: "https://accounts.google.com/o/oauth2/auth",
    scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}

})
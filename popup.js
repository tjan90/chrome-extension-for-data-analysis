
x = '';
a='';

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('btn1');
    checkPageButton.addEventListener('click', function() {
        _AuthWithClientID()
        alert('after function run');
    })
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "hello")
            chrome.storage.local.get(null, function(result){
                console.log(result);
                 a = windowOpen(result.links, result.id, null)
                //var json_array = JSON.parse(result.array);
                //ElementPriceWithHierarchy(json_array,result.depth)
            })
        sendResponse({farewell: "price: "+a});

    });
//chrome.storage.local.get(['links','id','counter','pr_price'],function(result) {

/*
chrome.storage.local.get(null,function(result) {
    alert(JSON.stringify(result));


    chrome.storage.local.get('[visit_link]',function(res){
            return res;
    });
    //chrome.storage.local.get('visit_link')
    //alert('before if : '+a);

    alert(r);

    if ( r === 'undefined' || r !== result.links) {
        chrome.storage.local.set({'visit_links': result.links});

       // alert(a);

    windowOpen(result.links, result.id, result.pr_price)

}

});


function getStorageValueBykey(theKey){
    var r;
    chrome.storage.local.get('visit_link',function(res){

    });
}
*/

/*
if(links!== undefined || ' ') {
var win = window.open(links, '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
    alert(links+'----- inside window');
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
    }
}*/
/*
if(links!= '') {
    var price_check = $(id).innerText;
}
*/

console.log('extension Loaded-0.1');

/*chrome.storage.local.get({'checkbox': value},function(result){
   console.log('checkbox value is '+result.value);
});*/
/*$(this).click(function (){
    console.log('hi')
});*/

/*$("*").on('dblclick',function(e) {
    if (document.getElementById('trace').checked) {
        alert("checked 2");

    }
});*/
/*function getCurrentTabUrl(callback){
    var queryinfo = {active:true,currentWindowId:true};
    chrome.tabs.query(queryinfo,function (tabs) {
        var tab = tabs[0];
        var url = tab.url;
        callback(url);
        console.log(url);
    })
}*/
//Working code for alerting URL/////////////////////////////////////////////////////////
/*

console.log('start');
document.addEventListener('DOMContentLoaded', function() {
     var checkPageButton = document.getElementById('btn1');
    checkPageButton.addEventListener('click', function() {
    alert('before condition check');

    var queryinfo = {active:true,currentWindowId:true};
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

            // since only one tab should be active and in the current window at once
            // the return variable should only have one entry
            var activeTab = tabs[0];
            var activeTabId = activeTab.url; // or do whatever you need
            alert(activeTabId);


            chrome.storage.local.get(['links'], function(result) {
                alert('Value of URL currently is ' + result.links);
            });
            chrome.storage.local.get(['id'], function(result) {
                alert('Value ID currently is ' + result.id);

            });


        });

    var trace = document.getElementById('trace');
        if(document.querySelector('#trace').checked){
            value = 'checked'
            alert('Trace Enable');
            chrome.storage.local.set({'checkbox': value},function(){
            console.log('checked values is checked'+ value);
        });
        }
        else {
            value = 'unchecked';
            alert('trace disable');
            chrome.storage.local.set({'checkbox': value},function(){
               console.log('value changed to unchecked');
            });

        }
     },false);
 }, false);
*/

//code for storing Variable

/*
chrome.storage.local.set({tracekey: value}, function() {
    console.log('Value is set to ' + value);
});

chrome.storage.local.get(['tracekey'], function(result) {
    console.log('Value currently is ' + result.key);
});*/



/*
$('input[type="checkbox"]').change(function() {
    alert('aaa');
});*/



// window.addEventListener("load", function(event) {
//     console.log("NEW")
//     console.log(document.getElementsByClassName('_f3l').length);
// });


/*
console.log("extension loaded");
    var x = document.querySelectorAll('._f3l, ._3fcx, ._4x3g');
console.log(x);
    for (var i = 0; i < 10; i++) {
        //console.log("xxxx");
        console.log(x);
    }
*/



/*var checkPageButton = document.getElementById('btn');
console.log(checkPageButton.innerHTML);*/
/*checkPageButton.addEventListener('click', function() {}
*/

console.log("extension loaded-0.2.0");
//let price = document.querySelectorAll("._f3l, ._3fcx, ._4x3g");
// let price = document.querySelectorAll("._f3l");
// console.log(price);
//$( document ).ready(function() {
//     console.log( "ready!" );
//     $(".SECONDARY_INFO").click(function (){
//         //$(this).css("color","#FF00FF");
//         alert('clicked');
//         });
//     var pr = $("._f3l._3fcx._4x3g").text(function (){
//         //$(this).css("color","#FF00FF");
//         console.log()
//     });
//     console.log("yellow");


//Data Retrieval facebook Marketplace/////////////////////////////////////////////////////
/*function defer(method) {
    if ($("section._7yd._4e37 > div > div").length !== 0) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 1000);
    }
}

let callback = () => {
    let price = document.getElementsByClassName('_f3l _3fcx _4x3g');
    let name = document.getElementsByClassName('_2tux _214v');

    for(elt in price,name){
    console.log(price[elt].innerHTML +'-'+name[elt].innerHTML);
    }
    };
defer(callback);

});*/

/*
$(".btn").click(function () {
    console.log("??");
});

var button  = document.getElementsByClassName('btn');
button.addEventListener('click', function () {
    console.log('?????');
});
*/

//working code for EBAY//////////////////////////////////////////////////////
/*$( document ).ready(function() {
    var price = $(".s-item_price").text();
    console.log(price);

    var splitted = price.split('$');
    console.log(splitted);

});*/

//Click Trace function



/*
var aNode = prices[0];
 console.log("STARTING REZA")
 console.log(prices);
console.log(prices.length);
console.log(aNode.innerHTML)
console.log(prices.values);

for(let i=0; i<10; i++) {
 let tag = price[2].innerHTML;
console.log("xxxxxx");
 console.log(prices[i].value);
console.log(prices[i]);
 }
*/

//
// var notes = null;
// for (var i = 0; i < prices.childNodes.length; i++) {
//     console.log('first ');
//     if (prices.childNodes[i].className == "_f3l") {
//         console.log('second ');
//         notes = prices.childNodes[i];
//         break;
//     }
// }

/*document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('btn');
    checkPageButton.addEventListener('click', function() {
        $(this).find("p").each(function(){
            $(this).on( 'click', function () {
                var id  = $(this).attr("class");
                alert(id);
            });
        });
    }, false);
}, false);

$(this).find("div","p","span","strong").each(function(){
    $(this).on( 'click', function () {
        var id  = $(this).innerText();
        console.log(id);
    });
});*/

/*var tab;
var url;

function url(){

chrome.tabs.query({active:true, currentWindow:true},function (tabs){
    tab = tabs[0];
    url = tab.url;
    //alert(url);
});
}

url();*/
//Alerts Clicked tag class name

//let btn = document.getElementsByClassName('btn');
//$(btn).click(function(){
//    console.log('btn click func')
/*function setCookie(link, price) {
    var d = new Date();
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}*/

//Working Code for getting prices with Currency Signs//////////////////////////////////

//$(this).click(function(e) { //this keyword gaves undefined data type
/*$("div,p,span,section,h1,h2,h3,h4,h5,h6,strong,font").click(function(e) {
        var tag = document.getElementsByTagName(this);
        var myClass = this.className;//innerText works but its get all the text inside div

        var price = this.innerText;
        var href= $(location).attr('href');
        e.stopPropagation();//stops alerting link of all tags
        //alert("Link : "+href+"-\n price : "+price);
        //console.log('link :'+href+'\nprice :'+price);
        //document.cookie = "link="+href+";price ="+price+";";
    if(price.indexOf('€')>=0 && price.indexOf('€')<=2 || price.indexOf('$')>=0 && price.indexOf('$')<=2){
        console.log('link :'+href+'\nprice :'+price);
    }else{
        console.log('Error retireving prices. Please Select the exact price tag for the product');
    }

    });
*/

//});
//jQuery Link Retrieval
/*
var href= $(location).attr('href');
alert(href);*/

//Getting data with text selection.///////////////////////////////////////////
/*var text;
$("div,p,span,section,h1,h2,h3,h4,h5,h6,strong,font").dblclick(function(e) {
    e.stopPropagation();
    //console.log('clicked double');
    if(document.getSelection){
        text = document.getSelection().toString();
        console.log(text);
    }
    else{
        console.log('no selection made');
    }
});*/

//get Child ID with tag name and its parent tag and ID
var text = '';
$("*").on('dblclick',function(e) {
//$(this).dblclick(function(e) {
    var parent_tag, parent_tag_id, child_tag, child_tag_id, child_tag_class,parent_tag_class = '';
    e.stopPropagation();
    //text = $(e.target.tagName).toString();


    if(document.getSelection){
        child_tag = this.tagName;
        child_tag_id = $(this).attr('id');
        child_tag_class = $(this).attr('class');
        //var child_tag_id = $(this).tag
        //var child_tag_id2 = child_tag_id.attr('class');
        //var child_tag_id =

        parent_tag_id = $(this).closest(child_tag).attr('id');
        /* if(parent_tag_id == undefined){
             parent_tag_id = $(this).closest(child_tag).attr('class');
         }*/
        parent_tag_class  = $(this).closest(child_tag).attr('class');
        parent_tag = $(this).closest(child_tag).prop('tagName');

        //console.log(parent_tag+"- parent tag \n");
        //console.log(child_tag+"- child tag");

        var nodes= document.querySelectorAll('#'+parent_tag_id+' > *');
        var ptag = "#"+parent_tag_id;
        var body = document.getElementsByTagName('body');
        //get depth b/w the two tags
        var depth = $(this,body).parents('*').length;
        //get index of the child
        var position = $(this).parent(parent_tag_id).children().index(this);
        //.parents returns HTML collection
        var p = $(this).parents('*').not('html').length;
        var p_current = $(this).index(this);
        var index = $(this).parent().index();
        var parent_class = $(this).parent().attr('class');
        var Grand_index = $(this).parent().parent().index();
        var Grand_class = $(this).parent().parent().attr('class');
        //var a = $(this).parent.childElementCount;
        var product = $(this).closest(' li').index();
        var parents = $(this).parents().index();


        console.log('current index: '+p_current);
        console.log('depth : '+depth);
        console.log(child_tag_id+"- child tag ID -\n"+child_tag_class+"Child Tag Class");
        console.log(parent_tag_id+"- parent tag ID\n");
        console.log(parent_tag_class+' : parent tag class');
        console.log('product index: '+product);
        console.log('parent index : '+index);
        console.log('parent class: '+parent_class);
        console.log('Grand parent index: '+Grand_index);
        //    console.log('Grand Parent Class: '+Grand_class);
        console.log('parents : '+parents);

// Array of all the parent indexes////////////////////////////////////////////////
        // if equal sign of wrote with depth then the last element is -1
        var array = [];
        var array_tag = [];
        for(var i = 0 ; i < depth ; i++) {
            var index_parent = $(this).parents().eq(i).index();
            array[i] = index_parent;
            //console.log(array[i]);
        }// end of for loop////
        console.log(array);
        var reversed_array = array.reverse();
        var parent_node = $('html').children().eq(1);
        var temp = $('body').children().eq(13);

// Looping all the array elements for getting exact child nodes from Body till Price
        /*for(var i = 2; i<depth; i++)
        {
             var child_node = parent_node.children().eq(reversed_array[i]);
            parent_node = child_node;
            var check_id = parent_node.prop('id')
            var check_class = parent_node.prop('class');
            console.log('id: '+check_id+'\nclass'+check_class);

        }*/
        //console.log($(parent_node).text()+'outside of Loop');
        //testing conditional statments
        //var temp2 = '#product_info';
        /*if( check_id == '' || check_id == undefined || check_id == null){
            console.log($('.'+check_class).text().toString());
        }else{
            console.log($('#'+check_id).text().toString());
        }*/

        var children = $(body).children().length;
        console.log('total number of children:  '+children);
        /*for(var i=0;i< depth; i++)
        {
            var body_children = $(body[0]).children(i).children().length;
            console.log(body_children);
        }*/

        //var a = $('body').children().indexOf(0).children();
        //console.log();
        var URL = $(location).attr('href');
        /*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            var activeTabId = activeTab.url;
            console.log(activeTabId);

        });
*/

//        var product_price = document.getElementById(parent_tag_id).innerText;
        var product_price_cl = null;
        //if(child_tag_id == undefined){
        product_price_cl = $(parent_node).prop('id');
        //}
        //var product_price_cl = document.getElementsByClassName(parent_tag_class);
        //console.log(product_price_cl.innerText);
        //console.log(product_price.split('€'));
        //console.log('product price : '+product_price_cl);
        //index items not accurate becuase of Data Index specified in some sites.
        //var sp_price = product_price_cl[product];
        //console.log(hasDigitFind(sp_price));
        //console.log(sp_price);
        var json_array = JSON.stringify(array);
        chrome.storage.local.set({'links': URL, 'id': product_price_cl, 'array': JSON.stringify(array),'depth':depth});
        /*chrome.storage.local.set({'pr_price': product_price_cl});
        chrome.storage.local.set({'id': parent_tag_id});
        chrome.storage.local.set({'counter': 1});
        */chrome.storage.local.get(null, function(result) {
            console.log('Value of URL currently is ' + result.links+'\n Id: '+result.id+'\n Array: '+result.array);
            //console.log(result.pr_price);
        });




        //alert('link: '+URL+'- id : '+parent_tag_id);
    }
    else{
        console.log('no selection made');
    }
});
//Function call for Opening Link and getting price in new tab///////////////////////////////////

function windowOpen(link, id, pr_price) {
    var win = window.open(link, '_blank')
    var price_return_storage = '';
    win.focus();
    chrome.storage.local.get(null, function(result){
        price_return_storage = ElementPriceWithHierarchy(JSON.parse(result.array), result.depth)
        console.log('This is returned price\n'+price_return_storage);
        console.log(result)
        win.alert(price_return_storage);
        return price_return_storage;
    })


   /* if(win){//win.alert(link+'xxx this is the link')
        //alert(link+'xxx this is the link');
        var price = document.getElementById(id).innerText;
        //win.alert('previous price : '+pr_price+'\ncurrent price : '+price);
        var sp_price = price.split('€');
        var sp_pr_price = pr_price.split('€');
        //win.alert(sp_price+'\n'+sp_pr_price);
        if(price.toString()=== pr_price.toString()){
            alert('price unchanged');
        }
        win.console.log(price+' previous price');
    }*/
    //win.alert(price+'')


};

function hasDigitFind(_str_) {
    this._code_ = 10;  /*When empty string found*/
    var _strArray = [];

    if (_str_ !== '' || _str_ !== undefined || _str_ !== null) {
        _strArray = _str_.split('');
        for(var i = 0; i < _strArray.length; i++) {
            if(!isNaN(parseInt(_strArray[i]))) {
                this._code_ = -1;
                break;
            } else {
                this._code_ = 1;
            }
        }

    }
    return this._code_;
}

//Function for getting Element tag name
/*
$("*").on('dblclick',function(evt) {
    evt.stopPropagation();
    alert(evt.target.tagName);
})
*/

//function for getting the depth///////////////////////////////////
/*
var depth = $("#my-element","#ContextContainerID").parents("ul").length;
*/

function ElementPriceWithHierarchy(array, depth){
    console.log(array);
    //var reversed_hierarchy = array.reverse();
    //console.log('Reversed hierarchy\n'+array);
    var parent_node = $('html').children().eq(1);
    console.log('Parent Node:\n'+parent_node.prop('tagName'))
    //var temp = $('body').children().eq(13);

// Looping all the array elements for getting exact child nodes from Body till Price
    for(var i = 2; i<depth; i++)
    {
        var child_node = parent_node.children().eq(array[i]);
        parent_node = child_node;
        console.log('id: '+parent_node.prop('id')+'\nclass: '+parent_node.prop('class'));
    }
    //Set the price in local storage so it can be accessed in backgorund
    var price_return = $(parent_node).text()
    chrome.storage.local.set({'price':price_return})

    return price_return;
}

function _AuthWithClientID(){
    //let _clientID_input = document.getElementById('trace');
    let _clientID_Text = '803126468441-1674nab3bkjslss6vbontq47629b197l.apps.googleusercontent.com';
    //alert(_clientID_Text);
    let _JSOClient = new jso.JSO({
        providerID: "google",
        client_id: _clientID_Text,
        redirect_uri: "http://localhost:8080/",
        authorization: "https://accounts.google.com/o/oauth2/auth",
        scopes: { require: ["https://www.googleapis.com/auth/userinfo.profile"],
                  request: ["https://www.googleapis.com/auth/userinfo.profile"]}
    })

    _JSOClient.callback();

    let _JSOtoken = _JSOClient.checkToken();
    alert('_JSOToken:  '+_JSOtoken);
    if(_JSOtoken == null) {
        _JSOtoken = _JSOClient.getToken({
            scopes: {
                request: ["profile"],
                require: ["profile"]
            }
        });
    }
    alert(_JSOClient.checkToken());

}


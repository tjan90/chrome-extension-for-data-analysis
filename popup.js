

chrome.storage.local.get(['links','id','counter','pr_price'],function(result) {
    console.log(result.counter);
    if (result.counter === 1) {

    windowOpen(result.links, result.id, result.pr_price)
      chrome.storage.local.remove(['counter'],function(result){
            console.log(result.counter);
      });

}

});


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
    var parent_tag, parent_tag_id, child_tag, child_tag_id, child_tag_class = '';
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
        parent_tag = $(this).closest(child_tag).prop('tagName');
        console.log(parent_tag_id+"- parent tag ID\n");
        //console.log(parent_tag+"- parent tag \n");
        //console.log(child_tag+"- child tag");
        console.log(child_tag_id+"- child tag ID -\n"+child_tag_class+"Child Tag Class");
        var nodes= document.querySelectorAll('#'+parent_tag_id+' > *');
        var ptag = "#"+parent_tag_id;
        var body = document.getElementsByTagName('body');
        //get depth b/w the two tags
        var depth = $(this,body).parents('*').length;
        console.log('depth : '+depth);
        //get index of the child
        var position = $(this).parent(parent_tag_id).children().index(this);
        console.log("position of child : "+position);
        //.parents returns HTML collection
        var p = $(this).parents('*').not('html').length;
        var p_current = $(this).index(this);
        console.log('current index: '+p_current);
        var index = $(this).parent().index();
        var parent_class = $(this).parent().attr('class');
        var Grand_index = $(this).parent().parent().index();
        var Grand_class = $(this).parent().parent().attr('class');
        //var a = $(this).parent.childElementCount;
        var product = $(this).closest(' li').index();
        var parents = $(this).parents().index();


        console.log('product index: '+product);
        console.log('parent index : '+index);
        console.log('parent class: '+parent_class);
        console.log('Grand parent index: '+Grand_index);
    //    console.log('Grand Parent Class: '+Grand_class);
        console.log('parents : '+parents);

// Array of all the parent indexes////////////////////////////////////////////////
        // if equal sign of wrote with depth then the last element is -1
        var array = [];
        for(var i = 0 ; i < depth ; i++) {
            var index_parent = $(this).parents().eq(i).index();
            array[i] = index_parent;
            //console.log(array[i]);
        }// end of for loop////
        console.log(array);

        //var a = $('body').children().indexOf(0).children();
        //console.log();
        var URL = $(location).attr('href');
        /*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab = tabs[0];
            var activeTabId = activeTab.url;
            console.log(activeTabId);

        });
*/
        var product_price = document.getElementById(parent_tag_id).innerText;
        console.log('product price : '+product_price);

        chrome.storage.local.set({'links': URL});
        chrome.storage.local.set({'pr_price': product_price});
        chrome.storage.local.set({'id': parent_tag_id});
        chrome.storage.local.set({'counter': 1});

        chrome.storage.local.get(['links','id','counter','pr_price'], function(result) {
            console.log('Value of URL currently is ' + result.links+'\n id of the element'+result.id+'\n counter value: '+result.counter);
            console.log(result.pr_price);
        });


        alert('link: '+URL+'- id : '+parent_tag_id);
    }
    else{
        console.log('no selection made');
    }
});
//Function call for Opening Link and getting price in new tab///////////////////////////////////
function windowOpen(link, id, pr_price) {
    var win = window.open(link, '_blank')
    win.focus();
    //win.alert(link+'xxx this is the link')
    //alert(link+'xxx this is the link');
 /*   var price = document.getElementById(id).innerText;
    if(price==pr_price){
        alert('price unchanged');
    }
    win.console.log(price+' previous price');*/

    //win.alert(price+'')

};

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


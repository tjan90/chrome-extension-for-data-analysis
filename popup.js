console.log('extension Loaded-0.1')
/*function getCurrentTabUrl(callback){
    var queryinfo = {active:true,currentWindowId:true};
    chrome.tabs.query(queryinfo,function (tabs) {
        var tab = tabs[0];
        var url = tab.url;
        callback(url);
    })
}*/
//Working code for alerting URL/////////////////////////////////////////////////////////
/*
console.log('start');
document.addEventListener('DOMContentLoaded', function() {
     var checkPageButton = document.getElementById('btn');
     checkPageButton.addEventListener('click', function() {
    //alert("Button Check1.1");
    //chrome.tabs.getSelection(null,function(tabs){
      chrome.tabs.query({active:true, currentWindow:true},function(tabs){
          var tab = tabs[0];
          var url = tab.url;
          alert(url);
          let price = document.querySelectorAll("._f3l, ._3fcx, ._4x3g");
          alert(price);
         // var play = document.getElementsByClassName('playbackSoundBadge__title');
          //alert(play);
      });
     }, false);
     // alert('Extension Check');
 }, false);
*/


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

console.log("extension loaded-0.2");
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
var text;
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
        //console.log(child_tag_id+"- child tag ID -\n"+child_tag_class+"Child Tag Class");
        var nodes= document.querySelectorAll('#'+parent_tag_id+' > *');

        for(var i = 0 ; i < nodes.length ; i++) {
            nodes[i].lastElementChild.innerText;
        }
            }
    else{
        console.log('no selection made');
    }
});
//Function for getting Element tag name
/*$("*").on('dblclick',function(evt) {
    evt.stopPropagation();
    alert(evt.target.tagName);
})*/

var nodes= document.querySelectorAll('#offerPrice_256516');

for(var i = 0 ; i < nodes.length ; i++) {
    nodes[i].childNodes;
    }



console.log('background running');
chrome.browserAction.onClicked.addListener(function (){
    console.log('background event triggered')

    chrome.storage.local.get(null,function(result) {
        //console.log(JSON.stringify(result));
        console.log(result);

        //console.log(result.array);
        var json_array = JSON.parse(result.array);
        for(let i = 0; i<json_array.length; i++){
            console.log(json_array[i])
        }

        console.log(json_array.length)
        chrome.tabs.create({url: result.links, selected: false}, function(){
            //var body = document.getElementsByTagName('body');
           $(document).ready(function () {
               var parent_node = $('html').children().eq(1);
               console.log(parent_node);
               //var depth = $(this,body).parents('*').length;
               console.log(result.depth)
               for(var i = 2; i<result.depth; i++)
               {
                   var child_node = parent_node.children().eq(json_array[i]);
                   parent_node = child_node;
                   var check_id = parent_node.prop('id')
                   var check_class = parent_node.prop('class');
                   console.log('id: '+check_id+'\nclass'+check_class);

               }
               console.log($(parent_node).text()+'outside of Loop');
           });
           })


        /* for (let i =0; i<json_array.length; i++){
             console.log(json_array[i]);
         }*/


    });
})

import {popHTML} from './pop';
import {nytGetApi} from './apicall';

// the app.js file is the connecting file it is called from the HTML by on change function
//

$('#dropDown').change(function(){
    var choice = $('#dropDown').val();//getting the value that changed in the dropdown
    var url = "https://api.nytimes.com/svc/topstories/v2/"+choice+".json"; //inserting the url and the change
    url += '?' + $.param({
    'api-key': "bc26c8e91bf445e388e87441a3b3219d"
    });//concatinating the key to connect to the url

    let prom = nytGetApi(url); //calling withe the url paraneter to the nytGetApi (apicall-file) func with the url and using a promise
    prom.then(function(result){//
    //console.log(result);
    popHTML(result);// calling a fonction to populate the html from file pop
    });
});

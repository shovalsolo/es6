(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});


//a promise func that getting the url and returning result from tha ajax request or error

var nytGetApi = exports.nytGetApi = function nytGetApi(url) {
	//reciving url parameter with key and link
	return new Promise(function (resolve, reject) {
		//using a promise

		$.ajax({
			url: url,
			method: 'GET'
		}).done(function (result) {
			$(".article").remove(); //removing old results form old select
			resolve(result); //returning result from successful request
		}).fail(function (err) {
			//returning error for unsuccessful request
			reject(err);
		});
	});
};

},{}],2:[function(require,module,exports){
'use strict';

var _pop = require('./pop');

var _apicall = require('./apicall');

// the app.js file is the connecting file it is called from the HTML by on change function
//

$('#dropDown').change(function () {
    var choice = $('#dropDown').val(); //getting the value that changed in the dropdown
    var url = "https://api.nytimes.com/svc/topstories/v2/" + choice + ".json"; //inserting the url and the change
    url += '?' + $.param({
        'api-key': "bc26c8e91bf445e388e87441a3b3219d"
    }); //concatinating the key to connect to the url

    var prom = (0, _apicall.nytGetApi)(url); //calling withe the url paraneter to the nytGetApi (apicall-file) func with the url and using a promise
    prom.then(function (result) {
        //
        //console.log(result);
        (0, _pop.popHTML)(result); // calling a fonction to populate the html from file pop
    });
});

},{"./apicall":1,"./pop":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.popHTML = popHTML;

var _apicall = require("./apicall");

function popHTML(result) {
	var res = result.results;
	var count = 1;

	for (var i = 0; i < res.length; i++) {
		//console.log(res);
		if (count <= 12) {

			if (res[i].multimedia.length > 0) {

				$(".select-section").addClass("minifed");

				var artAbs = res[i].abstract; //
				var artImg = res[i].multimedia[4].url; //saving image
				var artLink = res[i].url;

				var newElement = document.createElement("div");

				$(newElement).css("background", "url(" + artImg + ")");

				$(newElement).append("<a class='artLink font-open-sans-lig' href=" + artLink + ">" + artAbs + "</a>");
				$(newElement).addClass("dt-art tab-art article min-height flex flex-ali-end size-test");
				$("body").append(newElement);
				count++;
			}
		} else {
			break;
		}
	}
}

},{"./apicall":1}]},{},[2]);

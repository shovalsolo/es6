import {apiget} from './apicall';

export function popHTML(result){
  var res = result.results;
  var count = 1;

	  for(var i=0; i< res.length;i++){
	  	//console.log(res);
		if (count<=12) {

		  	if (res[i].multimedia.length>0) {

			  $(".select-section").addClass("minifed");
			  
			  var artAbs = res[i].abstract; //
			  var artImg = res[i].multimedia[4].url; //saving image
			  var artLink = res[i].url;

			  var newElement = document.createElement("div");
			  
			  $(newElement).css("background", "url("+artImg+")");

			  $(newElement).append("<a class='artLink font-open-sans-lig' href="+artLink+">"+artAbs+"</a>");
			  $(newElement).addClass("dt-art tab-art article min-height flex flex-ali-end size-test");
			  $("body").append(newElement);
			  count++;
		  }
		}else{
			break;
		}

	}
}
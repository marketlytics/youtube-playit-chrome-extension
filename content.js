// iframes
var iframes = document.getElementsByTagName("iframe"); //array
var regex = /youtube\.com\/(embed|v|watch)\/([\d\w]+)(.*)/i;
for (var i=0,imax=iframes.length; i<imax; i++) {
  if(iframes[i].src.indexOf("youtube.com/") !== -1 ){
  	iframes[i].src = iframes[i].src.replace(regex,"playit\.pk/embed\?v=$2");
  }	 
}

// embeds
var embeds = document.getElementsByTagName("embed"); //array
for (var i=0,imax=embeds.length; i<imax; i++) {
	if(embeds[i].src.indexOf("youtube.com/") !== -1 ){
  	embeds[i].src = embeds[i].src.replace(regex,"playit\.pk/embed\?v=$2");
  } 	
}

// links
var links = document.getElementsByTagName("a"); //array
var regexL = /youtube\.com\/(watch|embed|v)\?v=(.+)$/i;
for (var i=0,imax=links.length; i<imax; i++) {
	if(links[i].src.indexOf("youtube.com/") !== -1 ){
  	links[i].href = links[i].href.replace(regexL,"playit\.pk/$1\?v=$2");
  }
}

console.log("All Youtube links have now been replaced with Playit.pk :D");
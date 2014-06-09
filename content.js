// iframes
var iframes = document.getElementsByTagName("iframe"); //array
var regex = /youtube\.com\/(embed|v|watch)\/([\d\w]+)(.*)/i;
for (var i=0,imax=iframes.length; i<imax; i++) {
   iframes[i].src = iframes[i].src.replace(regex,"playit\.pk/embed\?v=$2");
}

var embeds = document.getElementsByTagName("embed"); //array
for (var i=0,imax=embeds.length; i<imax; i++) {
   embeds[i].src = embeds[i].src.replace(regex,"playit\.pk/embed\?v=$2");
}

// Links
var links = document.getElementsByTagName("a"); //array
var regexL = /youtube\.com\/(watch|embed|v)\?v=(.+)$/i;
for (var i=0,imax=links.length; i<imax; i++) {
   links[i].href = links[i].href.replace(regexL,"playit\.pk/$1\?v=$2");
}

console.log("All Youtube links have now been replaced with Playit.pk :D");
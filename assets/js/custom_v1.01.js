/* ------------------------------------------------ */
// notification for old browsers
var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,unsupported:true,api:5};
function $buo_f(){
 var e = document.createElement("script");
 e.src = "//browser-update.org/update.min.js";
 document.body.appendChild(e);
};
try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
catch(e){window.attachEvent("onload", $buo_f)}

/* ------------------------------------------------ */
// Instafeed JS (thanks to Rodrigo Cruz https://codepen.io/rodrigo-cruz-the-sasster/pen/vvoMVZ)

var userFeed = new Instafeed({
  get: 'user',
  userId: '4483589266',
  accessToken:  '4483589266.1677ed0.d02758a8caa14999ba226d4716d70e3e',
  resolution: 'standard_resolution',
  template: '<div class="img-gallery col-md-6 col-lg-4 col-xl-3"><div class="img-container d-flex justify-content-center align-items-center"><a class="img-inside" href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div></div>',
  sortBy: 'most-recent',
  limit: 12,
  links: false
});
userFeed.run();

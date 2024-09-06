/*------------------------------------
 * Theme: Wayfx - Heart & Soil
 * File: Main theme scripts file
 * Author: Wayfx
 * URI: https://wayfx.com/
 *------------------------------------
 */

import '@splidejs/splide/css';
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Grid } from '@splidejs/splide-extension-grid';

/*! lazysizes - v5.2.2 */
// prettier-ignore
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,a=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,l=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function(e,t){if(!i[t]){i[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return i[t].test(e[$]("class")||"")&&i[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var i;if(i=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(i," "))}},V=function(t,i,e){var a=e?P:"removeEventListener";if(e){V(t,i)}r.forEach(function(e){t[a](e,i)})},X=function(e,t,i,a,r){var n=D.createEvent("Event");if(!i){i={}}i.instance=k;n.initEvent(t,!a,!r);n.detail=i;e.dispatchEvent(n);return n},Y=function(e,t){var i;if(!a&&(i=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}i({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,i){i=i||e.offsetWidth;while(i<H.minSize&&t&&!e._lazysizesWidth){i=t.offsetWidth;t=t.parentNode}return i},ee=function(){var i,a;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;i=true;a=false;while(e.length){e.shift()()}i=false};var e=function(e,t){if(i&&!t){e.apply(this,arguments)}else{n.push(e);if(!a){a=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(i,e){return e?function(){ee(i)}:function(){var e=this;var t=arguments;ee(function(){i.apply(e,t)})}},ie=function(e){var i;var a=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){i=false;a=f.now();e()};var s=l&&n>49?function(){l(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(i){return}i=true;t=r-(f.now()-a);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ae=function(e){var t,i;var a=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-i;if(e<a){I(n,a-e)}else{(l||r)(r)}};return function(){i=f.now();if(!t){t=I(n,a)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var N=0;var M=-1;var x=function(e){N--;if(!e||N<0||!e.target){N=0}};var W=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var S=function(e,t){var i;var a=e;var r=W(e);g-=t;b+=t;p-=t;C+=t;while(r&&(a=a.offsetParent)&&a!=D.body&&a!=O){r=(Z(a,"opacity")||1)>0;if(r&&Z(a,"overflow")!="visible"){i=a.getBoundingClientRect();r=C>i.left&&p<i.right&&b>i.top-1&&g<i.bottom+1}}return r};var t=function(){var e,t,i,a,r,n,s,l,o,u,f,c;var d=k.elements;if((h=H.loadMode)&&N<8&&(e=d.length)){t=0;M++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(l=d[t][$]("data-expand"))||!(n=l*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&N<1&&M>2&&h>2&&!D.hidden){w=f;M=0}else if(h>1&&M>1&&N<6){w=u}else{w=_}}if(o!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;o=n}i=d[t].getBoundingClientRect();if((b=i.bottom)>=s&&(g=i.top)<=z&&(C=i.right)>=s*c&&(p=i.left)<=y&&(b||C||p||g)&&(H.loadHidden||W(d[t]))&&(m&&N<3&&!l&&(h<3||M<4)||S(d[t],n))){R(d[t]);r=true;if(N>9){break}}else if(!r&&m&&!a&&N<4&&M<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!l&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){a=v[0]||d[t]}}if(a&&!r){R(a)}}};var i=ie(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,L);X(t,"lazyloaded")};var a=te(B);var L=function(e){a({target:e.target})};var T=function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}};var F=function(e){var t;var i=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(i){e.setAttribute("srcset",i)}};var s=te(function(t,e,i,a,r){var n,s,l,o,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(a){if(i){K(t,H.autosizesClass)}else{t.setAttribute("sizes",a)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){l=t.parentNode;o=l&&j.test(l.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||o);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(x,2500);V(t,L,true)}if(o){G.call(l.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!o){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||o)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,"ls-is-cached")}B(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){N--}},true)});var R=function(e){if(e._lazyRace){return}var t;var i=n.test(e.nodeName);var a=i&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=a=="auto";if((r||!m)&&i&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;N++;s(e,t,r,a,i)};var r=ae(function(){H.loadMode=3;i()});var l=function(){if(H.loadMode==3){H.loadMode=2}r()};var o=function(){if(m){return}if(f.now()-e<999){I(o,999);return}m=true;H.loadMode=3;i();q("scroll",l,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",i,true);q("resize",i,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(i).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",i,true);O[P]("DOMAttrModified",i,true);setInterval(i,999)}q("hashchange",i,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,i,true)});if(/d$|^c/.test(D.readyState)){o()}else{q("load",o);D[P]("DOMContentLoaded",i);I(o,2e4)}if(k.elements.length){t();ee._lsFlush()}else{i()}},checkElems:i,unveil:R,_aLSL:l}}(),re=function(){var i;var n=te(function(e,t,i,a){var r,n,s;e._lazysizesWidth=a;a+="px";e.setAttribute("sizes",a);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",a)}}if(!i.detail.dataAttr){Y(e,i.detail)}});var a=function(e,t,i){var a;var r=e.parentNode;if(r){i=s(e,r,i);a=X(e,"lazybeforesizes",{width:i,dataAttr:!!t});if(!a.defaultPrevented){i=a.detail.width;if(i&&i!==e._lazysizesWidth){n(e,r,a,i)}}}};var e=function(){var e;var t=i.length;if(t){e=0;for(;e<t;e++){a(i[e])}}};var t=ae(e);return{_:function(){i=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});

/*---------------------------------------
 * Detect User Agent Script
 * http://cssuseragent.org
 *----------------------------------------
 * This is by far the best detection script I've found.
 * Using javascript means that this will work with caching. W00t.
 *
 * Adds user agent classes to the <html> element on your page including OS
 * and browser version.
 *
 */
// prettier-ignore
var cssua=function(n,l,p){var q=/\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,r=/([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,s=/\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,t=/\bsilk-accelerated=true\b/,u=/\bfluidapp\b/,v=/(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,w=/(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,
    x=/(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,k={parse:function(b,d){var a={};d&&(a.standalone=d);b=(""+b).toLowerCase();if(!b)return a;for(var c,e,g=b.split(/[()]/),f=0,k=g.length;f<k;f++)if(f%2){var m=g[f].split(";");c=0;for(e=m.length;c<e;c++)if(q.exec(m[c])){var h=RegExp.$1.split(" ").join("_"),l=RegExp.$2;if(!a[h]||parseFloat(a[h])<parseFloat(l))a[h]=l}}else if(m=g[f].match(r))for(c=0,e=m.length;c<e;c++)h=m[c].split(/[\/\s]+/),h.length&&"mozilla"!==h[0]&&(a[h[0].split(" ").join("_")]=h.slice(1).join("-"));
    w.exec(b)?(a.mobile=RegExp.$1,s.exec(b)&&(delete a[a.mobile],a.blackberry=a.version||RegExp.$3||RegExp.$2||RegExp.$1,RegExp.$1?a.mobile="blackberry":"0.0.1"===a.version&&(a.blackberry="7.1.0.0"))):x.exec(b)?(a.game=RegExp.$1,c=a.game.split(" ").join("_"),a.version&&!a[c]&&(a[c]=a.version)):v.exec(b)&&(a.desktop=RegExp.$1);a.intel_mac_os_x?(a.mac_os_x=a.intel_mac_os_x.split("_").join("."),delete a.intel_mac_os_x):a.cpu_iphone_os?(a.ios=a.cpu_iphone_os.split("_").join("."),delete a.cpu_iphone_os):a.cpu_os?
    (a.ios=a.cpu_os.split("_").join("."),delete a.cpu_os):"iphone"!==a.mobile||a.ios||(a.ios="1");a.opera&&a.version?(a.opera=a.version,delete a.blackberry):t.exec(b)?a.silk_accelerated=!0:u.exec(b)&&(a.fluidapp=a.version);a.edge&&(delete a.applewebkit,delete a.safari,delete a.chrome,delete a.android);if(a.applewebkit)a.webkit=a.applewebkit,delete a.applewebkit,a.opr&&(a.opera=a.opr,delete a.opr,delete a.chrome),a.safari&&(a.chrome||a.crios||a.fxios||a.opera||a.silk||a.fluidapp||a.phantomjs||a.mobile&&
    !a.ios?(delete a.safari,a.vivaldi&&delete a.chrome):a.safari=a.version&&!a.rim_tablet_os?a.version:{419:"2.0.4",417:"2.0.3",416:"2.0.2",412:"2.0",312:"1.3",125:"1.2",85:"1.0"}[parseInt(a.safari,10)]||a.safari);else if(a.msie||a.trident)if(a.opera||(a.ie=a.msie||a.rv),delete a.msie,delete a.android,a.windows_phone_os)a.windows_phone=a.windows_phone_os,delete a.windows_phone_os;else{if("wpdesktop"===a.mobile||"xblwp7"===a.mobile||"zunewp7"===a.mobile)a.mobile="windows desktop",a.windows_phone=9>+a.ie?
    "7.0":10>+a.ie?"7.5":"8.0",delete a.windows_nt}else if(a.gecko||a.firefox)a.gecko=a.rv;a.rv&&delete a.rv;a.version&&delete a.version;return a},format:function(b){var d="",a;for(a in b)if(a&&b.hasOwnProperty(a)){var c=a,e=b[a],c=c.split(".").join("-"),g=" ua-"+c;if("string"===typeof e){for(var e=e.split(" ").join("_").split(".").join("-"),f=e.indexOf("-");0<f;)g+=" ua-"+c+"-"+e.substring(0,f),f=e.indexOf("-",f+1);g+=" ua-"+c+"-"+e}d+=g}return d},encode:function(b){var d="",a;for(a in b)a&&b.hasOwnProperty(a)&&
    (d&&(d+="\x26"),d+=encodeURIComponent(a)+"\x3d"+encodeURIComponent(b[a]));return d}};k.userAgent=k.ua=k.parse(l,p);l=k.format(k.ua)+" js";n.className=n.className?n.className.replace(/\bno-js\b/g,"")+l:l.substr(1);return k}(document.documentElement,navigator.userAgent,navigator.standalone);

/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
 */
// prettier-ignore
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();

/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
 */
// prettier-ignore
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;

/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *	// update the viewport, in case the window size has changed
 *	viewport = updateViewportDimensions();
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 *
 */

function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

// prettier-ignore
window.wayfx = window.wayfx || {};

wayfx.cacheSelectors = function () {
  wayfx.cache = {
    // General
    $html: $("html"),
    $body: $(document.body),
    // Navigation
    $header: $(".wayfx-header"),
    $main: $("#primary"),
    $navigation: $("#wayfxNavigation"),
    $mobileNavToggle: $(".wayfx-header__nav-toggle"),
    $mobileNav: $(".wayfx-header__mobile-nav"),
    $hpTopBar: $(".hp-top-bar"),
    $ab30stackTopBar: $(".ab30stack__topbar"),
    // Customer Pages
    $recoverPasswordLink: $("#RecoverPassword"),
    $hideRecoverPasswordLink: $("#HideRecoverPasswordLink"),
    $recoverPasswordForm: $("#RecoverPasswordForm"),
    $customerLoginForm: $("#CustomerLoginForm"),
    $passwordResetSuccess: $("#ResetSuccess"),
  };
};

wayfx.init = function () {
  wayfx.cacheSelectors();
  wayfx.siteHeader();
  wayfx.pdpFunctions();
  wayfx.loginForms();
  wayfx.slickSliders();
  wayfx.mobileNavToggle();
  wayfx.smoothScroll();
  wayfx.accordions();
  wayfx.animations();
};

wayfx.getHash = function () {
  return window.location.hash;
};

wayfx.siteHeader = function () {
  $(window).on("load scroll", function () {
    var siteHeader = wayfx.cache.$header,
      topbar = $(".wayfx-topbar"),
      topbarHeight = topbar.outerHeight(true);

    if (topbar.length) {
      siteHeader.css("--top", topbarHeight + "px");
    }
  });
  $(window).on("scroll unload", function () {
    var scroll = $(window).scrollTop(),
      topbarHeight = $(".wayfx-topbar").outerHeight(true);

    if ($(".wayfx-topbar").length && scroll > topbarHeight) {
      wayfx.cache.$header.addClass("activeScroll");
      wayfx.cache.$header.css("--top", "0px");
    } else if (!$(".wayfx-topbar").length && scroll > 0) {
      wayfx.cache.$header.addClass("activeScroll");
      wayfx.cache.$header.css("--top", "0px");
    } else {
      wayfx.cache.$header.removeClass("activeScroll");
    }
  });
};

wayfx.pdpFunctions = function () {
  $(".qtyplus").click(function (e) {
    // Stop acting like a button
    e.preventDefault(); // Get the field name

    var fieldName = $(this).attr("field"); // Get its current value

    var currentVal = parseInt($("input[id=" + fieldName + "]").val()); // If is not undefined

    if (!isNaN(currentVal)) {
      // Increment
      $("input[id=" + fieldName + "]").val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $("input[id=" + fieldName + "]").val(0);
    }
  }); // This button will decrement the value till 0

  $(".qtyminus").click(function (e) {
    // Stop acting like a button
    e.preventDefault(); // Get the field name

    var fieldName = $(this).attr("field"); // Get its current value

    var currentVal = parseInt($("input[id=" + fieldName + "]").val()); // If it isn't undefined or its greater than 0

    if (!isNaN(currentVal) && currentVal > 1) {
      // Decrement one
      $("input[id=" + fieldName + "]").val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $("input[id=" + fieldName + "]").val(1);
    }
  });

  // See all toggle for nutrients sections

  $("div[data-readmore]")
    .hide()
    .each(function () {
      var open_text = $(this).data("See All");
      open_text = typeof open_text !== "undefined" ? open_text : "See All";
      $(this).before(
        '<a data-readmore-toggle href="#" class="readmore-toggle"><span>' +
          open_text +
          "</span></a>"
      );
    });

  $("[data-readmore-toggle]").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    var open_text = $(this).siblings("div[data-readmore]").data("open-text");
    var close_text = $(this).siblings("div[data-readmore]").data("close-text");

    if (typeof open_text == "undefined") {
      open_text = "See All";
    }

    if (typeof close_text == "undefined") {
      close_text = "Close";
    }

    if ($(this).text() == open_text) {
      $(this)
        .html("<span>" + close_text + "</span>")
        .next("div[data-readmore]")
        .slideToggle("fast")
        .after(this);
    } else {
      $(this)
        .html("<span>" + open_text + "</span>")
        .prev("div[data-readmore]")
        .slideToggle("fast")
        .before(this);
    }
  });

  var pdpv2 = document.querySelector(".wayfx-product");

  function handleScrollforProductBar() {
    var pdpInfoBar = document.querySelector(".wayfx-product__infobar");
    var pdpHeroHeight = document.querySelector(
      ".wayfx-product__hero"
    ).offsetHeight;
    var pdpRect = pdpv2.getBoundingClientRect();

    if (window.scrollY > pdpHeroHeight) {
      pdpInfoBar.classList.add("is-visible");
    } else {
      pdpInfoBar.classList.remove("is-visible");
    }

    if (window.scrollY >= pdpRect.top + pdpRect.height - window.innerHeight) {
      pdpInfoBar.classList.remove("is-visible");
    }
  }

  if (
    document.querySelectorAll(".wayfx-product__infobar").length &&
    pdpv2 != null
  ) {
    window.addEventListener("scroll", debounce(handleScrollforProductBar, 50));
  }

  // New product bar for V3 PDP
  var pdpv3 = document.querySelector(".rtnu-product");
  function handleScrollforProductBarV3() {
    var pdpInfoBar = document.querySelector(".rtnu-product-infobar");
    var pdpHeroHeight = document.querySelector(
      ".rtnu-product__hero"
    ).offsetHeight;
    var pdpRect = pdpv3.getBoundingClientRect();

    if (window.scrollY >= pdpHeroHeight - 150) {
      pdpInfoBar.classList.add("is-visible");
    } else {
      pdpInfoBar.classList.remove("is-visible");
    }

    if (window.scrollY >= pdpRect.top + pdpRect.height + window.innerHeight) {
      pdpInfoBar.classList.remove("is-visible");
    }
  }

  if (
    document.querySelectorAll(".rtnu-product-infobar").length &&
    pdpv3 != null
  ) {
    window.addEventListener(
      "scroll",
      debounce(handleScrollforProductBarV3, 20)
    );
  }

  $("[data-fancybox]").fancybox({
    btnTpl: {
      close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><path fill="#BAA68F" fill-rule="nonzero" d="M16 0C7.1776528 0 0 7.1776592 0 16s7.1776528 16 16 16 16-7.1776592 16-16S24.8223472 0 16 0zm0 2.4c7.525292 0 13.6 6.0747128 13.6 13.6 0 7.5252872-6.074708 13.6-13.6 13.6-7.525292 0-13.6-6.0747128-13.6-13.6C2.4 8.4747128 8.474708 2.4 16 2.4zm5.1890624 7.1828128c-.3169114.00748397-.6179902.14004837-.8375.3687496L16 14.3031248l-4.3515624-4.3515624c-.2259831-.23272097-.5365498-.3640495-.8609376-.3640624-.488516.00011912-.92820867.29633831-1.11182632.749033-.18361765.4526947-.07451227.9715121.27588872 1.3119046L14.3031248 16l-4.3515624 4.3515624c-.31347719.3009826-.43974994.7479174-.33012017 1.1684406.10962976.4205232.43803157.748925.85855477.8585548.4205232.1096297.867458-.016643 1.1684406-.3301202L16 17.6968752l4.3515624 4.3515624c.3009826.3134772.7479174.4397499 1.1684406.3301202.4205232-.1096298.748925-.4380316.8585548-.8585548.1096297-.4205232-.016643-.867458-.3301202-1.1684406L17.6968752 16l4.3515624-4.3515624c.3571659-.3428064.4671834-.8697492.2770215-1.3268291-.1901619-.45708-.6414756-.75048859-1.1363967-.7387957z"/></svg>' +
        "</button>",
      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn:
        '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><path fill="#BAA68F" fill-rule="nonzero" d="M16 0C7.1776528 0 0 7.1776592 0 16s7.1776528 16 16 16 16-7.1776592 16-16S24.8223472 0 16 0zm0 2.4c7.525292 0 13.6 6.0747128 13.6 13.6 0 7.5252872-6.074708 13.6-13.6 13.6-7.525292 0-13.6-6.0747128-13.6-13.6C2.4 8.4747128 8.474708 2.4 16 2.4zm5.1890624 7.1828128c-.3169114.00748397-.6179902.14004837-.8375.3687496L16 14.3031248l-4.3515624-4.3515624c-.2259831-.23272097-.5365498-.3640495-.8609376-.3640624-.488516.00011912-.92820867.29633831-1.11182632.749033-.18361765.4526947-.07451227.9715121.27588872 1.3119046L14.3031248 16l-4.3515624 4.3515624c-.31347719.3009826-.43974994.7479174-.33012017 1.1684406.10962976.4205232.43803157.748925.85855477.8585548.4205232.1096297.867458-.016643 1.1684406-.3301202L16 17.6968752l4.3515624 4.3515624c.3009826.3134772.7479174.4397499 1.1684406.3301202.4205232-.1096298.748925-.4380316.8585548-.8585548.1096297-.4205232-.016643-.867458-.3301202-1.1684406L17.6968752 16l4.3515624-4.3515624c.3571659-.3428064.4671834-.8697492.2770215-1.3268291-.1901619-.45708-.6414756-.75048859-1.1363967-.7387957z"/></svg>' +
        "</button>",
    },
  });

  $('[data-fancybox="wayfx-pdp-media"]').fancybox({
    loop: true,
    hash: false,
    infobar: false,
    baseTpl:
      '<div class="fancybox-container fancybox-wayfx-pdp-media" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
      '<div class="fancybox-toolbar">{{buttons}}</div>' +
      '<div class="fancybox-navigation">{{arrows}}</div>' +
      '<div class="fancybox-stage"></div>' +
      '<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
      "</div>" +
      "</div>",
    btnTpl: {
      close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><g fill="none" fill-rule="evenodd"><circle cx="28" cy="28" r="28" fill="#994e0e"/><path fill="#FFF" fill-rule="nonzero" d="M21 20.057292L20.057292 21l.4739587.4687507L27.057292 28l-7 7L21 35.942708l7-7 6.5260413 6.5312507L35 35.942708 35.942708 35l-.4687493-.4739587L28.942708 28l7-7L35 20.057292l-7 7-6.5312493-6.5260413z"/></g></svg>' +
        "</button>",
      // Arrows
      arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><g fill="none" fill-rule="evenodd" transform="matrix(-1 0 0 1 56 0)"><circle cx="28" cy="28" r="28" fill="#994e0e"/><path fill="#FFF" fill-rule="nonzero" d="M32.6875 22.0535714l-1.2321429 1.1785715 3.7633938 3.924108H16v1.7142857h19.1852674l-3.7299103 3.8973205L32.6875 33.9464286 38.3995531 28z"/></g></svg></div>' +
        "</button>",
      arrowRight:
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><g fill="none" fill-rule="evenodd"><circle cx="28" cy="28" r="28" fill="#994e0e"/><path fill="#FFF" fill-rule="nonzero" d="M32.6875 22.0535714l-1.2321429 1.1785715 3.7633938 3.924108H16v1.7142857h19.1852674l-3.7299103 3.8973205L32.6875 33.9464286 38.3995531 28z"/></g></svg></div>' +
        "</button>",
    },
  });
};

wayfx.loginForms = function () {
  function showRecoverPasswordForm() {
    wayfx.cache.$recoverPasswordForm.show();
    wayfx.cache.$customerLoginForm.hide();
  }

  function hideRecoverPasswordForm() {
    wayfx.cache.$recoverPasswordForm.hide();
    wayfx.cache.$customerLoginForm.show();
  }

  wayfx.cache.$recoverPasswordLink.on("click", function (evt) {
    evt.preventDefault();
    showRecoverPasswordForm();
  });
  wayfx.cache.$hideRecoverPasswordLink.on("click", function (evt) {
    evt.preventDefault();
    hideRecoverPasswordForm();
  }); // Allow deep linking to recover password form

  if (wayfx.getHash() === "#recover") {
    showRecoverPasswordForm();
  }

  $(window).on("load resize", function () {
    viewport = updateViewportDimensions();

    if (viewport.width <= 768) {
      $(".wayfx-account__tab").on("click", function () {
        var tab = $(this).data("tab");

        if (!$(this).hasClass("selected")) {
          $(".wayfx-account__tab").removeClass("selected");
          $(this).addClass("selected");

          if (tab === "login") {
            $(".wayfx-register-form__wrapper").hide();
            $(".wayfx-login-form__wrapper").fadeIn();
          } else {
            $(".wayfx-login-form__wrapper").hide();
            $(".wayfx-register-form__wrapper").fadeIn();
          }
        }
      });
    }
  });
};

wayfx.resetPasswordSuccess = function () {
  wayfx.cache.$passwordResetSuccess.show();
};

wayfx.slickSliders = function () {
  // PDP Hero slider
  if ($(".wayfx-product__photos--featured").length) {
    $(".wayfx-product__photos--featured").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      swipe: false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            swipe: true,
            dots: true,
          },
        },
      ],
    });
    $(".wayfx-product__photos--thumbnails").slick({
      slidesToScroll: 1,
      slidesToShow: 5,
      vertical: true,
      asNavFor: ".wayfx-product__photos--featured",
      dots: false,
      focusOnSelect: true,
      verticalSwiping: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            vertical: false,
            verticalSwiping: false,
          },
        },
      ],
    });
    $(".wayfx-product__photos--thumbnails-warrior").slick({
      slidesToScroll: 1,
      slidesToShow: 5,
      asNavFor: ".wayfx-product__photos--featured",
      focusOnSelect: true,
    });
    $(".wayfx-product__photos--thumbnails-hp").slick({
      slidesToScroll: 1,
      slidesToShow: 5,
      asNavFor: ".wayfx-product__photos--featured",
      focusOnSelect: true,
    });
  } // PDP social proof slider

  if ($(".wayfx-social-proof__slider").length) {
    $(".wayfx-social-proof__slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: false,
      prevArrow: $(".wayfx-slider-previous-arrow"),
      nextArrow: $(".wayfx-slider-next-arrow"),
      responsive: [
        {
          breakpoint: 769,
          settings: {
            dots: true,
            arrows: false,
          },
        },
      ],
    });
  }

  if ($(".wayfx-testimonials-slider").length) {
    $(".wayfx-testimonials-slider .swiper-wrapper").slick({
      dots: true,
      infinite: false,
      speed: 300,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: false,
      prevArrow: $(".wayfx-slider-previous-arrow"),
      nextArrow: $(".wayfx-slider-next-arrow"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
};

wayfx.mobileNavToggle = function () {
  var navToggle = wayfx.cache.$mobileNavToggle,
    siteHeader = wayfx.cache.$header,
    mobileNav = wayfx.cache.$mobileNav;
  navToggle.on("click", function () {
    if (
      siteHeader.hasClass("mobile-menu-active") &&
      wayfx.cache.$body.hasClass("menu-opened")
    ) {
      $(this).attr("aria-expanded", "false");
      $(this).attr("aria-label", "menu");
      siteHeader.removeClass("mobile-menu-active");
      mobileNav.removeClass("active");
      wayfx.cache.$body.removeClass("menu-opened");
      $(".wayfx-header__has-dropdown").removeClass("dropdown-open");
    } else {
      siteHeader.addClass("mobile-menu-active");
      mobileNav.addClass("active");
      wayfx.cache.$body.addClass("menu-opened");
      $(this).attr("aria-expanded", "true");
      $(this).attr("aria-label", "close menu");
    }
  }); // Function to hide mobile nav if clicked anywhere outside of it

  $(document).mouseup(function (e) {
    var siteheader = wayfx.cache.$header,
      mobileNav = wayfx.cache.$mobileNav;

    if (
      !siteheader.is(e.target) &&
      !mobileNav.is(e.target) &&
      siteheader.has(e.target).length === 0 &&
      mobileNav.has(e.target).length === 0
    ) {
      siteheader.removeClass("mobile-menu-active");
      mobileNav.removeClass("active");
      wayfx.cache.$body.removeClass("menu-opened");
      $(".wayfx-header__nav-toggle").attr("aria-expanded", "false");
      $(".wayfx-header__nav-toggle").attr("aria-label", "menu");
    }
  });

  var siteHeader = wayfx.cache.$header,
    mobileNav = wayfx.cache.$mobileNav,
    siteHeaderHeight = siteHeader.outerHeight(true),
    topbar = $(".wayfx-topbar"),
    hpTopBar = wayfx.cache.$hpTopBar,
    hpTopBarHeight = hpTopBar.outerHeight(true),
    hpTopBarAndSiteHeaderHeight = siteHeaderHeight + hpTopBarHeight,
    ab30StackTopBar = wayfx.cache.$ab30stackTopBar,
    ab30StackTopBarHeight = ab30StackTopBar.outerHeight(true),
    ab30StackTopBarAndSiteHeaderHeight =
      siteHeaderHeight + ab30StackTopBarHeight,
    topbarHeight = topbar.outerHeight(true),
    topbarAndSiteHeaderHeight = siteHeaderHeight + topbarHeight,
    scroll = $(window).scrollTop();

  if (!topbar.length && scroll == 0) {
    mobileNav.css("--top", siteHeaderHeight + "px");
  } else if (scroll == 0) {
    mobileNav.css("--top", topbarAndSiteHeaderHeight + "px");
  } else if (scroll >= siteHeaderHeight) {
    mobileNav.css("--top", siteHeaderHeight + "px");
  }

  if (!hpTopBar.length && scroll == 0) {
    mobileNav.css("--subtop", siteHeaderHeight + "px");
  } else if (scroll == 0) {
    mobileNav.css("--subtop", hpTopBarAndSiteHeaderHeight + "px");
  } else if (scroll >= siteHeaderHeight) {
    mobileNav.css("--subtop", siteHeaderHeight + "px");
  }

  if (!ab30StackTopBar.length && scroll == 0) {
    mobileNav.css("--subtop", siteHeaderHeight + "px");
  } else if (scroll == 0) {
    mobileNav.css("--subtop", ab30StackTopBarAndSiteHeaderHeight + "px");
  } else if (scroll >= siteHeaderHeight) {
    mobileNav.css("--subtop", siteHeaderHeight + "px");
  }

  $(window).on("load scroll", function () {
    var siteHeader = wayfx.cache.$header,
      mobileNav = wayfx.cache.$mobileNav,
      siteHeaderHeight = siteHeader.outerHeight(true),
      topbar = $(".wayfx-topbar"),
      topbarHeight = topbar.outerHeight(true),
      topbarAndSiteHeaderHeight = siteHeaderHeight + topbarHeight,
      hpTopBar = wayfx.cache.$hpTopBar,
      hpTopBarHeight = hpTopBar.outerHeight(true),
      hpTopBarAndSiteHeaderHeight = siteHeaderHeight + hpTopBarHeight,
      ab30StackTopBar = wayfx.cache.$ab30stackTopBar,
      ab30StackTopBarHeight = ab30StackTopBar.outerHeight(true),
      ab30StackTopBarAndSiteHeaderHeight =
        siteHeaderHeight + ab30StackTopBarHeight,
      scroll = $(window).scrollTop();

    if (!topbar.length && scroll == 0) {
      mobileNav.css("--top", siteHeaderHeight + "px");
    } else if (scroll == 0) {
      mobileNav.css("--top", topbarAndSiteHeaderHeight + "px");
    } else if (scroll >= siteHeaderHeight) {
      mobileNav.css("--top", siteHeaderHeight + "px");
    }

    if (!hpTopBar.length && scroll == 0) {
      mobileNav.css("--subtop", siteHeaderHeight + "px");
    } else if (scroll == 0) {
      mobileNav.css("--subtop", hpTopBarAndSiteHeaderHeight + "px");
    } else if (scroll >= siteHeaderHeight) {
      mobileNav.css("--subtop", siteHeaderHeight + "px");
    }

    if (!ab30StackTopBar.length && scroll == 0) {
      mobileNav.css("--subtop", siteHeaderHeight + "px");
    } else if (scroll == 0) {
      mobileNav.css("--subtop", ab30StackTopBarAndSiteHeaderHeight + "px");
    } else if (scroll >= siteHeaderHeight) {
      mobileNav.css("--subtop", siteHeaderHeight + "px");
    }

    // if(topbar.length){
    //     siteHeaderHeight = topbarAndSiteHeaderHeight;
    //     mobileNav.css("--subtop",topbarAndSiteHeaderHeight+"px");
    // } else {
    //     mobileNav.css("--subtop",siteHeaderHeight+"px");
    // }
  }); // Check if window size is greater than 600px and remove any active classes that trigger the mobile menu

  $(window).on("load resize", function () {
    viewport = updateViewportDimensions();

    if (viewport.width >= 600) {
      if (
        siteHeader.hasClass("mobile-menu-active") &&
        wayfx.cache.$body.hasClass("menu-opened")
      ) {
        navToggle.attr("aria-expanded", "false");
        navToggle.attr("aria-label", "menu");
        siteHeader.removeClass("mobile-menu-active");
        mobileNav.removeClass("active");
        wayfx.cache.$body.removeClass("menu-opened");
      }
    }
  });
};

wayfx.smoothScroll = function () {
  $('a[href*="#"]') // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .not("a[data-fancybox]")
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]"); // Does a scroll target exist?

        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 100,
            },
            800,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();

              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable

                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
};

wayfx.accordions = function () {
  $(".wayfx-accordion-block-title").on("click", function () {
    $(this).parent().toggleClass("wayfx-accordion-block-item--open");
    $(this).next(".wayfx-accordion-block-content").slideToggle(150);
  });
};

wayfx.animations = function () {
  gsap.registerPlugin(ScrollTrigger); // Product Basics Animation

  gsap.set(".wayfx-product__basics-list-item", {
    autoAlpha: 0,
    yPercent: 30,
  });
  ScrollTrigger.batch(".wayfx-product__basics-list", {
    onEnter: function onEnter(batch) {
      batch.forEach(function (item, i) {
        gsap.to(item.querySelectorAll(".wayfx-product__basics-list-item"), {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          delay: i * 0.3,
        });
      });
    },
    start: "top 75%",
  }); // Product Trusted section

  gsap.set(".wayfx-product__trusted-image", {
    autoAlpha: 0,
    yPercent: 10,
  });
  gsap.set(".wayfx-product__trusted-content", {
    autoAlpha: 0,
    yPercent: 10,
  });
  gsap.to(".wayfx-product__trusted-image", {
    autoAlpha: 1,
    yPercent: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".wayfx-product__trusted",
      start: "top 75%",
      once: true,
    },
  });
  gsap.to(".wayfx-product__trusted-content", {
    autoAlpha: 1,
    yPercent: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".wayfx-product__trusted",
      start: "top 50%",
      once: true,
    },
  }); // Product Nutrients Sections

  gsap.set(".wayfx-product__nutrient", {
    autoAlpha: 0,
    yPercent: 15,
  });
  ScrollTrigger.batch(".wayfx-product__nutrient", {
    onEnter: function onEnter(batch) {
      gsap.to(batch, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      });
    },
    batachMax: 6,
    start: "top 95%",
    //markers: true,
  }); // Product Benefits

  gsap.set(".wayfx-product__cta-benefit", {
    autoAlpha: 0,
    yPercent: 20,
  });
  ScrollTrigger.batch(".wayfx-product__cta-benefits", {
    onEnter: function onEnter(batch) {
      batch.forEach(function (item, i) {
        gsap.to(item.querySelectorAll(".wayfx-product__cta-benefit"), {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.2,
          delay: i * 0.2,
        });
      });
    },
    start: "top 75%",
  });
};

$(window).on("load resize", function () {
  viewport = updateViewportDimensions();

  if (viewport.width <= 768) {
    $(document).on("click", ".wayfx-product__basics__heading", function (e) {
      e.stopImmediatePropagation();
      $(this).parent().toggleClass("wayfx-product__basics--open");
      $(this).next(".wayfx-product__basics__content").toggleClass("opened");
    });
  }
});
$(wayfx.init);

// V3
window.addEventListener("DOMContentLoaded", function () {
  const rtnuHeader = document.querySelector(".rtnu-header"),
    rtnuHeaderMobile = document.querySelector(".rtnu-header__mobile"),
    rtnuHasDropdown = document.querySelectorAll(".rtnu-header__has-dropdown"),
    rtnuMobileToggle = document.querySelector(".rtnu-header__toggle"),
    rtnuMobileMenu = document.querySelector(".rtnu-header__mobile-nav"),
    rtnuMobileMenuHasSubmenu = document.querySelectorAll(
      ".rtnu-header__mobile-nav--has-nav"
    ),
    rtnuMobileMenuExpanded = rtnuMobileMenu?.querySelector(
      ".rtnu-header__mobile-nav-expanded"
    ),
    rtnuMobileMenuExpandedItem = rtnuMobileMenu?.querySelectorAll(
      ".rtnu-header__mobile-nav-links"
    ),
    rtnuMobileMenuItemBack = rtnuMobileMenu?.querySelectorAll(
      ".rtnu-header__mobile-nav-back"
    ),
    rtnuOfferBar = document.querySelector(".rtnu-product__hero-offer-bar");

  let prevScrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop -
      (document.documentElement.clientTop || 0);

  if (document.body.classList.contains("admin-bar")) {
    rtnuHeader?.style.setProperty("top", "32px");
    rtnuHeaderMobile.style.setProperty("top", "32px");
  }

  // debounce function to prevent performance issues
  function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // add active class to rtnuHeader when user is hovering over rtnuHasDropdown and children
  rtnuHasDropdown.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      rtnuHeader?.classList.add("active");
    });
    item.addEventListener("mouseleave", function () {
      rtnuHeader?.classList.remove("active");
    });
  });

  // handle header scroll
  function v3HeaderScroll() {
    const currentScrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop -
        (document.documentElement.clientTop || 0);

        if (currentScrollPos > prevScrollPos && window.scrollY > 120) {
          rtnuHeader?.classList.add("scrolling-down");
          rtnuHeaderMobile?.classList.add("scrolling-down");
          rtnuHeader?.classList.remove("scrolling-up");
          rtnuHeaderMobile?.classList.remove("scrolling-up");

          if (rtnuOfferBar) {
            rtnuOfferBar?.style.setProperty("transform", "translateY(0)");
          }
        } else {
          rtnuHeader?.classList.add("scrolling-up");
          rtnuHeaderMobile?.classList.add("scrolling-up");
          rtnuHeader?.classList.remove("scrolling-down");
          rtnuHeaderMobile?.classList.remove("scrolling-down");

          if (rtnuOfferBar) {
            if (window.scrollY === 0) {
              rtnuOfferBar?.style.setProperty("transform", "translateY(0)");
            } else {
              // Check if the viewport is less than 1024px for mobile adjustments
              if (window.innerWidth < 1024) {
                // Use the mobile header's height if on mobile
                if (window.scrollY < rtnuHeaderMobile?.offsetHeight) {
                  rtnuOfferBar?.style.setProperty("transform", `translateY(${window.scrollY}px)`);
                } else {
                  rtnuOfferBar?.style.setProperty("transform", `translateY(${rtnuHeaderMobile?.offsetHeight}px)`);
                }
              } else {
                // Use the desktop header's height if on desktop
                if (window.scrollY < rtnuHeader?.offsetHeight) {
                  rtnuOfferBar?.style.setProperty("transform", `translateY(${window.scrollY}px)`);
                } else {
                  rtnuOfferBar?.style.setProperty("transform", `translateY(${rtnuHeader?.offsetHeight}px)`);
                }
              }
            }
          }
        }

    if (window.scrollY > 0) {
      rtnuHeader?.classList.add("active-scroll");
      rtnuHeaderMobile?.classList.add("active-scroll");
    } else {
      rtnuHeader?.classList.remove("active-scroll");
      rtnuHeaderMobile?.classList.remove("active-scroll");
      rtnuHeader?.classList.remove("scrolling-up");
      rtnuHeaderMobile?.classList.remove("scrolling-up");
    }

    prevScrollPos = currentScrollPos;
  }

  // add active class to rtnuHeader on scroll and remove on top. Add debounce function to prevent performance issues
  window.addEventListener("scroll", debounce(v3HeaderScroll, 5));

  rtnuMobileToggle?.addEventListener("click", function () {
    rtnuMobileToggle.classList.toggle("active");
    rtnuHeaderMobile.classList.toggle("active");
    document.body.classList.toggle("mobile-menu-active");
    rtnuMobileMenu.classList.toggle("active");
    rtnuMobileMenuExpanded.classList.remove("active");
  });

  rtnuMobileMenuHasSubmenu.forEach(function (menu) {
    let menuId = menu.getAttribute("data-menu-id");

    menu.addEventListener("click", function () {
      rtnuMobileMenu.querySelector(
        ".rtnu-header__mobile-nav-container > div"
      ).style.opacity = 0;
      rtnuMobileMenu.querySelector(
        ".rtnu-header__mobile-nav-container > ul"
      ).style.opacity = 0;
      rtnuMobileMenuExpanded.classList.add("active");

      rtnuMobileMenuExpandedItem.forEach(function (item) {
        item.style.display = "none";

        if (item.getAttribute("data-nav-id") === menuId) {
          item.style.display = "block";
        }
      });

      rtnuMobileMenuItemBack.forEach((itemBack) => {
        itemBack.addEventListener("click", function (e) {
          e.preventDefault();

          rtnuMobileMenu.querySelector(
            ".rtnu-header__mobile-nav-container > div"
          ).style.opacity = 1;
          rtnuMobileMenu.querySelector(
            ".rtnu-header__mobile-nav-container > ul"
          ).style.opacity = 1;
          rtnuMobileMenuExpanded.classList.remove("active");
        });
      });
    });
  });

  // add height of rtnuHeader to body as custom property
  document.body.style.setProperty(
    "--rtnu-header-height",
    rtnuHeader?.offsetHeight + "px"
  );

  document.body.style.setProperty(
    "--rtnu-header-mobile-height",
    rtnuHeaderMobile?.offsetHeight + "px"
  );

  // if window width is less than 1025px and on resize, add height of rtnuHeaderMobile to body as custom property
  function v3HeaderMobileHeight() {
    if (window.innerWidth < 1025) {
      document.body.style.setProperty(
        "--rtnu-header-mobile-height",
        rtnuHeaderMobile?.offsetHeight + "px"
      );
    } else {
      document.body.style.setProperty(
        "--rtnu-header-height",
        rtnuHeader?.offsetHeight + "px"
      );
    }
  }

  window.addEventListener("resize", debounce(v3HeaderMobileHeight, 5));

  // Mother's Day add to cart products
  let addToCartBtn = document.querySelectorAll(".rtnu-md-add");
  let mdProducts = [33897371533443, 34306714566787, 34306746581123];

  var requestDataArray = mdProducts.map(function (productId) {
    return {
      id: productId,
      quantity: 1,
    };
  });

  addToCartBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      jQuery.ajax({
        type: "POST",
        url: "/cart/add.js",
        data: {
          items: requestDataArray,
        },
        dataType: "json",
        success: function () {
          document.querySelector(".rtnu-header__cart a").click();
        },
      });
    });
  });

  // accordion
  const accordionItems = document.querySelectorAll(".rtnu__accordion-item");

  function toggleAccordionItem(event) {
    const accordionItemHeader = event.target.closest(
      ".rtnu__accordion-item-toggle"
    );
    if (!accordionItemHeader) return;

    const accordionItem = accordionItemHeader.parentNode;
    const accordionItemContent = accordionItem.querySelector(
      ".rtnu__accordion-item-content"
    );
    if (!accordionItemContent) return;

    const isOpen = accordionItem.classList.toggle("is-open");

    const maxHeight = isOpen ? accordionItemContent.scrollHeight + "px" : "0";

    accordionItemContent.style.maxHeight = maxHeight;

    accordionItemHeader.setAttribute("aria-expanded", isOpen);
  }

  accordionItems.forEach((item) => {
    const header = item.querySelector(".rtnu__accordion-item-toggle");
    header.addEventListener("click", toggleAccordionItem);
    header.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        // Respond to "Enter" or "Space" key
        event.preventDefault();
        toggleAccordionItem(event);
      }
    });
  });

  // show more
  const showMoreButtons = document.querySelectorAll('button[id^="Show-More-"]');

  function expandShowMore(event) {
    const parentDisplay = event.target.closest('[id^="Show-More-"]').closest('.rtnu-parent-display');
    const labelElements = parentDisplay.querySelectorAll('.rtnu-label-text');
    labelElements.forEach(element => element.classList.toggle('rtnu-hidden'));

    const showMoreItems = parentDisplay.querySelectorAll('.rtnu-reveal-item');
    showMoreItems.forEach(item => item.classList.toggle('rtnu-hidden'));
  }

  showMoreButtons.forEach(button => {
    button.addEventListener('click', expandShowMore);
  });

  const organsSliderElement = document.querySelector(".rtnu-lp__organs-slider");

  if(organsSliderElement){
    let organsSlider = new Splide(".rtnu-lp__organs-slider", {
      arrows: false,
      gap: "24px",
      easing: "ease",
      perPage: 2,
      perMove: 2,
      breakpoints: {
        768: {
          perPage: 1,
          perMove: 1,
        },
        600: {
          fixedWidth: "329px",
          gap: "16px"
        }
      }
    });

    organsSlider.on('overflow', function(isOverflow) {
      organsSlider.options = {
        arrows: isOverflow, // update arrows option based on overflow
      };
    });

    organsSlider.mount();
  }

  const reviewsSliderElement = document.querySelector(".rtnu-lp__reviews-slider");

  if (reviewsSliderElement) {
    let reviewsSlider = new Splide(".rtnu-lp__reviews-slider", {
      arrows: false,
      destroy: true,
      easing: "ease",
      padding: "20px",
      breakpoints: {
        768: {
          perPage: 1,
          destroy: false,
          fixedWidth: "329px",
          gap: "16px"
        }
      }
    });

    reviewsSlider.mount();
  }

  const expertsSliderElement = document.querySelector(".rtnu-lp__experts-sliders");

  if (expertsSliderElement) {
    let expertsSliderMain = new Splide(".rtnu-lp__experts-slider-main", {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : true,
      breakpoints: {
        768: {
          destroy: true,
        }
      }
    }).mount();

    let thumbnails = document.querySelector('.rtnu-lp__experts-slider-thumbs');

    if (thumbnails) {
      // Create thumbnails and preload images
      expertsSliderMain.Components.Elements.slides.forEach((slide, index) => {
        let imgSrc = slide.getAttribute('data-image');
        let li = document.createElement('li');
        let div = document.createElement('div');
        div.style.backgroundImage = `url(${imgSrc})`;
        li.appendChild(div);
        thumbnails.appendChild(li);

        // Preload image
        let img = new Image();
        img.src = imgSrc;
      });

      if (thumbnails.children.length > 0){
        // Store the original background image of the first thumbnail
        let originalFirstThumbnailBg = thumbnails.children[0].querySelector('div').style.backgroundImage;

        // Function to swap background images on slide change
        const swapBackgroundImages = function(newIndex) {
          // Store the original background image of the first thumbnail
          let originalFirstThumbnailBg = thumbnails.children[0].querySelector('div').style.backgroundImage;

          // Shift all thumbnails to the left
          for (let i = 0; i < thumbnails.children.length - 1; i++) {
            thumbnails.children[i].querySelector('div').style.backgroundImage = thumbnails.children[i + 1].querySelector('div').style.backgroundImage;
          }

          // Set the last thumbnail to the original first thumbnail background image
          thumbnails.children[thumbnails.children.length - 1].querySelector('div').style.backgroundImage = originalFirstThumbnailBg;

          // Update the background image of the pseudo-element and transition the opacity
          thumbnails.children[0].querySelector('div').style.opacity = '0';
          setTimeout(() => {
            thumbnails.children[0].querySelector('div').style.opacity = '1';
          }, 50);
        };

        // Add event listener for 'moved' event
        expertsSliderMain.on('moved', swapBackgroundImages);

        // Remove event listener when slider is destroyed
        expertsSliderMain.on('destroy', function() {
          expertsSliderMain.off('moved', swapBackgroundImages);
        });
      }
    }

    let expertsSliderMobile = new Splide(".rtnu-lp__experts-slider-mobile", {
      pagination  : true,
      arrows      : false,
      perPage     : 1,
      fixedWidth  : "330px",
      drag        : true,
      gap: "12px"
    });

    expertsSliderMobile.mount();
  }

  const customerTrustSliderElement = document.getElementById("rtnu-customer-carousel");

  if (customerTrustSliderElement){
    let customerTestimonials = new Splide( '#rtnu-customer-carousel', {
      pagination: false,
      arrows    : false,
      drag:     false,
      grid: {
        rows: 2,
        cols: 3,
        gap : {
          row: '24px',
          col: '24px',
        },
      },
      breakpoints: {
        800: {
          grid: {
            rows: 1,
            cols: 1,
          },
          focus: 'center',
          trimSpace: false,
          gap : 16,
          pagination: true,
          drag: true
        }
      }
    });

    customerTestimonials.mount({ Grid });
  }

  const palScrollerElement = document.querySelector(".rtnu-pal__cta-scroller");

  if (palScrollerElement){
    let palScroller = new Splide( palScrollerElement, {
      type   : 'loop',
      drag   : 'free',
      focus  : 'center',
      pagination: false,
      arrows: false,
      perPage: 2,
      autoScroll: {
        speed: 1,
      },
    });

    palScroller.mount({ AutoScroll });
  }

  const palBenefitsSliderElement = document.querySelector(".rtnu-pal__benefits-slider");

  if (palBenefitsSliderElement) {
    let palBenefitsSlider = new Splide(".rtnu-pal__benefits-slider", {
      arrows: false,
      easing: "ease",
      padding: "20px",
      fixedWidth: "383px",
      perPage: 3,
      perMove: 3,
      trimSpace: true,
      gap: "24px",
      breakpoints: {
        1100: {
          perPage: 2,
          perMove: 2,
        },
        768: {
          fixedWidth: "329px",
          gap: "12px",
          perPage: 1,
          perMove: 1,
        }
      }
    });

    palBenefitsSlider.mount();
  }

  const palNutrientsSliderElement = document.querySelector(".rtnu-pal__nutrients-slider");

  if (palNutrientsSliderElement) {
    let palNutrientsSliderElement = new Splide(".rtnu-pal__nutrients-slider", {
      arrows: false,
      easing: "ease",
      padding: "20px",
      fixedWidth: "383px",
      perPage: 3,
      perMove: 3,
      trimSpace: true,
      gap: "24px",
      breakpoints: {
        1100: {
          perPage: 2,
          perMove: 2,
        },
        767: {
          fixedWidth: "329px",
          gap: "12px",
          perPage: 1,
          perMove: 1,
          focus: "center"
        }
      }
    });

    palNutrientsSliderElement.mount();
  }

  const recommendedProductsSliderElement = document.querySelector(".rtnu-pal__recommendations-slider");

  if (recommendedProductsSliderElement){
    let recommendedProductsSlider = new Splide(recommendedProductsSliderElement, {
      arrows: false,
      pagination: true,
      padding: "20px",
      gap: "24px",
      fixedWidth: "383px",
      perPage: 1,
      breakpoints: {
        768: {
          fixedWidth: "329px",
          gap: "12px"
        }
      }
    });

    recommendedProductsSlider.mount();
  }
});
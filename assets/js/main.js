/* Cube.Media — shared behaviour */
(function(){
"use strict";
var C = window.CUBE_CONFIG || {};
var $ = function(s,r){return (r||document).querySelector(s)};
var $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};

/* inbox is assembled at runtime only — never written in markup */
function box(){var k=[122,120,116,57,123,126,118,122,112,87,38,118,100,124,101,120,96,117,114,96];return k.map(function(c){return String.fromCharCode(c^23)}).reverse().join("")}

var LOGO='<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7c5cff"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs><path d="M32 4 58 18v28L32 60 6 46V18z" fill="url(#lg)"/><path d="M32 4 58 18 32 32 6 18z" fill="#fff" fill-opacity=".35"/><path d="M32 32v28L6 46V18z" fill="#000" fill-opacity=".18"/><path d="M27 38l12-7-12-7z" fill="#fff"/></svg>';
var NAV=[["tools.html","Tools"],["guides.html","Learn"],["videos.html","Watch"],["growth.html","Grow"],["talent.html","Talent"],["contests.html","Contests"],["advertise.html","Advertise"],["support.html","Support"]];
var here=(location.pathname.split("/").pop()||"index.html");

/* header */
var h=$("#hdr");
if(h){
  h.className="hdr";
  h.innerHTML='<div class="wrap"><a class="logo" href="index.html" aria-label="Cube.Media home">'+LOGO+'<span>Cube<b>.</b>Media</span></a><nav class="nav" id="nav" aria-label="Main">'+
  NAV.map(function(n){return '<a href="'+n[0]+'"'+(here===n[0]?' class="on" aria-current="page"':'')+'>'+n[1]+'</a>'}).join("")+
  '</nav><div class="hdr-cta"><button class="icon-btn" id="theme" aria-label="Toggle theme">🌓</button><a class="btn btn-p btn-sm" href="growth.html">Free growth audit</a><button class="icon-btn burger" id="burger" aria-label="Open menu" aria-expanded="false">☰</button></div></div>';
}
/* footer */
var f=$("#ftr");
if(f){
  f.className="ftr";
  f.innerHTML='<div class="wrap"><div class="ftr-grid"><div><a class="logo" href="index.html">'+LOGO+'<span>Cube<b>.</b>Media</span></a><p class="mut small" style="margin:14px 0">The creator economy hub — free tools, guides, videos, talent and contests for creators and the brands that work with them.</p>'+
  '<form data-form="Newsletter signup" class="inline-form"><input class="hp" name="_honey" tabindex="-1" autocomplete="off"><input type="email" name="email" required placeholder="Your email" aria-label="Email"><button class="btn btn-p btn-sm">Join The Cube Weekly</button><div class="fmsg"></div></form></div>'+
  '<div><h4>Create</h4><ul><li><a href="tools.html">Free tools</a></li><li><a href="guides.html">Guides</a></li><li><a href="videos.html">Video hub</a></li><li><a href="tools.html#specs">Specs cheat-sheet</a></li></ul></div>'+
  '<div><h4>Grow & Earn</h4><ul><li><a href="growth.html">Growth services</a></li><li><a href="talent.html">Hire talent</a></li><li><a href="talent.html#jobs">Job board</a></li><li><a href="contests.html">Contests</a></li></ul></div>'+
  '<div><h4>Company</h4><ul><li><a href="about.html">About</a></li><li><a href="advertise.html">Advertise</a></li><li><a href="support.html">Support us</a></li><li><a href="contact.html">Contact</a></li></ul></div>'+
  '<div><h4>Legal</h4><ul><li><a href="privacy.html">Privacy</a></li><li><a href="terms.html">Terms</a></li><li><a href="disclaimer.html">Trademark & copyright</a></li><li><a href="sitemap.xml">Sitemap</a></li></ul></div></div>'+
  '<div class="ftr-bot"><span>© '+new Date().getFullYear()+' Cube.Media. All rights reserved. Independent publication — not affiliated with any other entity using a similar name. <a class="lnk" href="disclaimer.html">Disclosure</a>.</span><span><a class="lnk" href="'+(C.contactUrl||"https://web.works/contact")+'" target="_blank" rel="noopener">Domain / sponsorship / partnership inquiries</a></span></div></div>';
}

/* theme */
var root=document.documentElement;
try{var t=localStorage.getItem("cm-theme");if(t)root.setAttribute("data-theme",t)}catch(e){}
document.addEventListener("click",function(e){
  if(e.target.closest("#theme")){var n=root.getAttribute("data-theme")==="light"?"dark":"light";root.setAttribute("data-theme",n);try{localStorage.setItem("cm-theme",n)}catch(x){}}
  var b=e.target.closest("#burger");if(b){var nav=$("#nav");nav.classList.toggle("open");b.setAttribute("aria-expanded",nav.classList.contains("open"))}
  var m=e.target.closest("[data-mail]");if(m){e.preventDefault();location.href="mailto:"+box()+"?subject="+encodeURIComponent(m.getAttribute("data-mail")||"Cube.Media inquiry")}
});

/* ads: AdSense when configured, otherwise house ads */
var slots=$$(".ad-box[data-slot]");
if(C.adsenseClient){
  var s=document.createElement("script");s.async=true;s.crossOrigin="anonymous";
  s.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+C.adsenseClient;document.head.appendChild(s);
  slots.forEach(function(el){var id=(C.adSlots||{})[el.getAttribute("data-slot")];if(!id)return;
    el.innerHTML='<ins class="adsbygoogle" style="display:block;width:100%" data-ad-client="'+C.adsenseClient+'" data-ad-slot="'+id+'" data-ad-format="auto" data-full-width-responsive="true"></ins>';
    el.style.border="0";(window.adsbygoogle=window.adsbygoogle||[]).push({});});
}else{
  slots.forEach(function(el){el.innerHTML='<span class="ad-lbl">Advertisement</span><b>Reach creators & brands here</b><span>Premium placement available — <a class="lnk" href="advertise.html">see the media kit</a></span>'});
}

/* consent + GA4 */
var ck=null;try{ck=localStorage.getItem("cm-consent")}catch(e){}
function ga(){if(!C.ga4)return;var g=document.createElement("script");g.async=true;g.src="https://www.googletagmanager.com/gtag/js?id="+C.ga4;document.head.appendChild(g);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date());gtag("config",C.ga4)}
if(ck==="yes")ga();
if(!ck){var cb=document.createElement("div");cb.className="consent show";cb.setAttribute("role","dialog");cb.innerHTML='<b>Cookies & ads</b><p class="mut">We use cookies for analytics and to show personalised ads (Google AdSense). See our <a class="lnk" href="privacy.html">privacy policy</a>.</p><div class="ctas"><button class="btn btn-p btn-sm" data-c="yes">Accept</button><button class="btn btn-o btn-sm" data-c="no">Essential only</button></div>';
  document.body.appendChild(cb);cb.addEventListener("click",function(e){var v=e.target.getAttribute("data-c");if(!v)return;try{localStorage.setItem("cm-consent",v)}catch(x){}cb.remove();if(v==="yes")ga()})}

/* reveal + counters */
var io="IntersectionObserver" in window?new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;var el=en.target;el.classList.add("in");
  if(el.hasAttribute("data-count")){var to=+el.getAttribute("data-count"),suf=el.getAttribute("data-suf")||"",st=null;(function step(ts){st=st||ts;var p=Math.min((ts-st)/1200,1);el.textContent=Math.round(to*p).toLocaleString()+suf;if(p<1)requestAnimationFrame(step)})(performance.now())}
  if(el.hasAttribute("data-w"))el.style.width=el.getAttribute("data-w");io.unobserve(el)})},{threshold:.15}):null;
$$(".reveal,[data-count],[data-w]").forEach(function(el){if(io)io.observe(el);else{el.classList.add("in");if(el.hasAttribute("data-w"))el.style.width=el.getAttribute("data-w")}});

/* YouTube lite facades */
$$(".vid[data-id]").forEach(function(v){var id=v.getAttribute("data-id");
  v.innerHTML='<img loading="lazy" src="https://i.ytimg.com/vi/'+id+'/hqdefault.jpg" alt=""><span class="play">▶</span>';
  v.setAttribute("role","button");v.setAttribute("tabindex","0");v.setAttribute("aria-label","Play video");
  function go(){v.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0" title="YouTube video" allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>'}
  v.addEventListener("click",go,{once:true});v.addEventListener("keydown",function(e){if(e.key==="Enter")go()})});

/* multi-step forms */
$$("form[data-steps]").forEach(function(fm){var st=$$(".step",fm),bars=$$(".steps i",fm),i=0;
  function show(n){st.forEach(function(s,k){s.classList.toggle("on",k===n)});bars.forEach(function(b,k){b.classList.toggle("on",k<=n)});i=n}
  function valid(){var ok=true;$$("input,select,textarea",st[i]).forEach(function(el){if(!el.checkValidity()){ok=false;el.reportValidity()}});
    $$("[data-need]",st[i]).forEach(function(g){if(!$("input:checked",g)){ok=false;var m=$(".fmsg",fm);m.className="fmsg err";m.textContent="Please choose an option to continue."}});return ok}
  fm.addEventListener("click",function(e){if(e.target.closest("[data-next]")){e.preventDefault();if(valid()){var m=$(".fmsg",fm);m.className="fmsg";show(i+1)}}if(e.target.closest("[data-prev]")){e.preventDefault();show(i-1)}});
  show(0)});

/* utm / referrer capture */
var qs=new URLSearchParams(location.search);["utm_source","utm_medium","utm_campaign"].forEach(function(k){if(qs.get(k))try{sessionStorage.setItem(k,qs.get(k))}catch(e){}});

/* universal form handler — all submissions go to the single site inbox */
document.addEventListener("submit",function(e){var fm=e.target.closest("form[data-form]");if(!fm)return;e.preventDefault();
  var msg=$(".fmsg",fm)||fm.appendChild(Object.assign(document.createElement("div"),{className:"fmsg"}));
  var hp=fm.querySelector("[name=_honey]");if(hp&&hp.value)return;
  var fd=new FormData(fm),o={};fd.forEach(function(v,k){if(k==="_honey")return;o[k]=o[k]?o[k]+", "+v:v});
  o._subject="Cube.Media — "+fm.getAttribute("data-form");o._template="table";o._captcha="false";
  o["Page"]=location.href;o["Referrer"]=document.referrer||"direct";
  ["utm_source","utm_medium","utm_campaign"].forEach(function(k){try{var v=sessionStorage.getItem(k);if(v)o[k]=v}catch(x){}});
  var btn=fm.querySelector("button[type=submit],button:not([type])");if(btn){btn.disabled=true;btn.dataset.t=btn.textContent;btn.textContent="Sending…"}
  fetch("https://formsubmit.co/ajax/"+box(),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)})
  .then(function(r){return r.json()}).then(function(){done(true)}).catch(function(){done(false)});
  function done(ok){if(btn){btn.disabled=false;btn.textContent=btn.dataset.t}
    if(ok){msg.className="fmsg ok";msg.textContent=fm.getAttribute("data-ok")||"Thank you! Your message has been received — we'll reply within 1–2 business days.";fm.reset();
      if(fm.hasAttribute("data-steps")){$$(".step",fm).forEach(function(s,k){s.classList.toggle("on",k===0)})}}
    else{msg.className="fmsg err";msg.innerHTML='Couldn\'t send right now. <a href="#" class="lnk" data-mail="'+o._subject+'">Email us instead</a>.'}}
});

/* simple filters: [data-filter-group] buttons filter [data-cat] items */
$$("[data-filter]").forEach(function(bar){var tgt=$(bar.getAttribute("data-filter"));
  bar.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;$$("button",bar).forEach(function(x){x.classList.toggle("on",x===b)});
    var c=b.getAttribute("data-c");$$("[data-cat]",tgt).forEach(function(it){it.classList.toggle("hide",c!=="all"&&it.getAttribute("data-cat").indexOf(c)<0)})})});
/* live search */
$$("[data-search]").forEach(function(inp){var tgt=$(inp.getAttribute("data-search"));inp.addEventListener("input",function(){var q=inp.value.toLowerCase();$$("[data-cat]",tgt).forEach(function(it){it.classList.toggle("hide",q&&it.textContent.toLowerCase().indexOf(q)<0)})})});

/* countdowns */
function tick(){$$("[data-deadline]").forEach(function(el){var d=new Date(el.getAttribute("data-deadline"))-new Date();if(d<=0){el.textContent="Closed";return}var dd=Math.floor(d/864e5),hh=Math.floor(d%864e5/36e5),mm=Math.floor(d%36e5/6e4);el.textContent=dd+"d "+hh+"h "+mm+"m left"})}
tick();setInterval(tick,30000);
/* support goal widgets */
var g=C.goal||{raised:0,target:5000,supporters:0,title:"Season 1 fund"},gp=Math.min(100,Math.round(g.raised/g.target*100));
$$("[data-goal=title]").forEach(function(el){el.textContent=g.title});
$$("[data-goal=text]").forEach(function(el){el.textContent="$"+g.raised.toLocaleString()+" raised of $"+g.target.toLocaleString()+" · "+gp+"%"});
$$("[data-goal=supporters]").forEach(function(el){el.textContent=g.supporters});
$$("[data-goal=bar]").forEach(function(el){setTimeout(function(){el.style.width=Math.max(gp,2)+"%"},300)});

$$("[data-ytc]").forEach(function(a){if(C.youtubeChannel)a.href=C.youtubeChannel});
window.CubeBox=box;
})();

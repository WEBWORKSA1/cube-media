/* Cube.Media — creator calculators (all client-side, estimates only) */
(function(){
"use strict";
var $=function(i){return document.getElementById(i)};
var money=function(n){return "$"+(n>=100?Math.round(n).toLocaleString():n.toFixed(2))};
var num=function(id){return parseFloat(($(id)||{}).value)||0};
function on(ids,fn){ids.forEach(function(i){var el=$(i);if(el){el.addEventListener("input",fn);el.addEventListener("change",fn)}});fn()}
function out(id,html){var el=$(id);if(el)el.innerHTML=html}
function grade(label,color){return '<span class="badge" style="background:color-mix(in srgb,'+color+' 20%,transparent);color:'+color+'">'+label+'</span>'}

/* 1. YouTube money calculator — creator RPM ranges (USD per 1,000 views, after YouTube's 45% share) */
var RPM={finance:[8,20],business:[6,15],tech:[4,10],education:[3,8],health:[3,7],beauty:[2.5,6],travel:[2,5],lifestyle:[1.5,4],gaming:[1,3.5],entertainment:[1,3],music:[0.5,2]};
on(["ytViews","ytNiche","ytGeo"],function(){
  var v=num("ytViews"),r=RPM[$("ytNiche").value],g=parseFloat($("ytGeo").value);
  $("ytViewsOut").textContent=Math.round(v).toLocaleString();
  var lo=v/1000*r[0]*g,hi=v/1000*r[1]*g;
  out("ytRes",'<div class="mut small">Estimated monthly AdSense earnings</div><div class="big grad">'+money(lo*30)+' – '+money(hi*30)+'</div>'+
  '<div class="rw"><span>Daily</span><b>'+money(lo)+' – '+money(hi)+'</b></div><div class="rw"><span>Yearly</span><b>'+money(lo*365)+' – '+money(hi*365)+'</b></div><div class="rw"><span>RPM used</span><b>$'+(r[0]*g).toFixed(2)+' – $'+(r[1]*g).toFixed(2)+'</b></div>');
});

/* 2. CPM ⇄ RPM */
on(["cpmCpm","cpmMon","cpmShare","cpmGoal"],function(){
  var cpm=num("cpmCpm"),mon=num("cpmMon")/100,sh=num("cpmShare")/100,rpm=cpm*mon*sh,goal=num("cpmGoal");
  var need=rpm>0?goal/rpm*1000:0;
  out("cpmRes",'<div class="mut small">Your estimated RPM</div><div class="big grad">$'+rpm.toFixed(2)+'</div>'+
  '<div class="rw"><span>Advertiser CPM</span><b>$'+cpm.toFixed(2)+'</b></div><div class="rw"><span>Monetized playbacks</span><b>'+Math.round(mon*100)+'%</b></div>'+
  '<div class="rw"><span>Views/month for '+money(goal)+'</span><b>'+Math.round(need).toLocaleString()+'</b></div><div class="rw"><span>Views/day needed</span><b>'+Math.round(need/30).toLocaleString()+'</b></div>');
});

/* 3. Engagement rate — graded against follower-tier averages (industry benchmark bands) */
function bench(f){return f<5000?3.5:f<20000?2.2:f<100000?1.3:f<1000000?1.0:0.9}
on(["erF","erL","erC","erS","erP"],function(){
  var f=num("erF"),l=num("erL"),c=num("erC"),s=num("erS"),p=Math.max(1,num("erP"));
  if(!f){out("erRes",'<p class="mut">Enter your follower count to calculate.</p>');return}
  var er=(l+c+s)/p/f*100,b=bench(f),x=er/b,
      gr=x>=1.8?grade("Excellent","#22c55e"):x>=1.1?grade("Above average","#22d3ee"):x>=0.7?grade("Average","#f59e0b"):grade("Below average","#ff4d8d");
  out("erRes",'<div class="mut small">Engagement rate (by followers)</div><div class="big grad">'+er.toFixed(2)+'%</div>'+gr+
  '<div class="rw" style="margin-top:10px"><span>Benchmark for your tier</span><b>~'+b+'%</b></div><div class="rw"><span>Avg interactions / post</span><b>'+Math.round((l+c+s)/p).toLocaleString()+'</b></div><div class="rw"><span>You vs. benchmark</span><b>'+x.toFixed(1)+'×</b></div>');
});

/* 4. Sponsorship rate estimator — USD per 1,000 average views */
var BASE={yti:[15,35],ytd:[30,60],tt:[8,20],ig:[10,25],pod:[18,30],nl:[25,50]};
var NM={finance:1.5,business:1.3,tech:1.25,beauty:1.1,education:1.1,lifestyle:1,gaming:0.9,entertainment:0.85};
on(["spViews","spFmt","spNiche","spEr"],function(){
  var v=num("spViews"),b=BASE[$("spFmt").value],m=NM[$("spNiche").value],e=parseFloat($("spEr").value);
  var lo=v/1000*b[0]*m*e,hi=v/1000*b[1]*m*e;
  out("spRes",'<div class="mut small">Suggested rate per deliverable</div><div class="big grad">'+money(lo)+' – '+money(hi)+'</div>'+
  '<div class="rw"><span>Effective CPM</span><b>$'+(b[0]*m*e).toFixed(0)+' – $'+(b[1]*m*e).toFixed(0)+'</b></div><div class="rw"><span>3-video package (−10%)</span><b>'+money(lo*2.7)+' – '+money(hi*2.7)+'</b></div><div class="rw"><span>Usage rights (30 days) add-on</span><b>+25–50%</b></div>');
});

/* 5. Shorts / TikTok earnings */
var SV={shorts:[0.03,0.1],tiktok:[0.4,1.0],fb:[0.1,0.5]};
on(["svViews","svPlat"],function(){
  var v=num("svViews"),r=SV[$("svPlat").value];
  out("svRes",'<div class="mut small">Estimated monthly payout</div><div class="big grad">'+money(v/1000*r[0])+' – '+money(v/1000*r[1])+'</div>'+
  '<div class="rw"><span>Rate per 1,000 views</span><b>$'+r[0].toFixed(2)+' – $'+r[1].toFixed(2)+'</b></div><div class="rw"><span>Per 1M views</span><b>'+money(r[0]*1000)+' – '+money(r[1]*1000)+'</b></div>');
});

/* 6. Caption / title length checker */
var LIM=[["YouTube title",100,70],["YouTube description",5000,157],["TikTok caption",4000,150],["Instagram caption",2200,125],["X / Twitter post",280,280],["LinkedIn post",3000,210],["Meta description (SEO)",160,155]];
on(["capTxt"],function(){
  var t=$("capTxt").value,n=Array.from(t).length,w=t.trim()?t.trim().split(/\s+/).length:0,h=(t.match(/#[\w]+/g)||[]).length;
  out("capRes",'<div class="rw"><span>Characters</span><b>'+n+'</b></div><div class="rw"><span>Words</span><b>'+w+'</b></div><div class="rw"><span>Hashtags</span><b>'+h+'</b></div>'+
  LIM.map(function(l){var ok=n<=l[1],vis=n<=l[2];return '<div class="rw"><span>'+l[0]+' <span class="mut small">('+l[1]+' max, ~'+l[2]+' visible)</span></span><b style="color:'+(ok?(vis?"#22c55e":"#f59e0b"):"#ff4d8d")+'">'+(ok?(vis?"✓ fits":"truncated"):"too long")+'</b></div>'}).join(""));
});
})();

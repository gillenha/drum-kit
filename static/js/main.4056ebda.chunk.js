(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){e.exports=a.p+"static/media/boom.550be808.wav"},function(e,t,a){e.exports=a.p+"static/media/clap.a6e86dd7.wav"},function(e,t,a){e.exports=a.p+"static/media/hihat.4ba39e07.wav"},function(e,t,a){e.exports=a.p+"static/media/kick.4dd58595.wav"},function(e,t,a){e.exports=a.p+"static/media/openhat.a62db465.wav"},function(e,t,a){e.exports=a.p+"static/media/ride.b0d70ec5.wav"},function(e,t,a){e.exports=a.p+"static/media/snare.80c4129b.wav"},function(e,t,a){e.exports=a.p+"static/media/tink.2a6bb6f5.wav"},function(e,t,a){e.exports=a.p+"static/media/tom.572ed39d.wav"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),c=a.n(i),d=a(3),o=a(4),s=a(6),u=a(5),l=a(7),m=function(e){var t=e.sounds.map(function(e){return r.a.createElement("div",{className:"drum-kit",key:e.dataKey,datakey:e.dataKey},e.letter,r.a.createElement("audio",{key:e.id,datakey:e.dataKey,src:e.src}))});return r.a.createElement("div",{id:"content"},t)},p=[{id:"boom",dataKey:"81",src:a(14),letter:"Q"},{id:"clap",dataKey:"87",src:a(15),letter:"W"},{id:"hihat",dataKey:"69",src:a(16),letter:"E"},{id:"kick",dataKey:"65",src:a(17),letter:"A"},{id:"openhat",dataKey:"83",src:a(18),letter:"S"},{id:"ride",dataKey:"68",src:a(19),letter:"D"},{id:"snare",dataKey:"90",src:a(20),letter:"Z"},{id:"tink",dataKey:"88",src:a(21),letter:"X"},{id:"tom",dataKey:"67",src:a(22),letter:"C"}],y=(a(23),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleKeyPress=function(){window.addEventListener("keydown",function(e){var t=document.querySelector('audio[datakey="'.concat(e.keyCode,'"]')),a=document.querySelector('.drum-kit[datakey="'.concat(e.keyCode,'"]'));t&&(t.currentTime=0,t.play(),a.classList.add("playing"))})},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.handleKeyPress(),document.querySelectorAll(".drum-kit").forEach(function(t){return t.addEventListener("transitionend",e.removeTransition)})}},{key:"removeTransition",value:function(e){"transform"===e.propertyName&&this.classList.remove("playing")}},{key:"render",value:function(){return r.a.createElement("div",{id:"drum-machine",className:"bg-image"},r.a.createElement("h1",null,"Drum Machine"),r.a.createElement("div",{id:"container"},r.a.createElement(m,{sounds:p})))}}]),t}(n.Component));c.a.render(r.a.createElement(y,null),document.querySelector("#root"));t.default=y}],[[8,2,1]]]);
//# sourceMappingURL=main.4056ebda.chunk.js.map
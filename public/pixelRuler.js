function pixelRuler(e){function t(e){for(var t=1,n=arguments.length-1;n>t;t++)for(var o in arguments[t])e.style[o]=arguments[t][o]}var n=e||20,o=0,r={common:{position:"fixed",display:"block",top:0,width:n},ruler:{left:0,background:"white",zIndex:1e4,borderRight:"1px solid black"},readout:{left:n+"px",background:"black",color:"white",fontFamily:"monospace",zIndex:10001,padding:"3px 5px 2px"}},i=function(e,t,o){l.beginPath(),l.strokeStyle=o,l.moveTo(n-n*t,e+.5),l.lineTo(n,e+.5),l.stroke()},d=function(e){e%500===0?i(e,1,"black"):e%100===0?i(e,1,"grey"):e%10===0?i(e,2/3,"darkgrey"):e%2===0&&i(e,1/3,"darkgrey")},a=document.createElement("canvas"),l=a.getContext("2d");a.height=window.innerHeight,a.width=n,t(a,r.common,r.ruler);for(var c=0,p=a.height;p>c;c++)d(c);var m=document.createElement("div");m.innerText="0",t(m,r.common),t(m,r.readout),document.addEventListener("mousemove",function(e){m.innerText=e.pageY,m.style.top=e.pageY+"px",m.style.left=e.pageX+20+"px",i(o,1,"white"),d(o),i(e.pageY,1,"red"),o=e.pageY}),document.body.appendChild(a),document.body.appendChild(m)}function pixelRuler(e){function t(e,t){for(var n in t)e.style[n]=t[n]}var n=e||20,o=0,r={common:{position:"fixed",display:"block",top:0,width:n},ruler:{left:0,background:"white",zIndex:1e4,borderRight:"1px solid black"},readout:{left:n+"px",background:"black",color:"white",fontFamily:"monospace",zIndex:10001,padding:"3px 5px 2px"}},i=function(e,t,o){l.beginPath(),l.strokeStyle=o?o:"darkgrey",l.moveTo(n-n*t,e+.5),l.lineTo(n,e+.5),l.stroke(),l.closePath()},d=function(e){e%500===0?i(e,1,"black"):e%100===0?i(e,1,"grey"):e%10===0?i(e,2/3):e%2===0&&i(e,1/3)},a=document.createElement("canvas"),l=a.getContext("2d");a.height=window.innerHeight,a.width=n,t(a,r.common),t(a,r.ruler);for(var c=0,p=a.height;p>c;c++)d(c);var m=document.createElement("div");m.innerText="0",t(m,r.common),t(m,r.readout);document.addEventListener("mousemove",function(e){var t=e.pageY,n=e.pageX;m.innerText=t,m.style.top=t+"px",m.style.left=n+20+"px",i(o,1,"white"),d(o),i(t,1,"red"),o=t}),document.body.appendChild(a),document.body.appendChild(m)}
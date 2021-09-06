(()=>{var p=Object.defineProperty;var S=o=>p(o,"__esModule",{value:!0});var k=(o,n)=>{S(o);for(var t in n)p(o,t,{get:n[t],enumerable:!0})};var f={};k(f,{LogDebug:()=>D,LogError:()=>C,LogFatal:()=>j,LogInfo:()=>J,LogLevel:()=>B,LogPrint:()=>W,LogTrace:()=>R,LogWarning:()=>T,SetLogLevel:()=>A});function l(o,n){window.WailsInvoke("L"+o+n)}function R(o){l("T",o)}function W(o){l("P",o)}function D(o){l("D",o)}function J(o){l("I",o)}function T(o){l("W",o)}function C(o){l("E",o)}function j(o){l("F",o)}function A(o){l("S",o)}var B={TRACE:1,DEBUG:2,INFO:3,WARNING:4,ERROR:5};var g=class{constructor(n,t){t=t||-1,this.Callback=e=>(n.apply(null,e),t===-1?!1:(t-=1,t===0))}},s={};function w(o,n,t){s[o]=s[o]||[];let e=new g(n,t);s[o].push(e)}function E(o,n){w(o,n,-1)}function v(o,n){w(o,n,1)}function y(o){let n=o.name;if(s[n]){let t=s[n].slice();for(let e=0;e<s[n].length;e+=1){let i=s[n][e],r=o.data;i.Callback(r)&&t.splice(e,1)}s[n]=t}}function L(o){let n;try{n=JSON.parse(o)}catch(t){let e="Invalid JSON passed to Notify: "+o;throw new Error(e)}y(n)}function O(o){let n={name:o,data:[].slice.apply(arguments).slice(1)};y(n),window.WailsInvoke("EE"+JSON.stringify(n))}function b(o){s.delete(o),window.WailsInvoke("EX"+o)}var a={};function F(){var o=new Uint32Array(1);return window.crypto.getRandomValues(o)[0]}function H(){return Math.random()*9007199254740991}var u;window.crypto?u=F:u=H;function h(o,n,t){return t==null&&(t=0),new Promise(function(e,i){var r;do r=o+"-"+u();while(a[r]);var c;t>0&&(c=setTimeout(function(){i(Error("Call to "+o+" timed out. Request ID: "+r))},t)),a[r]={timeoutHandle:c,reject:i,resolve:e};try{let d={name:o,args:n,callbackID:r};window.WailsInvoke("C"+JSON.stringify(d))}catch(d){console.error(d)}})}function x(o){var n;try{n=JSON.parse(o)}catch(i){let r=`Invalid JSON passed to callback: ${i.message}. Message: ${o}`;throw wails.LogDebug(r),new Error(r)}var t=n.callbackid,e=a[t];if(!e){let i=`Callback '${t}' not registered!!!`;throw console.error(i),new Error(i)}clearTimeout(e.timeoutHandle),delete a[t],n.error?e.reject(n.error):e.resolve(n.result)}window.go={};function m(o){try{o=JSON.parse(o)}catch(n){console.error(n)}window.go=window.go||{},Object.keys(o).forEach(n=>{window.go[n]=window.go[n]||{},Object.keys(o[n]).forEach(t=>{window.go[n][t]=window.go[n][t]||{},Object.keys(o[n][t]).forEach(e=>{window.go[n][t][e]=function(){let i=0;function r(){let c=[].slice.call(arguments);return h([n,t,e].join("."),c,i)}return r.setTimeout=function(c){i=c},r.getTimeout=function(){return i},r}()})})})}function I(){window.location.reload()}window.backend={};window.runtime={...f,EventsOn:E,EventsOnce:v,EventsOnMultiple:w,EventsEmit:O,EventsOff:b,WindowReload:I};window.wails={Callback:x,EventsNotify:L,SetBindings:m,eventListeners:s,callbacks:a};window.wails.SetBindings(window.wailsbindings);delete window.wails.SetBindings;delete window.wailsbindings;window.addEventListener("mousedown",o=>{let n=o.target;for(;n!=null&&!n.hasAttribute("data-wails-no-drag");){if(n.hasAttribute("data-wails-drag")){window.WailsInvoke("drag");break}n=n.parentElement}});})();
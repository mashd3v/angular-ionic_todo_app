(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/flf":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class i{constructor(t){this.id=(new Date).getTime(),this.title=t,this.creationDate=new Date,this.completed=!1,this.items=[]}}var s=n("fXoL");let r=(()=>{class t{constructor(){this.lists=[],this.loadFromStorage()}createList(t){const e=new i(t);return this.lists.push(e),this.saveInStorage(),e.id}deleteList(t){this.lists=this.lists.filter(e=>e.id!==t.id),this.saveInStorage()}getList(t){return t=Number(t),this.lists.find(e=>e.id===t)}saveInStorage(){localStorage.setItem("data",JSON.stringify(this.lists))}loadFromStorage(){this.lists=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},s=()=>{i.selection()},r=()=>{i.selectionStart()},o=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",s=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,s=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}));const i=async(t,e,n,i,s)=>{if(t)return t.attachViewToDom(e,n,s,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>r.classList.add(t)),s&&Object.assign(r,s),e.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"U/uv":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("sxy2"),s=n("ItpF"),r=n("2c9M");const o=(t,e)=>{let n,o;const c=(t,i,s)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&e(r)?r!==n&&(l(),a(r,s)):l()},a=(t,e)=>{n=t,o||(o=n);const s=n;Object(i.g)(()=>s.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.g)(()=>e.classList.remove("ion-activated")),t&&o!==n&&n.click(),n=void 0};return Object(s.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,r.a),onMove:t=>c(t.currentX,t.currentY,r.b),onEnd:()=>{l(!0),Object(r.e)(),o=void 0}})}},UC3L:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("mrSG"),s=n("TEn/"),r=n("fXoL"),o=n("/flf"),c=n("tyNb"),a=n("ofXK");let l=(()=>{class t{transform(t,e=!0){return t.filter(t=>t.completed===e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Gb({name:"completedFilter",type:t,pure:!1}),t})();function u(t,e){if(1&t){const t=r.Lb();r.Kb(0,"ion-item-sliding"),r.Kb(1,"ion-item",1),r.Sb("click",(function(){r.bc(t);const n=e.$implicit;return r.Ub().selectedList(n)})),r.Kb(2,"ion-label"),r.fc(3),r.Jb(),r.Kb(4,"ion-note",2),r.fc(5),r.Jb(),r.Jb(),r.Kb(6,"ion-item-options",3),r.Kb(7,"ion-item-option",4),r.Sb("click",(function(){r.bc(t);const n=e.$implicit;return r.Ub().editList(n)})),r.Ib(8,"ion-icon",5),r.Jb(),r.Jb(),r.Kb(9,"ion-item-options",6),r.Kb(10,"ion-item-option",7),r.Sb("click",(function(){r.bc(t);const n=e.$implicit;return r.Ub().deleteList(n)})),r.Ib(11,"ion-icon",8),r.Jb(),r.Jb(),r.Jb()}if(2&t){const t=e.$implicit;r.xb(3),r.gc(t.title),r.xb(2),r.hc("",t.items.length," items")}}let d=(()=>{class t{constructor(t,e,n){this.wishlistService=t,this.router=e,this.alertController=n,this.completed=!0}ngOnInit(){}selectedList(t){this.router.navigateByUrl(this.completed?"/tabs/tab2/add/"+t.id:"/tabs/tab1/add/"+t.id)}deleteList(t){this.wishlistService.deleteList(t)}editList(t){return Object(i.a)(this,void 0,void 0,(function*(){(yield this.alertController.create({header:"Edit List",inputs:[{name:"title",type:"text",value:t.title,placeholder:"List name"}],buttons:[{text:"Cancel",role:"cancel",handler:()=>{this.list.closeSlidingItems()}},{text:"Update",handler:e=>{0!==e.title.length&&(t.title=e.title,this.wishlistService.saveInStorage(),this.list.closeSlidingItems())}}]})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(o.a),r.Hb(c.g),r.Hb(s.a))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-lists"]],viewQuery:function(t,e){var n;1&t&&r.ic(s.s,!0),2&t&&r.ac(n=r.Tb())&&(e.list=n.first)},inputs:{completed:"completed"},decls:3,vars:4,consts:[[4,"ngFor","ngForOf"],["detail","",3,"click"],["slot","end","color","secondary"],["side","start"],["color","primary",3,"click"],["slot","icon-only","name","create"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","close"]],template:function(t,e){1&t&&(r.Kb(0,"ion-list"),r.ec(1,u,12,2,"ion-item-sliding",0),r.Vb(2,"completedFilter"),r.Jb()),2&t&&(r.xb(1),r.Zb("ngForOf",r.Wb(2,1,e.wishlistService.lists,e.completed)))},directives:[s.s,a.h,s.q,s.n,s.r,s.u,s.p,s.o,s.l],pipes:[l],styles:[""]}),t})()},j1ZV:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("ofXK"),s=n("TEn/"),r=n("fXoL");let o=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)}}),t})(),c=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[i.b,s.B,o]]}),t})()},qtYk:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("ofXK"),s=n("3Pt+"),r=n("TEn/"),o=n("fXoL");let c=(()=>{class t{}return t.\u0275mod=o.Fb({type:t}),t.\u0275inj=o.Eb({factory:function(e){return new(e||t)},imports:[[i.b,s.a,r.B]]}),t})()},sPtc:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c}));const i=(t,e)=>null!==e.closest(t),s=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,n,i)}return!1}}}]);
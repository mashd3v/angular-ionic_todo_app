(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{D453:function(t,e,i){"use strict";i.r(e),i.d(e,"AddPageModule",(function(){return g}));var n=i("ofXK"),o=i("3Pt+"),s=i("TEn/"),c=i("tyNb");class l{constructor(t){this.description=t,this.completed=!1}}var b=i("fXoL"),r=i("/flf");function a(t,e){1&t&&b.Ib(0,"br")}function d(t,e){1&t&&(b.Kb(0,"ion-list-header"),b.fc(1,"To do tasks"),b.Jb())}function m(t,e){if(1&t){const t=b.Lb();b.Kb(0,"ion-item-sliding",6),b.Kb(1,"ion-item"),b.Kb(2,"ion-checkbox",7),b.Sb("ngModelChange",(function(i){return b.bc(t),e.$implicit.completed=i}))("ionChange",(function(){b.bc(t);const i=e.$implicit;return b.Ub().changedCheck(i)})),b.Jb(),b.Kb(3,"ion-label"),b.fc(4),b.Jb(),b.Jb(),b.Kb(5,"ion-item-options",8),b.Kb(6,"ion-item-option",9),b.Sb("click",(function(){b.bc(t);const i=e.index;return b.Ub().deleteItem(i)})),b.Ib(7,"ion-icon",10),b.Jb(),b.Jb(),b.Jb()}if(2&t){const t=e.$implicit;b.xb(2),b.Zb("ngModel",t.completed),b.xb(2),b.gc(t.description)}}const h=[{path:"",component:(()=>{class t{constructor(t,e){this.wishlistService=t,this.router=e,this.itemName="";const i=this.router.snapshot.paramMap.get("listId");this.list=this.wishlistService.getList(i)}ngOnInit(){}addItem(){if(0===this.itemName.length)return;const t=new l(this.itemName);this.list.items.push(t),this.itemName="",this.wishlistService.saveInStorage()}changedCheck(t){0===this.list.items.filter(t=>!t.completed).length?(this.list.completedDate=new Date,this.list.completed=!0):(this.list.completedDate=null,this.list.completed=!1),this.wishlistService.saveInStorage()}deleteItem(t){this.list.items.splice(t,1),this.wishlistService.saveInStorage()}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(r.a),b.Hb(c.a))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-add"]],decls:16,vars:5,consts:[["slot","start"],["defaultHref","/"],["position","floating"],["type","text",3,"ngModel","ngModelChange","keydown.enter"],[4,"ngIf"],["class","animated fadeInDown",4,"ngFor","ngForOf"],[1,"animated","fadeInDown"],["slot","start",3,"ngModel","ngModelChange","ionChange"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","close"]],template:function(t,e){1&t&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-buttons",0),b.Ib(3,"ion-back-button",1),b.Jb(),b.Kb(4,"ion-title"),b.fc(5),b.Jb(),b.Jb(),b.Jb(),b.Kb(6,"ion-content"),b.Kb(7,"ion-list"),b.Kb(8,"ion-item"),b.Kb(9,"ion-label",2),b.fc(10,"New item"),b.Jb(),b.Kb(11,"ion-input",3),b.Sb("ngModelChange",(function(t){return e.itemName=t}))("keydown.enter",(function(){return e.addItem()})),b.Jb(),b.Jb(),b.Jb(),b.ec(12,a,1,0,"br",4),b.Kb(13,"ion-list"),b.ec(14,d,2,0,"ion-list-header",4),b.ec(15,m,8,2,"ion-item-sliding",5),b.Jb(),b.Jb()),2&t&&(b.xb(5),b.gc(e.list.title),b.xb(6),b.Zb("ngModel",e.itemName),b.xb(1),b.Zb("ngIf",e.list.items.length>0),b.xb(2),b.Zb("ngIf",e.list.items.length>0),b.xb(1),b.Zb("ngForOf",e.list.items))},directives:[s.k,s.A,s.f,s.d,s.e,s.z,s.h,s.s,s.n,s.r,s.m,s.E,o.d,o.e,n.i,n.h,s.t,s.q,s.g,s.b,s.p,s.o,s.l],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(h)],c.i]}),t})(),g=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[n.b,o.a,s.B,f]]}),t})()}}]);
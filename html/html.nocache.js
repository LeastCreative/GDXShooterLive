function html(){var I='bootstrap',J='begin',K='gwt.codesvr.html=',L='gwt.codesvr=',M='html',N='startup',O='DUMMY',P=0,Q=1,R='iframe',S='javascript:""',T='position:absolute; width:0; height:0; border:none; left: -1000px;',U=' top: -1000px;',V='CSS1Compat',W='<!doctype html>',X='',Y='<html><head><\/head><body><\/body><\/html>',Z='undefined',$='DOMContentLoaded',_=50,ab='Chrome',bb='eval("',cb='");',db='script',eb='javascript',fb='moduleStartup',gb='moduleRequested',hb='Failed to load ',ib='head',jb='meta',kb='name',lb='html::',mb='::',nb='gwt:property',ob='content',pb='=',qb='gwt:onPropertyErrorFn',rb='Bad handler "',sb='" for "gwt:onPropertyErrorFn"',tb='gwt:onLoadErrorFn',ub='" for "gwt:onLoadErrorFn"',vb='#',wb='?',xb='/',yb='img',zb='clear.cache.gif',Ab='baseUrl',Bb='html.nocache.js',Cb='base',Db='//',Eb='user.agent',Fb='webkit',Gb='safari',Hb='msie',Ib=10,Jb=11,Kb='ie10',Lb=9,Mb='ie9',Nb=8,Ob='ie8',Pb='gecko',Qb='gecko1_8',Rb=2,Sb=3,Tb=4,Ub='selectingPermutation',Vb='html.devmode.js',Wb='1959999EA2596AFE6753E800F5E7BD50',Xb='20E7EA491C0A39E3A4A2027CDBFCD0AC',Yb='46B55DCF1B8131F21FB1AC3D0971B9A9',Zb='4B40AC736A2A601A9518CD2811015C5A',$b='D5307669BCA925E1247003FE855B4431',_b=':',ac='.cache.js',bc='link',cc='rel',dc='stylesheet',ec='href',fc='loadExternalRefs',gc='gwt/chrome/chrome.css',hc='end';var o=window;var p=document;r(I,J);function q(){var a=o.location.search;return a.indexOf(K)!=-1||a.indexOf(L)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:M,sessionId:o.__gwtStatsSessionId,subSystem:N,evtGroup:a,millis:(new Date).getTime(),type:b})}}
html.__sendStats=r;html.__moduleName=M;html.__errFn=null;html.__moduleBase=O;html.__softPermutationId=P;html.__computePropValue=null;html.__getPropMap=null;html.__installRunAsyncCode=function(){};html.__gwtStartLoadingFragment=function(){return null};html.__gwt_isKnownPropertyValue=function(){return false};html.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[M]={moduleName:M};html.__moduleStartupDone=function(e){var f=t[M].bindings;t[M].bindings=function(){var a=f?f():{};var b=e[html.__softPermutationId];for(var c=P;c<b.length;c++){var d=b[c];a[d[P]]=d[Q]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(R);a.src=S;a.id=M;a.style.cssText=T+U;a.tabIndex=-1;p.body.appendChild(a);u=a.contentDocument;if(!u){u=a.contentWindow.document}u.open();var b=document.compatMode==V?W:X;u.write(b+Y);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==Z){return typeof p.body!=Z&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener($,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener($,d,false)}var e=setInterval(function(){if(b()){d()}},_)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(ab)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(bb));for(var i=P;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(Q,j.length-Q)))}h.appendChild(e.createTextNode(cb));g=e.createElement(db);g.language=eb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=P;i<c.length;i++){g=e.createElement(db);g.language=eb;g.text=c[i];f.appendChild(g);d(f,g)}}}
html.onScriptDownloaded=function(a){l(function(){m(a)})};r(fb,gb);var n=p.createElement(db);n.src=k;if(html.__errFn){n.onerror=function(){html.__errFn(M,new Error(hb+code))}}p.getElementsByTagName(ib)[P].appendChild(n)}
html.__startLoadingFragment=function(a){return D(a)};html.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(db);d.language=eb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(jb);for(var g=P,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(kb),k;if(j){j=j.replace(lb,X);if(j.indexOf(mb)>=P){continue}if(j==nb){k=i.getAttribute(ob);if(k){var l,m=k.indexOf(pb);if(m>=P){j=k.substring(P,m);l=k.substring(m+Q)}else{j=k;l=X}c[j]=l}}else if(j==qb){k=i.getAttribute(ob);if(k){try{d=eval(k)}catch(a){alert(rb+k+sb)}}}else if(j==tb){k=i.getAttribute(ob);if(k){try{e=eval(k)}catch(a){alert(rb+k+ub)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;html.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(vb);if(b==-1){b=a.length}var c=a.indexOf(wb);if(c==-1){c=a.length}var d=a.lastIndexOf(xb,Math.min(c,b));return d>=P?a.substring(P,d+Q):X}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(yb);b.src=a+zb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Ab);if(a!=null){return a}return X}
function h(){var a=p.getElementsByTagName(db);for(var b=P;b<a.length;++b){if(a[b].src.indexOf(Bb)!=-1){return e(a[b].src)}}return X}
function i(){var a=p.getElementsByTagName(Cb);if(a.length>P){return a[a.length-Q].href}return X}
function j(){var a=p.location;return a.href==a.protocol+Db+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==X){k=h()}if(k==X){k=i()}if(k==X&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return html.__moduleBase+a}
function F(){var f=[];var g=P;function h(a,b){var c=f;for(var d=P,e=a.length-Q;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Eb]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(Fb)!=-1}())return Gb;if(function(){return a.indexOf(Hb)!=-1&&(b>=Ib&&b<Jb)}())return Kb;if(function(){return a.indexOf(Hb)!=-1&&(b>=Lb&&b<Jb)}())return Mb;if(function(){return a.indexOf(Hb)!=-1&&(b>=Nb&&b<Jb)}())return Ob;if(function(){return a.indexOf(Pb)!=-1||b>=Jb}())return Qb;return X};i[Eb]={'gecko1_8':P,'ie10':Q,'ie8':Rb,'ie9':Sb,'safari':Tb};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};html.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};html.__computePropValue=k;o.__gwt_activeModules[M].bindings=html.__getPropMap;r(I,Ub);if(q()){return D(Vb)}var l;try{h([Mb],Wb);h([Ob],Xb);h([Qb],Yb);h([Gb],Zb);h([Kb],$b);l=f[k(Eb)];var m=l.indexOf(_b);if(m!=-1){g=parseInt(l.substring(m+Q),Ib);l=l.substring(P,m)}}catch(a){}html.__softPermutationId=g;return D(l+ac)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=p.createElement(bc);b.setAttribute(cc,dc);b.setAttribute(ec,D(a));p.getElementsByTagName(ib)[P].appendChild(b);__gwt_stylesLoaded[a]=true}}
r(fc,J);c(gc);r(fc,hc)}
B();html.__moduleBase=C();t[M].moduleBase=html.__moduleBase;var H=F();G();r(I,hc);A(H);return true}
html.succeeded=html();
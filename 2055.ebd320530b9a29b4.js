"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2055],{7830:(ne,R,P)=>{P.d(R,{_:()=>y});var p=P(5861),f=P(9468),A=P(5517);let y=(()=>{var _;class C{constructor(m){this.indexdbService=m,this.indexdbService.openDatabase().then(v=>{this.db=v,console.log("INICIO BASE DE DATOS EN EVENTOS-SAE")}).catch(v=>{console.error("Error al inicializar la base de datos:",v)})}guardarEventoSae(m){var v=this;return(0,p.Z)(function*(){yield v.db.add("eventos-sae",m)})()}actualizarEventoSae(m){var v=this;return(0,p.Z)(function*(){yield v.db.put("eventos-sae",m)})()}deleteEventoSae(m){var v=this;return(0,p.Z)(function*(){yield v.db.delete("eventos-sae",m)})()}getAllEventoSae(){var m=this;return(0,p.Z)(function*(){return yield m.db.getAll("eventos-sae")})()}getEventosByEstadoEnvio(m){var v=this;return(0,p.Z)(function*(){return yield v.db.getAllFromIndex("eventos-sae","indexEstadoEnvio",m)})()}getEventoSae(m){var v=this;return(0,p.Z)(function*(){return yield v.db.get("eventos-sae",m)})()}}return(_=C).\u0275fac=function(m){return new(m||_)(f.LFG(A.p))},_.\u0275prov=f.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),C})()},2377:(ne,R,P)=>{function p(a){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(a)}function f(a,t){if(t.length<a)throw new TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+t.length+" present")}function y(a){f(1,arguments);var t=Object.prototype.toString.call(a);return a instanceof Date||"object"===p(a)&&"[object Date]"===t?new Date(a.getTime()):"number"==typeof a||"[object Number]"===t?new Date(a):(("string"==typeof a||"[object String]"===t)&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function C(a){if(null===a||!0===a||!1===a)return NaN;var t=Number(a);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function F(a){f(1,arguments);var e=y(a),r=e.getUTCDay(),n=(r<1?7:0)+r-1;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function J(a){f(1,arguments);var t=y(a),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var n=F(r),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=F(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}P.d(R,{Z:()=>ft});var z={};function L(){return z}function q(a,t){var e,r,n,i,o,s,l,d;f(1,arguments);var h=L(),c=C(null!==(e=null!==(r=null!==(n=null!==(i=null==t?void 0:t.weekStartsOn)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(s=o.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:h.weekStartsOn)&&void 0!==r?r:null===(l=h.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==e?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=y(a),g=w.getUTCDay(),T=(g<c?7:0)+g-c;return w.setUTCDate(w.getUTCDate()-T),w.setUTCHours(0,0,0,0),w}function K(a,t){var e,r,n,i,o,s,l,d;f(1,arguments);var h=y(a),c=h.getUTCFullYear(),w=L(),g=C(null!==(e=null!==(r=null!==(n=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(s=o.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:w.firstWeekContainsDate)&&void 0!==r?r:null===(l=w.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==e?e:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=new Date(0);T.setUTCFullYear(c+1,0,g),T.setUTCHours(0,0,0,0);var W=q(T,t),S=new Date(0);S.setUTCFullYear(c,0,g),S.setUTCHours(0,0,0,0);var U=q(S,t);return h.getTime()>=W.getTime()?c+1:h.getTime()>=U.getTime()?c:c-1}function u(a,t){for(var e=a<0?"-":"",r=Math.abs(a).toString();r.length<t;)r="0"+r;return e+r}const O_y=function(t,e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return u("yy"===e?n%100:n,e.length)},O_M=function(t,e){var r=t.getUTCMonth();return"M"===e?String(r+1):u(r+1,2)},O_d=function(t,e){return u(t.getUTCDate(),e.length)},O_h=function(t,e){return u(t.getUTCHours()%12||12,e.length)},O_H=function(t,e){return u(t.getUTCHours(),e.length)},O_m=function(t,e){return u(t.getUTCMinutes(),e.length)},O_s=function(t,e){return u(t.getUTCSeconds(),e.length)},O_S=function(t,e){var r=e.length,n=t.getUTCMilliseconds();return u(Math.floor(n*Math.pow(10,r-3)),e.length)};function Z(a,t){var e=a>0?"-":"+",r=Math.abs(a),n=Math.floor(r/60),i=r%60;if(0===i)return e+String(n);var o=t||"";return e+String(n)+o+u(i,2)}function ee(a,t){return a%60==0?(a>0?"-":"+")+u(Math.abs(a)/60,2):M(a,t)}function M(a,t){var e=t||"",r=a>0?"-":"+",n=Math.abs(a);return r+u(Math.floor(n/60),2)+e+u(n%60,2)}const ve={G:function(t,e,r){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if("yo"===e){var n=t.getUTCFullYear();return r.ordinalNumber(n>0?n:1-n,{unit:"year"})}return O_y(t,e)},Y:function(t,e,r,n){var i=K(t,n),o=i>0?i:1-i;return"YY"===e?u(o%100,2):"Yo"===e?r.ordinalNumber(o,{unit:"year"}):u(o,e.length)},R:function(t,e){return u(J(t),e.length)},u:function(t,e){return u(t.getUTCFullYear(),e.length)},Q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return u(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return u(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){var n=t.getUTCMonth();switch(e){case"M":case"MM":return O_M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return u(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){var i=function ce(a,t){f(1,arguments);var e=y(a),r=q(e,t).getTime()-function de(a,t){var e,r,n,i,o,s,l,d;f(1,arguments);var h=L(),c=C(null!==(e=null!==(r=null!==(n=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(s=o.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:h.firstWeekContainsDate)&&void 0!==r?r:null===(l=h.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==e?e:1),w=K(a,t),g=new Date(0);return g.setUTCFullYear(w,0,c),g.setUTCHours(0,0,0,0),q(g,t)}(e,t).getTime();return Math.round(r/6048e5)+1}(t,n);return"wo"===e?r.ordinalNumber(i,{unit:"week"}):u(i,e.length)},I:function(t,e,r){var n=function se(a){f(1,arguments);var t=y(a),e=F(t).getTime()-function oe(a){f(1,arguments);var t=J(a),e=new Date(0);return e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0),F(e)}(t).getTime();return Math.round(e/6048e5)+1}(t);return"Io"===e?r.ordinalNumber(n,{unit:"week"}):u(n,e.length)},d:function(t,e,r){return"do"===e?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):O_d(t,e)},D:function(t,e,r){var n=function ie(a){f(1,arguments);var t=y(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime();return Math.floor((e-r)/864e5)+1}(t);return"Do"===e?r.ordinalNumber(n,{unit:"dayOfYear"}):u(n,e.length)},E:function(t,e,r){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return u(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return u(o,e.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){var n=t.getUTCDay(),i=0===n?7:n;switch(e){case"i":return String(i);case"ii":return u(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){var i=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){var i,n=t.getUTCHours();switch(i=12===n?"noon":0===n?"midnight":n/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){var i,n=t.getUTCHours();switch(i=n>=17?"evening":n>=12?"afternoon":n>=4?"morning":"night",e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if("ho"===e){var n=t.getUTCHours()%12;return 0===n&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return O_h(t,e)},H:function(t,e,r){return"Ho"===e?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):O_H(t,e)},K:function(t,e,r){var n=t.getUTCHours()%12;return"Ko"===e?r.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},k:function(t,e,r){var n=t.getUTCHours();return 0===n&&(n=24),"ko"===e?r.ordinalNumber(n,{unit:"hour"}):u(n,e.length)},m:function(t,e,r){return"mo"===e?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):O_m(t,e)},s:function(t,e,r){return"so"===e?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):O_s(t,e)},S:function(t,e){return O_S(t,e)},X:function(t,e,r,n){var o=(n._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return ee(o);case"XXXX":case"XX":return M(o);default:return M(o,":")}},x:function(t,e,r,n){var o=(n._originalDate||t).getTimezoneOffset();switch(e){case"x":return ee(o);case"xxxx":case"xx":return M(o);default:return M(o,":")}},O:function(t,e,r,n){var o=(n._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Z(o,":");default:return"GMT"+M(o,":")}},z:function(t,e,r,n){var o=(n._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Z(o,":");default:return"GMT"+M(o,":")}},t:function(t,e,r,n){return u(Math.floor((n._originalDate||t).getTime()/1e3),e.length)},T:function(t,e,r,n){return u((n._originalDate||t).getTime(),e.length)}};var te=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},ae=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const we={p:ae,P:function(t,e){var o,r=t.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return te(t,e);switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",te(n,e)).replace("{{time}}",ae(i,e))}};var ye=["D","DD"],pe=["YY","YYYY"];function re(a,t,e){if("YYYY"===a)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===a)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===a)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===a)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var _e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Q(a){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth;return a.formats[e]||a.formats[a.defaultWidth]}}var ke={date:Q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},xe={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function E(a){return function(t,e){var n;if("formatting"===(null!=e&&e.context?String(e.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,o=null!=e&&e.width?String(e.width):i;n=a.formattingValues[o]||a.formattingValues[i]}else{var s=a.defaultWidth,l=null!=e&&e.width?String(e.width):a.defaultWidth;n=a.values[l]||a.values[s]}return n[a.argumentCallback?a.argumentCallback(t):t]}}function x(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.width,i=t.match(r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth]);if(!i)return null;var d,o=i[0],s=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(s)?function Qe(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}(s,function(c){return c.test(o)}):function He(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}(s,function(c){return c.test(o)});return d=a.valueCallback?a.valueCallback(l):l,{value:d=e.valueCallback?e.valueCallback(d):d,rest:t.slice(o.length)}}}const ot={code:"en-US",formatDistance:function(t,e,r){var n,i=_e[t];return n="string"==typeof i?i:1===e?i.one:i.other.replace("{{count}}",e.toString()),null!=r&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n},formatLong:ke,formatRelative:function(t,e,r,n){return xe[t]},localize:{ordinalNumber:function(t,e){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},era:E({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:E({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:E({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:E({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:E({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:function Be(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(a.matchPattern);if(!r)return null;var n=r[0],i=t.match(a.parsePattern);if(!i)return null;var o=a.valueCallback?a.valueCallback(i[0]):i[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(n.length)}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:x({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:x({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:x({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:x({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var ut=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,st=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dt=/^'([^]*?)'?$/,lt=/''/g,ct=/[a-zA-Z]/;function ft(a,t,e){var r,n,i,o,s,l,d,h,c,w,g,T,W,S,U,B,X,G;f(2,arguments);var vt=String(t),Y=L(),N=null!==(r=null!==(n=null==e?void 0:e.locale)&&void 0!==n?n:Y.locale)&&void 0!==r?r:ot,j=C(null!==(i=null!==(o=null!==(s=null!==(l=null==e?void 0:e.firstWeekContainsDate)&&void 0!==l?l:null==e||null===(d=e.locale)||void 0===d||null===(h=d.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==s?s:Y.firstWeekContainsDate)&&void 0!==o?o:null===(c=Y.locale)||void 0===c||null===(w=c.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==i?i:1);if(!(j>=1&&j<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var V=C(null!==(g=null!==(T=null!==(W=null!==(S=null==e?void 0:e.weekStartsOn)&&void 0!==S?S:null==e||null===(U=e.locale)||void 0===U||null===(B=U.options)||void 0===B?void 0:B.weekStartsOn)&&void 0!==W?W:Y.weekStartsOn)&&void 0!==T?T:null===(X=Y.locale)||void 0===X||null===(G=X.options)||void 0===G?void 0:G.weekStartsOn)&&void 0!==g?g:0);if(!(V>=0&&V<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!N.localize)throw new RangeError("locale must contain localize property");if(!N.formatLong)throw new RangeError("locale must contain formatLong property");var $=y(a);if(!function _(a){if(f(1,arguments),!function A(a){return f(1,arguments),a instanceof Date||"object"===p(a)&&"[object Date]"===Object.prototype.toString.call(a)}(a)&&"number"!=typeof a)return!1;var t=y(a);return!isNaN(Number(t))}($))throw new RangeError("Invalid time value");var ht=function be(a){var t=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return t.setUTCFullYear(a.getFullYear()),a.getTime()-t.getTime()}($),gt=function m(a,t){return f(2,arguments),function H(a,t){f(2,arguments);var e=y(a).getTime(),r=C(t);return new Date(e+r)}(a,-C(t))}($,ht),wt={firstWeekContainsDate:j,weekStartsOn:V,locale:N,_originalDate:$},bt=vt.match(st).map(function(b){var D=b[0];return"p"===D||"P"===D?(0,we[D])(b,N.formatLong):b}).join("").match(ut).map(function(b){if("''"===b)return"'";var D=b[0];if("'"===D)return function mt(a){var t=a.match(dt);return t?t[1].replace(lt,"'"):a}(b);var I=ve[D];if(I)return!(null!=e&&e.useAdditionalWeekYearTokens)&&function Ce(a){return-1!==pe.indexOf(a)}(b)&&re(b,t,String(a)),!(null!=e&&e.useAdditionalDayOfYearTokens)&&function Te(a){return-1!==ye.indexOf(a)}(b)&&re(b,t,String(a)),I(gt,b,N.localize,wt);if(D.match(ct))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return b}).join("");return bt}}}]);
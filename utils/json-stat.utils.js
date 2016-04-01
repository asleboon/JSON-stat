/*

JSON-stat Javascript Utilities Suite v. 2.1.6 (requires JJT 0.10+)
http://json-stat.com
https://github.com/badosa/JSON-stat/tree/master/utils

Copyright 2016 Xavier Badosa (http://xavierbadosa.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied. See the License for the specific language governing
permissions and limitations under the License.

*/

var JSONstatUtils=function(){"use strict";function e(e,t,n){function r(e){void 0!==t?t.innerHTML=v[e]:window.alert(v[e])}function l(e,t,n){var r={filter:{}};return n.forEach(function(e){"rows"===e.name||"cols"===e.name?r[e.name]=e.value:r.filter[e.name]=e.value}),"rowscols"===t&&e.id.forEach(function(t,n){t!==r.rows&&t!==r.cols?void 0===r.filter[t]&&(r.filter[t]=e.Dimension(n).id[0]):delete r.filter[t]}),r}function i(e,t){var n,r,l={},i=[],a=e.id;if(t){var o="bigger"===t?function(e,t){return e.len<t.len?1:-1}:function(e,t){return e.len>t.len?1:-1};e.Dimension().forEach(function(e,t){i.push({id:a[t],len:e.length})}),i.sort(o),n=i[0].id,r=i[1].id}else n=a[0],r=a[1];return e.Dimension(n).length<e.Dimension(r).length&&(n=r+(r=n,"")),a.forEach(function(t){t!==n&&t!==r&&(l[t]=e.Dimension(t).id[0])}),{rows:n,cols:r,filter:l}}function o(e){var t=[],n=[].slice.call(e.querySelectorAll("select, input"));return n.forEach(function(e){t.push({name:e.name,value:e.value})}),t}function c(e,t,n){var r=function(e,t){return e&&"metric"===e.role&&t.unit&&t.unit.hasOwnProperty("label")?" ("+t.unit.label+")":""},l=t.label||n;return l.capitalize()+r(e,t)}function f(e,t,n){var r,l='<select name="'+t+'">',i=[];if(null!==n[1]){if(r=e.id,i=e.Dimension(),2===r.length)return(e.Dimension(n[0]).label||n[0]).capitalize()}else{var a=e.Dimension(t);if(r=a.id,i=a.Category(),1===r.length)return}return r.forEach(function(e,t){var r=e!==n[0]?"":'selected="selected" ';(null===n[1]||e!==n[1])&&(l+="<option "+r+'value="'+e+'">'+c(a,i[t],e)+"</option>")}),l+="</select>"}function d(e,t,n,r){var i="",a="",s="",u="",g=n.rows,b=t.Dimension(g),y=b.id,E=n.cols,S=t.Dimension(E),w=S.id,D=t.role&&t.role.metric?t.role.metric[0]:null,O=null!==D?t.Dimension(D):null,x=function(e){return e.hasOwnProperty("unit")&&e.unit&&e.unit.hasOwnProperty("decimals")?e.unit.decimals:null},C=n.filter,z=JSON.parse(JSON.stringify(C)),N=[],L="",R="",A=t.source?v.source+": "+t.source:"",j=null!==t.label?'<span class="label">'+t.label.capitalize()+"</span>":"";m&&_.length&&(j='<span class="label">'+_.join(". ")+"</span>"),""!==A&&"."!==A.slice(-1)&&(A+="."),s+="<caption>"+j+"<form>";for(var T in C){var J=t.Dimension(T),q=J.label?J.label.capitalize():T.capitalize();J.length>1?L+="<p>"+f(t,T,[C[T],null])+" <strong>"+q+"</strong></p>":N.push({label:q,value:c(J,J.Category(0)),name:T,id:J.id[0]})}""!==L&&(L='<fieldset id="filters"><legend>'+v.filters+"</legend>"+L+"</fieldset>"),N.forEach(function(e){R+="<p>"+e.value+" <strong>"+e.label+'</strong></p><input type="hidden" name="'+e.name+'" value="'+e.id+'" />'}),""!==R&&(R='<fieldset id="constants"><legend>'+v.constants+"</legend>"+R+"</fieldset>"),s+=R+L+'<fieldset id="rowscols"><legend>'+v.rc+"</legend>"+f(t,"rows",[g,E])+" <a>&#x2194;</a> "+f(t,"cols",[E,g])+"</fieldset></form></caption>",u+="<tbody>";var F=Number.toLocaleString?function(e,t){return null===t?e.toLocaleString(h):e.toLocaleString(h,{minimumFractionDigits:t,maximumFractionDigits:t})}:function(e,t){return null===t?e:e.toFixed(t)};return y.forEach(function(e){z[g]=e;var n=t.Data(z),r=function(e,t){var n,r=E!==D?null===O?null:x(O.Category(z[D])):x(S.Category(t));null!==e.value?(n=F(e.value,r),p&&null!==e.status&&(n+=" ("+e.status+")")):n=e.status||v.na,u+="<td>"+n+"</td>"};return null===n?void(u="ERROR"):(u+='<tr><th scope="row">'+c(b,b.Category(e))+"</th>","[object Array]"===Object.prototype.toString.call(n)?n.forEach(function(e,t){r(e,t)}):r(n,0),void(u+="</tr>"))}),"ERROR"===u?v.dataerror:(u+="</tbody>",i+="<thead><tr><th></th>",w.forEach(function(e){i+='<th scope="col">'+c(S,S.Category(e))+"</th>"}),i+="</tr></thead>",""!==A&&(a='<tfoot><tr><td colspan="'+(w.length+1)+'">'+A+"</td></tr></tfoot>"),e.innerHTML='<table class="'+r+'">'+s+i+a+u+"</table>",[].slice.call(e.querySelectorAll("select")).forEach(function(n){n.addEventListener("change",function(n){d(e,t,l(t,n.target.parentElement.getAttribute("id"),o(e)),r)},!1)}),void e.querySelector("a").addEventListener("click",function(){n.cols=g,n.rows=E,d(e,t,n,r)},!1))}if(void 0===e)return void r("urierror");if(void 0===t)return void r("selerror");void 0===n&&(n={});var v=void 0===n.i18n||void 0===n.i18n.msgs?{urierror:"tbrowser: A valid JSON-stat input must be specified.",selerror:"tbrowser: A valid selector must be specified.",jsonerror:"The request did not return a valid JSON-stat dataset.",dimerror:"Only one dimension was found in the dataset. At least two are required.",dataerror:"Selection returned no data!",source:"Source",filters:"Filters",constants:"Constants",rc:"Rows &amp; Columns",na:"n/a"}:n.i18n.msgs,h=void 0===n.i18n||void 0===n.i18n.locale?"en-US":n.i18n.locale,g=n.dsid||0,p=n.status||!1,b=n.tblclass||"",m=n.nonconst||!1,y=s(e,g);if(!a(y))return void r("jsonerror");if(m)var _=u(y);return 1===y.length?void r("dimerror"):void d(t,y,i(y,n.preset),b)}function t(e,t){if(void 0===e)return null;void 0===t&&(t={});var n="",r="",l=0,i=t.na||"n/a",o=t.dsid||0,u=t.vlabel||null,c=t.slabel||null,f=t.counter||!1,d=t.tblclass||"",v=t.numclass||"",h=t.valclass||"",g=t.status||!1,p=t.locale||"en-US",b=t.source||"Source",m=s(e,o),y=Number.toLocaleString?function(e){return e.toLocaleString(p)}:function(e){return e},_=f?function(e,t){n+=t?'<tr><td class="'+v+'">'+t+"</td>":'<tr><th class="'+v+'">#</th>',e.forEach(function(e,r){var l=S===r?' class="'+v+" "+h+'"':"",a=null===e?i:y(e);n+=t?"<td"+l+">"+a+"</td>":"<th"+l+">"+a+"</th>"}),n+="</tr>"}:function(e,t){n+="<tr>",e.forEach(function(e,r){var l=S===r?' class="'+v+" "+h+'"':"",a=null===e?i:y(e);n+=t?"<td"+l+">"+a+"</td>":"<th"+l+">"+a+"</th>"}),n+="</tr>"};if(!a(m))return null;var E=m.toTable({status:g,vlabel:u,slabel:c}),S=E[0].length-1;return E.forEach(function(e,t){_(e,t)}),m.source&&(l=m.length+1,f&&l++,g&&l++,b+=": "+m.source,"."!==b.slice(-1)&&(b+="."),r='<tfoot><td colspan="'+l+'">'+b+"</td></tfoot>"),'<table class="'+d+'"><caption>'+(t.caption||m.label||"")+"</caption>"+r+"<tbody>"+n+"</tbody></table>"}function n(e,t){if(void 0===e)return null;void 0===t&&(t={});var n=t.vlabel||"Value",r=t.slabel||"Status",l=t.type||"array",i=t.label||"",a=[],o=[],s=[],u=[],c={},f={},d=function(e,t){for(var n=1,r=0,l=0;m>l;l++)n*=l>0?t[m-l]:1,r+=n*e[m-l-1];return r},v=function(){var t=e[y][n];s[d(_,o)]=isNaN(t)?null:t};switch(l){case"array":e=function(e){for(var t=e[0],n=e.slice(1),r=[],l=0,i=n.length;i>l;l++){for(var a=0,o=t.length,s={};o>a;a++)s[t[a]]=n[l][a];r.push(s)}return r}(e);break;case"object":e=function(e){for(var t=e.cols.map(function(e){return e.id}),n=e.rows,r=[],l=0,i=n.length;i>l;l++){for(var a=0,o=t.length,s={};o>a;a++)s[t[a]]=n[l].c[a].v;r.push(s)}return r}(e)}var h=e.length;for(var g in e[0])if(g!==n)if(g!==r){a.push(g),c[g]=[];for(var p=0;h>p;p++){var b=e[p][g];-1===c[g].indexOf(b)&&c[g].push(b)}o.push(c[g].length),f[g]={label:g,category:{index:c[g]}}}else v=function(){var t=e[y][n];s[d(_,o)]=isNaN(t)?null:t,u[d(_,o)]=e[y][r]};for(var m=a.length,y=0;h>y;y++){for(var _=[],E=0;m>E;E++){var S=a[E];_.push(c[S].indexOf(e[y][S]))}v()}return{version:"2.0","class":"dataset",label:i,value:s,status:u,dimension:f,id:a,size:o}}function r(e,t){if(void 0===e)return null;void 0===t&&(t={});var n=[],r=t.vlabel||"Value",l=t.slabel||"Status",i=t.status||!1,o=t.na||"n/a",u=t.delimiter||",",c=";"===u?t.decimal||",":t.decimal||".",f=t.dsid||0,d=s(e,f);if(!a(d))return null;for(var v=d.toTable({vlabel:r,slabel:l,status:i,type:"array"}),h=v[0].indexOf(r),g=1,p=v.length;p>g;g++)null===v[g][h]?v[g][h]=o:"."!==c&&(v[g][h]=(v[g][h]+"").replace(".",c));return v.forEach(function(e){n+=e.join(u)+"\n"}),n}function l(e,t){if(void 0===e)return null;void 0===t&&(t={});var r=null,l=t.delimiter||",",i=t.vlabel,a=";"===l?t.decimal||",":t.decimal||".",s=o(e.trim(),l),u=s.length,c=s[0].length;if(void 0!==i){for(;c--;)if(s[0][c]===i){r=c;break}if(null===r)return null}else r=c-1,i=s[0][r];if(","===a)for(c=1;u>c;c++)s[c][r]=+s[c][r].replace(",",".");else for(c=1;u>c;c++)s[c][r]=+s[c][r];return n(s,{vlabel:i,slabel:t.slabel||"Status",type:"array",label:t.label||""})}function i(e,t){if(void 0===t)return null;if(!a(e))return null;var n=t.length,r=e.toTable({field:"id",content:"id",status:!0}),l=e.status,i=r.shift(),o=!1,s=[],u=[],c=[],f=[];return t.forEach(function(t){var n=e.Dimension(t[0]);if(null===n)return void(o=!0);var r=n.id.indexOf(t[1]);return-1===r?void(o=!0):(c.push([e.id.indexOf(t[0]),r]),void f.push(n.Category(r).label))}),o?null:(r.forEach(function(e){var r,l={},a=0;for(r=e.length;r--;)l[i[r]]=e[r];t.forEach(function(e){l[e[0]]===e[1]&&a++}),n===a&&(s.push(l.value),u.push(l.status))}),e.n=s.length,e.value=e.__tree__.value=s,e.status=e.__tree__.status=null!==l?u:null,t.forEach(function(t,n){e.size[c[n][0]]=1,e.__tree__.dimension[t[0]].category.index={},e.__tree__.dimension[t[0]].category.index[t[1]]=0,e.__tree__.dimension[t[0]].category.label={},e.__tree__.dimension[t[0]].category.label[t[1]]=f[n]}),e)}function a(e){if(null===e||0===e.length||"dataset"!==e["class"])return!1;for(var t=e.length,n=1;t--;)n*=e.Dimension(t).length;return n!==e.n?!1:!0}function o(e,t){t=t||",";for(var n,r,l=RegExp("(\\"+t+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+t+"\\r\\n]*))","gi"),i=[[]],a=null;a=l.exec(e);)r=a[1],r.length&&r!=t&&i.push([]),n=a[2]?a[2].replace(RegExp('""',"g"),'"'):a[3],i[i.length-1].push(n);return i}function s(e,t){return void 0===e?null:(("string"==typeof e||void 0===e.length)&&(e=JSONstat(e)),0===e.length||"dataset"!==e["class"]&&"collection"!==e["class"]&&"bundle"!==e["class"]?null:"dataset"===e["class"]?e:e.Dataset(t))}function u(e){var t=0,n=e.size.slice(0),r=[];return n.forEach(function(n,l){var i=l-t,a=e.Dimension(i);1===n&&(delete e.__tree__.dimension[e.id[i]],e.size.splice(i,1),e.id.splice(i,1),e.length--,t++,r.push(a.label.capitalize()+": "+a.Category(0).label.capitalize()))}),r}return String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},{tbrowser:e,datalist:t,fromTable:n,fromCSV:l,toCSV:r,subset:i,version:"2.1.6"}}();

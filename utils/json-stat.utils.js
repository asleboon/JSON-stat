var JSONstatUtils=function(){"use strict";function e(e){function t(e){for(var t=e.length,n=1;t--;)n*=e.Dimension(t).length;return n!==e.n?!1:!0}function n(t){void 0!==e.selector?e.selector.innerHTML=c[t]:window.alert(c[t])}function r(e,t,n){var r={filter:{}};return n.forEach(function(e){"rows"===e.name||"cols"===e.name?r[e.name]=e.value:r.filter[e.name]=e.value}),"rowscols"===t&&(r.filter={},e.id.forEach(function(t,n){t!==r.rows&&t!==r.cols&&(r.filter[t]=e.Dimension(n).id[0])})),r}function i(e,t){var n,r,i={},o=[],l=e.id;if(t){var a="bigger"===t?function(e,t){return e.len<t.len?1:-1}:function(e,t){return e.len>t.len?1:-1};e.Dimension().forEach(function(e,t){o.push({id:l[t],len:e.length})}),o.sort(a),n=o[0].id,r=o[1].id}else n=l[0],r=l[1];return e.Dimension(n).length<e.Dimension(r).length&&(n=r+(r=n,"")),l.forEach(function(t){t!==n&&t!==r&&(i[t]=e.Dimension(t).id[0])}),{rows:n,cols:r,filter:i}}function o(e){var t=[],n=[].slice.call(e.querySelectorAll("select, input"));return n.forEach(function(e){t.push({name:e.name,value:e.value})}),t}function l(e,t){var n=function(e,t){return e&&"metric"===e.role&&t.unit&&t.unit.hasOwnProperty("label")?" ("+t.unit.label+")":""};return t.label.capitalize()+n(e,t)}function a(e,t,n){var r,i='<select name="'+t+'">',o=[];if(null!==n[1]){if(r=e.id,o=e.Dimension(),2===r.length)return(e.Dimension(n[0]).label||n[0]).capitalize()}else{var a=e.Dimension(t);if(r=a.id,o=a.Category(),1===r.length)return}return r.forEach(function(e,t){var r=e!==n[0]?"":'selected="selected" ';(null===n[1]||e!==n[1])&&(i+="<option "+r+'value="'+e+'">'+l(a,o[t])+"</option>")}),i+="</select>"}function s(e,t,n){var i="",u="",d="",h="",g=n.rows,p=t.Dimension(g),m=p.id,b=n.cols,y=t.Dimension(b),w=y.id,D=t.role&&t.role.metric?t.role.metric[0]:null,S=null!==D?t.Dimension(D):null,E=function(e){return e.hasOwnProperty("unit")&&e.unit&&e.unit.hasOwnProperty("decimals")?e.unit.decimals:null},O=n.filter,j=JSON.parse(JSON.stringify(O)),C=[],x="",R="",L=t.source?c.source+": "+t.source+".":"",N=null!==t.label?'<span class="label">'+t.label.capitalize()+"</span>":"";d+="<caption>"+N,d+=' <form><fieldset id="rowscols"><legend>'+c.rc+"</legend>"+a(t,"rows",[g,b])+" <a>&#x2194;</a> "+a(t,"cols",[b,g])+"</fieldset>";for(var q in O){var z=t.Dimension(q),A=z.label.capitalize();z.length>1?x+="<p>"+a(t,q,[O[q],null])+" <strong>"+A+"</strong></p>":C.push({label:A,value:l(z,z.Category(0)),name:q,id:z.id[0]})}""!==x&&(x='<fieldset id="filters"><legend>'+c.filters+"</legend>"+x+"</fieldset>"),C.forEach(function(e){R+="<p>"+e.value+" <strong>"+e.label+'</strong></p><input type="hidden" name="'+e.name+'" value="'+e.id+'" />'}),""!==R&&(R='<fieldset id="constants"><legend>'+c.constants+"</legend>"+R+"</fieldset>"),d+=x+R+"</form></caption>",h+="<tbody>";var J=Number.toLocaleString?function(e,t){return null===t?e.toLocaleString(f):e.toLocaleString(f,{minimumFractionDigits:t,maximumFractionDigits:t})}:function(e,t){return null===t?e:e.toFixed(t)};return m.forEach(function(e){j[g]=e;var n=t.Data(j),r=function(e,t){var n,r=b!==D?null===S?null:E(S.Category(j[D])):E(y.Category(t));null!==e.value?(n=J(e.value,r),v&&null!==e.status&&(n+=" ("+e.status+")")):n=e.status||c.na,h+="<td>"+n+"</td>"};return null===n?void(h="ERROR"):(h+='<tr><th scope="row">'+l(p,p.Category(e))+"</th>","[object Array]"===Object.prototype.toString.call(n)?n.forEach(function(e,t){r(e,t)}):r(n,0),void(h+="</tr>"))}),"ERROR"===h?c.dataerror:(h+="</tbody>",i+="<thead><tr><th></th>",w.forEach(function(e){i+='<th scope="col">'+l(y,y.Category(e))+"</th>"}),i+="</tr></thead>",""!==L&&(u='<tfoot><tr><td colspan="'+(w.length+1)+'">'+L+"</td></tr></tfoot>"),e.innerHTML="<table>"+d+i+u+h+"</table>",[].slice.call(e.querySelectorAll("select")).forEach(function(n){n.addEventListener("change",function(n){s(e,t,r(t,n.target.parentElement.getAttribute("id"),o(e)))},!1)}),void e.querySelector("a").addEventListener("click",function(){n.cols=g,n.rows=b,s(e,t,n)},!1))}var u,c=void 0===e.i18n||void 0===e.i18n.msgs?{selerror:'tbrowser: "selector" property is required!',urierror:'tbrowser: "jsonstat" property is required!',jsonerror:"Document is not valid JSON-stat.",dserror:"Dataset ID is not correct.",dimerror:"Only one dimension was found in the dataset. At least two are required.",dataerror:"Selection returned no data!",source:"Source",filters:"Filters",constants:"Constants",rc:"Rows &amp; Columns",na:"n/a"}:e.i18n.msgs,f=void 0===e.i18n||void 0===e.i18n.locale?"en-US":e.i18n.locale,d=e.dsid||0,v=e.status||!1;if(void 0===e.selector)return void n("selerror");if(void 0===e.jsonstat)return void n("urierror");if(u="string"==typeof e.jsonstat?JSONstat(e.jsonstat):void 0===e.jsonstat.length?JSONstat(e.jsonstat):e.jsonstat,0===u.length)return void n("jsonerror");var h="dataset"===u["class"]?u:u.Dataset(d);return t(h)?null===h?void n("dserror"):1===h.length?void n("dimerror"):void s(e.selector,h,i(h,e.preset)):void n("jsonerror")}function t(e){var t=e.vfield||"Value",n=e.sfield||"Status",r=e.type||"array",i=e.table,o=e.label||"",l=[],a=[],s=[],u=[],c={},f={},d=function(e,t){for(var n=1,r=0,i=0;b>i;i++)n*=i>0?t[b-i]:1,r+=n*e[b-i-1];return r},v=function(){s[d(w,a)]=i[y][t]};switch(r){case"array":i=function(e){for(var t=e[0],n=e.slice(1),r=[],i=0,o=n.length;o>i;i++){for(var l=0,a=t.length,s={};a>l;l++)s[t[l]]=n[i][l];r.push(s)}return r}(i);break;case"object":i=function(e){for(var t=e.cols.map(function(e){return e.id}),n=e.rows,r=[],i=0,o=n.length;o>i;i++){for(var l=0,a=t.length,s={};a>l;l++)s[t[l]]=n[i].c[l].v;r.push(s)}return r}(i)}var h=i.length;for(var g in i[0])if(g!==t)if(g!==n){l.push(g),c[g]=[];for(var p=0;h>p;p++){var m=i[p][g];-1===c[g].indexOf(m)&&c[g].push(m)}a.push(c[g].length),f[g]={label:g,category:{index:c[g]}}}else v=function(){s[d(w,a)]=i[y][t],u[d(w,a)]=i[y][n]};for(var b=l.length,y=0;h>y;y++){for(var w=[],D=0;b>D;D++){var S=l[D];w.push(c[S].indexOf(i[y][S]))}v()}return f.id=l,f.size=a,{"class":"dataset",label:o,value:s,status:u,dimension:f}}function n(e){var n=e.vfield||"Value",i=e.type||"jsonstat";if(e.table)u=e.table;else{var o,l=null,a=e.delimiter||",",s=";"===a?",":"	"===a?e.decimal||".":".",u=r(e.csv,a),c=u.length,o=u[0].length;if(e.vlast)l=o-1,n=u[0][l];else{for(;o--;)if(u[0][o]===n){l=o;break}if(null===l)return null}if(","===s)for(o=1;c>o;o++)u[o][l]=+u[o][l].replace(",",".");else for(o=1;c>o;o++)u[o][l]=+u[o][l]}return"table"===i?u:t({table:u,vfield:n,sfield:e.sfield||"Status",type:"array",label:e.label})}function r(e,t){t=t||",";for(var n,r,i=RegExp("(\\"+t+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+t+"\\r\\n]*))","gi"),o=[[]],l=null;l=i.exec(e);)r=l[1],r.length&&r!=t&&o.push([]),n=l[2]?l[2].replace(RegExp('""',"g"),'"'):l[3],o[o.length-1].push(n);return o}return String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},{tbrowser:e,fromTable:t,fromCSV:n,version:"1.2.5"}}();
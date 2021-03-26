/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function toObject(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}var n=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(r){return t[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(n,o){for(var c,a,i=toObject(n),b=1;b<arguments.length;b++){for(var f in c=Object(arguments[b]))t.call(c,f)&&(i[f]=c[f]);if(r){a=r(c);for(var j=0;j<a.length;j++)e.call(c,a[j])&&(i[a[j]]=c[a[j]])}}return i};export default n;
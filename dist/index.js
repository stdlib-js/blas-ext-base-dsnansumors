"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(z,f){
var o=require('@stdlib/math-base-assert-is-nan/dist');function l(e,r,s,j){var i,a,n;if(i=0,e<=0)return i;if(a=j,s===0)return o(r[a])?i:e*r[a];for(n=0;n<e;n++)o(r[a])===!1&&(i+=r[a]),a+=s;return i}f.exports=l
});var d=u(function(A,q){
var x=require('@stdlib/strided-base-stride2offset/dist'),R=t();function _(e,r,s){return R(e,r,s,x(e,s))}q.exports=_
});var p=u(function(B,c){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=d(),O=t();E(m,"ndarray",O);c.exports=m
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),v,y=g(b(__dirname,"./native.js"));h(y)?v=k:v=y;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

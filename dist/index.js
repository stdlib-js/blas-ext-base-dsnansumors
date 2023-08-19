"use strict";var t=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var q=t(function(x,f){
var o=require('@stdlib/math-base-assert-is-nan/dist');function R(i,r,u){var a,e,n;if(a=0,i<=0)return a;if(i===1||u===0)return o(r[0])?a:r[0];for(u<0?e=(1-i)*u:e=0,n=0;n<i;n++)o(r[e])===!1&&(a+=r[e]),e+=u;return a}f.exports=R
});var l=t(function(z,c){
var m=require('@stdlib/math-base-assert-is-nan/dist');function _(i,r,u,a){var e,n,s;if(e=0,i<=0)return e;if(i===1||u===0)return m(r[a])?e:r[a];for(n=a,s=0;s<i;s++)m(r[n])===!1&&(e+=r[n]),n+=u;return e}c.exports=_
});var y=t(function(A,d){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),O=l();E(p,"ndarray",O);d.exports=p
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=y(),v,j=g(b(__dirname,"./native.js"));h(j)?v=k:v=j;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=t(function(A,q){
var v=require('@stdlib/math-base-assert-is-nan/dist');function R(e,r,i,j){var n,a,u,s;if(e<=0)return 0;if(a=j,i===0)return v(r[a])?0:e*r[a];for(s=0;s<e&&(u=r[a],v(u)!==!1);s++)a+=i;if(s===e)return 0;for(n=u,a+=i,s+=1;s<e;s++)v(r[a])===!1&&(n+=r[a]),a+=i;return n}q.exports=R
});var c=t(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=o();function k(e,r,i){return b(e,r,i,_(e,i))}m.exports=k
});var y=t(function(C,p){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),E=o();x(d,"ndarray",E);p.exports=d
});var O=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=y(),f,l=g(O(__dirname,"./native.js"));h(l)?f=w:f=l;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";function n(r,n,t){var s,i,a;if(s=0,r<=0)return s;if(1===r||0===t)return e(n[0])?s:n[0];for(i=t<0?(1-r)*t:0,a=0;a<r;a++)!1===e(n[i])&&(s+=n[i]),i+=t;return s}function t(r,n,t,s){var i,a,d;if(i=0,r<=0)return i;if(1===r||0===t)return e(n[s])?i:n[s];for(a=s,d=0;d<r;d++)!1===e(n[a])&&(i+=n[a]),a+=t;return i}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map

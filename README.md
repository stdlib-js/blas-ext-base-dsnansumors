<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dsnansumors

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import dsnansumors from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsnansumors@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-ext-base-dsnansumors/tags). For example,

```javascript
import dsnansumors from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsnansumors@v0.2.1-deno/mod.js';
```

#### dsnansumors( N, x, stride )

Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
var N = x.length;

var v = dsnansumors( N, x, 1 );
// returns 1.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the sum of every other element in `x`,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x = new Float32Array( [ 1.0, 2.0, NaN, -7.0, NaN, 3.0, 4.0, 2.0 ] );
var N = floor( x.length / 2 );

var v = dsnansumors( N, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x0 = new Float32Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = dsnansumors( N, x1, 2 );
// returns 5.0
```

#### dsnansumors.ndarray( N, x, stride, offset )

Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation with extended accumulation and alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
var N = x.length;

var v = dsnansumors.ndarray( N, x, 1, 0 );
// returns 1.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the sum of every other value in `x` starting from the second value

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@deno/mod.js';

var x = new Float32Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var N = floor( x.length / 2 );

var v = dsnansumors.ndarray( N, x, 2, 1 );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   Accumulated intermediate values are stored as double-precision floating-point numbers.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import dsnansumors from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsnansumors@deno/mod.js';

var x;
var i;

x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        x[ i ] = NaN;
    } else {
        x[ i ] = round( randu()*100.0 );
    }
}
console.log( x );

var v = dsnansumors( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-base/dsnanmeanors`][@stdlib/stats/base/dsnanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array, ignoring NaN values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/dssum`][@stdlib/blas/ext/base/dssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using extended accumulation and returning an extended precision result.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/dssumors`][@stdlib/blas/ext/base/dssumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using ordinary recursive summation with extended accumulation and returning an extended precision result.</span>
-   <span class="package-name">[`@stdlib/blas-ext/base/snansumors`][@stdlib/blas/ext/base/snansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring NaN values and using ordinary recursive summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dsnansumors.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dsnansumors

[test-image]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dsnansumors/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dsnansumors?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dsnansumors.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dsnansumors/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-dsnansumors/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dsnansumors/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dsnanmeanors]: https://github.com/stdlib-js/stats-base-dsnanmeanors/tree/deno

[@stdlib/blas/ext/base/dssum]: https://github.com/stdlib-js/blas-ext-base-dssum/tree/deno

[@stdlib/blas/ext/base/dssumors]: https://github.com/stdlib-js/blas-ext-base-dssumors/tree/deno

[@stdlib/blas/ext/base/snansumors]: https://github.com/stdlib-js/blas-ext-base-snansumors/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->

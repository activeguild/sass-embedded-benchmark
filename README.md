# sass-embedded-benchmark

## simple
```scss
.test {
    border: {
        color: #000;
        style: solid;
        width: 4px;
    }
    margin: {
        bottom: 40px;
        left: 10px;
        right: 10px;
        top: 20px;
    }
}
```

```bash
sass compileString sync x 4,074 ops/sec ±10.62% (73 runs sampled)
sass-embedded compileString sync x 15.48 ops/sec ±1.01% (73 runs sampled)
sass compileStringAsync async x 2,416 ops/sec ±6.38% (70 runs sampled)
sass-embedded compileStringAsync async x 40.07 ops/sec ±1.24% (63 runs sampled)
sass compile sync x 2,442 ops/sec ±3.49% (69 runs sampled)
sass-embedded compile sync x 15.06 ops/sec ±0.90% (71 runs sampled)
sass compileAsync async x 1,883 ops/sec ±2.43% (78 runs sampled)
sass-embedded compilegAsync async x 38.65 ops/sec ±0.94% (61 runs sampled)
Fastest is sass compileString sync
```

## uses
[date-picker.scss](https://github.com/activeguild/sass-embedded-benchmark/blob/main/source/src/date-picker.scss)

```bash
sass compile sync x 13.75 ops/sec ±11.05% (71 runs sampled)
sass-embedded compile sync x 8.98 ops/sec ±4.40% (46 runs sampled)
sass compileAsync async x 7.81 ops/sec ±6.11% (43 runs sampled)
sass-embedded compilegAsync async x 14.71 ops/sec ±1.81% (70 runs sampled)
Fastest is sass-embedded compilegAsync async
```
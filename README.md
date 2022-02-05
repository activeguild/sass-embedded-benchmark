# sass-embedded-benchmark

## simple
#### target
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
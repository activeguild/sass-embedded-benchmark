const sass = require("sass");
const sassEmbedded = require("sass-embedded");
const benchmark = require("benchmark");
const suite = new benchmark.Suite();

const stylePath = './source/src/date-picker.scss'

suite
  .add("sass compile sync", {
    defer: true,
    fn: (deferred) => {
      sass.compile(stylePath);
      deferred.resolve();
    },
  })
  .add("sass-embedded compile sync", {
    defer: true,
    fn: (deferred) => {
      sassEmbedded.compile(stylePath);
      deferred.resolve();
    },
  })
  .add("sass compileAsync async", {
    defer: true,
    fn: async (deferred) => {
      await sass.compileAsync(stylePath);
      deferred.resolve();
    },
  })
  .add("sass-embedded compilegAsync async", {
    defer: true,
    fn: async (deferred) => {
      await sassEmbedded.compileAsync(stylePath);
      deferred.resolve();
    },
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });

const sass = require("sass");
const sassEmbedded = require("sass-embedded");
const benchmark = require("benchmark");
const suite = new benchmark.Suite();

const style = `
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
`;
const stylePath = 'test.scss'

suite
  .add("sass compileString sync", {
    defer: true,
    fn: (deferred) => {
      sass.compileString(style);
      deferred.resolve();
    },
  })
  .add("sass-embedded compileString sync", {
    defer: true,
    fn: (deferred) => {
      sassEmbedded.compileString(style);
      deferred.resolve();
    },
  })
  .add("sass compileStringAsync async", {
    defer: true,
    fn: async (deferred) => {
      await sass.compileStringAsync(style);
      deferred.resolve();
    },
  })
  .add("sass-embedded compileStringAsync async", {
    defer: true,
    fn: async (deferred) => {
      await sassEmbedded.compileStringAsync(style);
      deferred.resolve();
    },
  })
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

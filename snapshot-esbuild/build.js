const esbuild = require("esbuild");

esbuild.build({
  // pass any options to esbuild here...
  entryPoints: ["src/index.jsx"],
  outdir: "public",
  bundle: true,
  inject: ["./react-shim.js"],
  define: { "process.env.NODE_ENV": '"production"' },
  sourcemap: false,
  minify: true,
});

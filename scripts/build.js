const esbuild = require('esbuild');

const { removeBuild, generateHTML } = require('./utils');

removeBuild();

esbuild
  .build({
    entryPoints: {
      bundle: 'src/app.jsx',
    },
    bundle: true,
    logLevel: 'info',
    minify: true,
    outdir: 'dist',
    sourcemap: true,
  })
  .then(() => generateHTML());

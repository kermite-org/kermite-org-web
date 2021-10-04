import fs from 'fs';
import { build, cliopts } from 'estrella';
import open from 'open';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const servor = require('servor');

const [opts] = cliopts.parse(
  ['start-web', 'debug web'],
  ['build-web', 'build web'],
);
const reqStartWeb = opts['start-web'];
const reqBuildWeb = opts['build-web'];

function launchDebugServer(distDir: string) {
  servor({
    root: distDir,
    fallback: 'index.html',
    reload: true,
    browse: true,
    port: 3000,
  });
  open('http://localhost:3000');
  console.log('server listening on http://localhost:3000');
}

function patchOutputIndexHtmlBundleImport(htmlFilPath: string) {
  const text = fs.readFileSync(htmlFilPath, { encoding: 'utf-8' });
  const tt = Date.now().toString();
  const modText = text.replace(
    '<script src="./index.js"></script>',
    `<script src="./index.js?${tt}"></script>`,
  );
  fs.writeFileSync(htmlFilPath, modText, { encoding: 'utf-8' });
}

function startWatchPage(folderName: string) {
  const srcDir = `./src/${folderName}`;
  const distDir = `./dist`;
  fs.mkdirSync(distDir, { recursive: true });
  fs.copyFileSync(`${srcDir}/index.html`, `${distDir}/index.html`);

  build({
    entry: `${srcDir}/index.tsx`,
    outfile: `${distDir}/index.js`,
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    },
    bundle: true,
    minify: false,
    watch: true,
    clear: false,
    tslint: false,
    sourcemap: true,
    sourcesContent: true,
  });

  launchDebugServer(distDir);
}

function buildPage(folderName: string) {
  const srcDir = `./src/${folderName}`;
  const distDir = `./dist`;
  fs.mkdirSync(distDir, { recursive: true });
  fs.copyFileSync(`${srcDir}/index.html`, `${distDir}/index.html`);
  patchOutputIndexHtmlBundleImport(`${distDir}/index.html`);

  build({
    entry: `${srcDir}/index.tsx`,
    outfile: `${distDir}/index.js`,
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    },
    bundle: true,
    minify: true,
    watch: false,
    clear: false,
    tslint: false,
    sourcemap: false,
    sourcesContent: false,
  });
}

function entry() {
  if (reqStartWeb) {
    startWatchPage('web');
  }
  if (reqBuildWeb) {
    buildPage('web');
  }
}

entry();
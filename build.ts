import fs from 'fs';
import { build, cliopts } from 'estrella';
import open from 'open';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const servor = require('servor');

const [opts] = cliopts.parse(['start-web', 'debug web']);
const reqStartWeb = opts['start-web'];

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

function startWatchPage(folderName: string) {
  const srcDir = `./src/${folderName}`;
  const distDir = `./dist/${folderName}`;
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

function entry() {
  if (reqStartWeb) {
    startWatchPage('web');
  }
}

entry();

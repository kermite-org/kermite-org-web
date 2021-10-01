import { jsx, render } from '~/qx';

function start() {
  render(() => <div>hello</div>, document.getElementById('app'));
}

window.addEventListener('load', start);

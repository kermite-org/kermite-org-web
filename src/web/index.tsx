import { applyGlobalStyle, css, jsx, render } from 'qx';
import { IndexPage } from '~/web/IndexPage';
import { colors } from '~/web/base';

applyGlobalStyle(css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    height: 100%;
  }

  #app {
    font-family: 'Roboto', sans-serif;
    color: ${colors.mainText};
  }

  body {
    background: #fff;
  }

  ul,
  li {
    list-style: none;
  }
`);

function start() {
  render(() => <IndexPage />, document.getElementById('app'));
}

window.addEventListener('load', start);

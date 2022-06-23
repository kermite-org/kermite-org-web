import { applyGlobalStyle, css, jsx, render } from 'alumina';
import { IndexPage } from '~/IndexPage';
import { colors } from '~/base';

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

  html {
    scroll-behavior: smooth;
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

  a {
    color: inherit;
    text-decoration: none;
  }
`);

function start() {
  console.log(`kermite-org-web 220624`);
  render(() => <IndexPage />, document.getElementById('app'));
}

window.addEventListener('load', start);

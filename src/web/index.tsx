import { applyGlobalStyle, css, jsx, render } from '~/qx';

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
  }

  body {
    overflow: hidden;
    background: #fff;
  }
`);

const rootStyle = css`
  padding: 10px;
  color: red;
`;

function start() {
  render(
    () => <div css={rootStyle}>hello</div>,
    document.getElementById('app'),
  );
}

window.addEventListener('load', start);

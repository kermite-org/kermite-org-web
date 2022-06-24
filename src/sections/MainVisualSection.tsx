import { css, FC, jsx } from 'alumina';
import { colors, mqLarge } from '~/base';

export const MainVisualSection: FC = () => (
  <div css={style}>
    <div class="overlay">
      BUILD A KEYBOARD
      <br />
      REALIZE YOUR IMAGINATION
    </div>
    <div class="badge-base"></div>
    <div class="badge-icon">
      <a
        href="https://github.com/kermite-org/Kermite"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-github" />
      </a>
    </div>
  </div>
);

const imageUrls = [
  'https://i.gyazo.com/f2a8edb5772fa4c674b410b7037b44d2.png',
  'https://i.gyazo.com/9559700b06b2d620f50ca8c3c00b1e92.png',
];

const style = css`
  width: 100%;
  height: 360px;
  background-image: url(${imageUrls[0]});
  background-position: center;
  background-size: cover;
  position: relative;

  > .overlay {
    width: 100%;
    height: 100%;
    padding: 30px;
    background: #0002;
    font-size: 50px;
    color: ${colors.white};
    text-shadow: 0px 0px 10px #0004;

    ${mqLarge} {
      font-size: 60px;
    }
  }

  > .badge-base {
    position: absolute;
    top: 0;
    right: 0;
    border-top: solid 50px #fa0b;
    border-right: solid 50px #fa0b;
    border-left: solid 50px transparent;
    border-bottom: solid 50px transparent;
  }

  > .badge-icon {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 40px;
    color: #006;
    margin: 10px;
  }
`;

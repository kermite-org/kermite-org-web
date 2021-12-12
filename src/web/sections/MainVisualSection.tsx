import { css, FC, jsx } from 'alumina';
import { colors, mqLarge } from '~/web/base';

export const MainVisualSection: FC = () => (
  <div css={style}>
    <div class="overlay">
      BUILD A KEYBOARD
      <br />
      REALIZE YOUR IMAGINATION
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
`;

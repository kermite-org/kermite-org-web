import { css, FC, jsx } from 'qx';
import { mqLarge } from '~/web/utils/styleHelpers';

export const MainVisualSection: FC = () => (
  <div css={style}>
    <div class="catchphrase">
      BUILD A KEYBOARD
      <br />
      REALIZE YOUR <br />
      IMAGINATION
    </div>
  </div>
);

const style = css`
  width: 100%;
  height: 450px;
  background-image: url('https://i.gyazo.com/4fec8984f10e11f82f1e618979048de8.png');
  background-size: cover;
  padding: 20px;

  > .catchphrase {
    font-size: 50px;
    color: #fff;

    ${mqLarge} {
      font-size: 70px;
    }
  }
`;

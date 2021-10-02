import { css, FC, jsx } from 'qx';
import { colors } from '~/web/base';

export const NavigationBar: FC = () => (
  <div css={style}>
    <div class="site-title">Kermite</div>
    <ul class="links">
      <li>concept</li>
      <li>features</li>
      <li>download</li>
      <li>contact</li>
    </ul>
  </div>
);

const style = css`
  background: ${colors.topBar};
  height: 60px;
  position: sticky;
  top: 0;
  color: #fff;
  display: flex;
  align-items: center;

  > .site-title {
    font-size: 30px;
    margin-left: 20px;
  }

  > ul.links {
    margin-left: auto;
    display: flex;
    font-size: 20px;
    gap: 30px;
    margin-right: 40px;
    > li {
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        opacity: 0.7;
        color: blue;
      }
    }
  }
`;

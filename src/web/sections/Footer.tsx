import { css, FC, jsx } from 'qx';
import { colors } from '~/web/base';

export const Footer: FC = () => (
  <div css={style}>©2021 yahiro, all rights reserved.</div>
);

const style = css`
  height: 60px;
  background: ${colors.footer};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

import { css, FC, jsx } from 'alumina';
import { colors } from '~/base';

export const Footer: FC = () => (
  <div css={style}>©2021-2022 yahiro, all rights reserved.</div>
);

const style = css`
  height: 60px;
  background: ${colors.footer};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

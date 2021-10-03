import { css, FC, jsx } from 'qx';

export const Footer: FC = () => (
  <div css={style}>©2021 yahiro, all rights reserved.</div>
);

const style = css`
  height: 60px;
  background: #666;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

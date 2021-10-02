import { css, FC, jsx, QxChildren } from 'qx';
import { colors } from '~/web/base';

type Props = {
  altBgColor?: boolean;
  children: QxChildren;
  innerCss?: string;
};

export const SectionBase: FC<Props> = ({ altBgColor, children, innerCss }) => (
  <div css={style} class={altBgColor && '--alt-bg-color'}>
    <div class="content" css={innerCss}>
      {children}
    </div>
  </div>
);

const style = css`
  background: ${colors.sectionBg};

  &.--alt-bg-color {
    background: ${colors.sectionBgAlt};
  }

  > .content {
    margin: 0 auto;
    max-width: 900px;
  }
`;

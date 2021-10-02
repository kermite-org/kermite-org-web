import { css, FC, jsx, QxChildren } from 'qx';
import { colors } from '~/web/base';

type Props = {
  altBgColor?: boolean;
  children: QxChildren;
  innerCss?: string;
  contentWidth?: number;
};

export const SectionBase: FC<Props> = ({
  altBgColor,
  children,
  innerCss,
  contentWidth = 1200,
}) => (
  <div css={style(contentWidth)} class={altBgColor && '--alt-bg-color'}>
    <div class="content" css={innerCss}>
      {children}
    </div>
  </div>
);

const style = (contentWidth: number) => css`
  background: ${colors.sectionBg};

  &.--alt-bg-color {
    background: ${colors.sectionBgAlt};
  }

  > .content {
    margin: 0 auto;
    max-width: ${contentWidth}px;
  }
`;

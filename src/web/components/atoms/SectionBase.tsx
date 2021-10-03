import { css, FC, jsx, QxChildren } from 'qx';
import { colors, zOrders } from '~/web/base';

type Props = {
  id?: string;
  altBgColor?: boolean;
  children: QxChildren;
  innerCss?: string;
  contentWidth?: number;
};

export const SectionBase: FC<Props> = ({
  id,
  altBgColor,
  children,
  innerCss,
  contentWidth = 1200,
}) => (
  <div css={style(contentWidth)} class={altBgColor && '--alt-bg-color'}>
    <div id={id} class="scroll-anchor" />
    <div class="content" css={innerCss}>
      {children}
    </div>
  </div>
);

const style = (contentWidth: number) => css`
  background: ${colors.sectionBg};
  position: relative;

  &.--alt-bg-color {
    background: ${colors.sectionBgAlt};
  }

  > .content {
    margin: 0 auto;
    max-width: ${contentWidth}px;
  }

  > .scroll-anchor {
    position: absolute;
    top: -60px;
    z-index: ${zOrders.scrollAnchor};
  }
`;

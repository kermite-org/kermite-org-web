import { css, FC, jsx, QxChildren } from 'qx';
import { colors } from '~/web/utils';

type Props = {
  altBgColor?: boolean;
  children: QxChildren;
};

export const SectionBase: FC<Props> = ({ altBgColor, children }) => (
  <div css={style} className={altBgColor && '--alt-bg-color'}>
    {children}
  </div>
);

const style = css`
  background: ${colors.sectionBg};

  &.--alt-bg-color {
    background: ${colors.sectionBgAlt};
  }
`;

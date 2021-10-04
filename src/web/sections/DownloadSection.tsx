import { css, jsx } from 'qx';
import { colors, langs, SectionFC } from '~/web/base';
import { SectionBase } from '~/web/components/atoms';

export const DownloadSection: SectionFC = ({ altBgColor }) => (
  <SectionBase id="download" altBgColor={altBgColor} innerCss={style}>
    <a
      class="button"
      href="https://github.com/kermite-org/Kermite/releases"
      target="_blank"
      rel="noreferrer"
    >
      <i class="fab fa-github-square" />
      <span qxIf={langs.en}>Download from github</span>
      <span qxIf={langs.ja}>githubでダウンロード</span>
    </a>
  </SectionBase>
);

const style = css`
  padding: 80px 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  > .button {
    height: 80px;
    font-size: 28px;
    display: flex;
    align-items: center;
    background: ${colors.downloadButton};
    color: ${colors.white};
    padding: 0 30px;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      opacity: 0.7;
    }
    transition: all 0.3s;

    > i {
      margin-right: 10px;
      font-size: 44px;
    }
  }
`;

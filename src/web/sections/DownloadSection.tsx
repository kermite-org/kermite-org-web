import { css, jsx } from 'alumina';
import { colors, langs, SectionFC } from '~/web/base';
import { SectionBase } from '~/web/components/atoms';

export const DownloadSection: SectionFC = ({ altBgColor }) => (
  <SectionBase id="download" altBgColor={altBgColor} innerCss={style}>
    <div className="environment-row">
      <h3 qxIf={langs.en}>System Requirements</h3>
      <h3 qxIf={langs.ja}>動作環境</h3>
      <ul>
        <li>
          <i class="fab fa-windows icon-win" />
          Windows 10
        </li>
        <li>
          <i class="fab fa-apple icon-mac" />
          MacOS 10.15 Catalina<span class="asterisk">*</span>
        </li>
      </ul>

      <p class="note" qxIf={langs.en}>
        Not tested on MacOS 11 and machines with Apple M1 processor. <br />
      </p>
      <p class="note" qxIf={langs.ja}>
        * 2021年10月現在、MacOS 11およびApple M1プロセッサ
        <br />
        搭載マシンでの動作がまだ検証できていません。
      </p>
    </div>
    <div className="button-row">
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
    </div>
  </SectionBase>
);

const style = css`
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .environment-row {
    font-size: 30px;

    > ul {
      margin-top: 20px;

      > li {
        font-size: 28px;
        > i {
          width: 30px;
          margin-right: 8px;
          display: inline-flex;
          justify-content: center;
        }

        > .asterisk {
          font-size: 14px;
          vertical-align: super;
        }

        > i.icon-win {
          font-size: 32px;
        }

        > i.icon-mac {
          font-size: 40px;
        }
      }

      > li + li {
        margin-top: 10px;
      }
    }

    > .note {
      margin-top: 15px;
      font-size: 14px;
    }
  }

  > .button-row {
    margin-top: 50px;

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
  }
`;

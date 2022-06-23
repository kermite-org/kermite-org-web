import { css, jsx } from 'alumina';
import { colors, langs, SectionFC } from '~/base';
import { SectionBase } from '~/components/atoms';

export const DownloadSection: SectionFC = ({ altBgColor }) => (
  <SectionBase id="download" altBgColor={altBgColor} innerCss={style}>
    <div className="environment-row">
      <h3 if={langs.en}>Supported Environments</h3>
      <h3 if={langs.ja}>動作環境</h3>
      <ul>
        <li>
          <i class="fab fa-windows icon-win" />
          <i class="fab fa-apple icon-win" />
          <i class="fab fa-linux icon-win" />
          <i class="fab fa-android icon-win" />
        </li>
        <li>
          <i class="fab fa-chrome icon-win" />
          Google Chrome
        </li>
      </ul>

      <div className="texts">
        <p if={langs.ja}>
          キーボードはHIDデバイスのためどのOSでも使用できます。
          <br />
          ユーティリティソフトはブラウザ(Google Chrome)で動作します。
        </p>
        <p if={langs.en}>
          The keyboard is an HID device and can be used on any OS.
          <br />
          The utility software runs in a browser (Google Chrome).
        </p>
      </div>
    </div>

    <div className="button-row">
      <a
        class="button"
        href="https://app.kermite.org"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa fa-rocket" />
        <span if={langs.en}>Launch utility software</span>
        <span if={langs.ja}>ユーティリティソフトを起動</span>
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
    h3,
    ul {
      font-size: 30px;
    }

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

    > .texts {
      font-size: 20px;
      margin-top: 20px;
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

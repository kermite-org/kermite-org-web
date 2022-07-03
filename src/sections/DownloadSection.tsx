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
          <i class="fab fa-windows" />
          <i class="fab fa-apple" />
          <i class="fab fa-linux" />
        </li>
        <li>
          <i class="fab fa-chrome" />
          Google Chrome
        </li>
      </ul>

      <div className="texts">
        <p if={langs.ja}>
          キーボードはHIDデバイスとして機能するので、どのOSでも使用できます。
          <br />
          ユーティリティソフトはGoogle
          ChromeなどのWebHIDをサポートしているブラウザで動作します。※iOS/Androidには対応していません。
        </p>
        <p if={langs.en}>
          The keyboard is an HID device and can be used on any OS.
          <br />
          The utility software runs in browsers that support WebHID. ※iOS and
          Android are not supported.
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
        <span if={langs.en}>Launch web app</span>
        <span if={langs.ja}>Webアプリを起動</span>
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
    max-width: 700px;
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
          font-size: 32px;
        }

        > .asterisk {
          font-size: 14px;
          vertical-align: super;
        }
      }

      > li + li {
        margin-top: 10px;
      }
    }

    > .texts {
      font-size: 20px;
      margin-top: 20px;
      line-height: 1.5em;
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

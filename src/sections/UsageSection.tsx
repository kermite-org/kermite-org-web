import { css, jsx } from 'alumina';
import { SectionBase } from '~/components/atoms';
import { langs, SectionFC } from '~/base';

export const UsageSection: SectionFC = ({ altBgColor }) => (
  <SectionBase innerCss={style} altBgColor={altBgColor} contentWidth={900}>
    <h2 if={langs.en}>How To Use</h2>
    <h2 if={langs.ja}>使い方</h2>
    <div class="header-notes">
      <p if={langs.ja}>
        ※以下のスライドは古いバージョン(デスクトップアプリ)向けの解説で、現在の実装では一部異なるところがあります。またAVRのサポートが廃止されており、対応MCUはRP2040のみとなっています。
      </p>
      <p if={langs.en}>
        ※The following slides are explanations for older versions (desktop apps)
        and may differ in some parts. Note that support for AVR has been
        discontinued.
      </p>
    </div>
    <div class="slides-part">
      <script
        async
        class="docswell-embed"
        src="https://www.docswell.com/assets/libs/docswell-embed/docswell-embed.min.js"
        data-src="https://www.docswell.com/slide/K28RGK/embed"
        data-aspect="0.625"
      />
      <script
        async
        class="docswell-embed"
        src="https://www.docswell.com/assets/libs/docswell-embed/docswell-embed.min.js"
        data-src="https://www.docswell.com/slide/5YEE9Z/embed"
        data-aspect="0.625"
      />
    </div>
    <div class="document-link-part" if={false}>
      <a
        href="https://hackmd.io/@kermite/HJCOpTBtY"
        target="_blank"
        rel="noreferrer"
      >
        ドキュメント (HackMD)
      </a>
    </div>
  </SectionBase>
);

const style = css`
  padding: 50px 40px;
  > h2 {
    font-size: 32px;
  }

  a:hover {
    text-decoration: underline;
  }

  > .header-notes {
    margin-top: 20px;
    font-size: 18px;
  }

  > .slides-part {
    margin-top: 30px;

    > div + div {
      margin-top: 50px;
    }

    > .docswell-link {
      display: flex;
      justify-content: flex-end;
    }
  }

  > .document-link-part {
    margin-top: 50px;
    font-size: 24px;
  }
`;

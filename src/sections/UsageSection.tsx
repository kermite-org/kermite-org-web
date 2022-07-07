import { css, jsx } from 'alumina';
import { SectionBase } from '~/components/atoms';
import { langs, SectionFC } from '~/base';

export const UsageSection: SectionFC = ({ altBgColor }) => (
  <SectionBase innerCss={style} altBgColor={altBgColor} contentWidth={900}>
    <h2 if={langs.en}>How To Use</h2>
    <h2 if={langs.ja}>使い方</h2>
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
    line-height: 1.5em;
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

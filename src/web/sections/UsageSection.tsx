import { css, jsx } from 'qx';
import { SectionBase } from '~/web/components/atoms';
import { SectionFC } from '~/web/base';

export const UsageSection: SectionFC = ({ altBgColor }) => (
  <SectionBase innerCss={style} altBgColor={altBgColor} contentWidth={1100}>
    <h2>How To Use</h2>
    <div class="slides-part">
      <script
        async
        class="docswell-embed"
        src="https://www.docswell.com/assets/libs/docswell-embed/docswell-embed.min.js"
        data-src="https://www.docswell.com/slide/5YEE9Z/embed"
        data-aspect="0.625"
      ></script>
    </div>
    <div class="document-link-part" qxIf={false}>
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

  > .slides-part {
    margin-top: 30px;

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

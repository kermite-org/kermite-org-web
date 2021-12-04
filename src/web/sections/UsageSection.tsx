import { css, jsx } from 'qx';
import { SectionBase } from '~/web/components/atoms';
import { SectionFC } from '~/web/base';

export const UsageSection: SectionFC = ({ altBgColor }) => (
  <SectionBase innerCss={style} altBgColor={altBgColor} contentWidth={1100}>
    <h2>How To Use</h2>
    <div>
      <script
        async
        class="docswell-embed"
        src="https://www.docswell.com/assets/libs/docswell-embed/docswell-embed.min.js"
        data-src="https://www.docswell.com/slide/5YEE9Z/embed"
        data-aspect="0.625"
      ></script>
      <div class="docswell-link">
        <a href="https://www.docswell.com/s/yahiro/5YEE9Z-2021-12-04-232753">
          Kermite導入ガイド(新規キーボード編) by @yahiro
        </a>
      </div>
    </div>
  </SectionBase>
);

const style = css`
  padding: 50px 40px;
  > h2 {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

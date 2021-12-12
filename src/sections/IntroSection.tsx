import { css, jsx } from 'alumina';
import { SectionBase } from '~/components/atoms';
import { langs, mqLarge, SectionFC } from '~/base';

export const IntroSection: SectionFC = ({ altBgColor }) => (
  <SectionBase
    id="concept"
    innerCss={style}
    altBgColor={altBgColor}
    contentWidth={1000}
  >
    <img
      class="image"
      src="https://i.gyazo.com/d90ded001fb7980396003edcf11829c2.png"
    />
    <div class="text">
      <p if={langs.en}>
        Kermite is a new software platform for DIY keyboards. It supports your
        keyboard setup with a number of features integrated into the utility
        software.
      </p>
      <p if={langs.ja}>
        Kermiteは、自作キーボードのために開発された、新しいファームウェア/エコシステムです。
        ユーティリティソフトに統合された多数の機能で、キーボードの開発や運用をサポートします。
      </p>
    </div>
  </SectionBase>
);

const style = css`
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-size: 24px;
  line-height: 1.5em;

  ${mqLarge} {
    gap: 40px;
  }

  > .image {
    width: 100%;
    max-width: 800px;
  }
`;

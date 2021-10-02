import { css, jsx } from 'qx';
import { SectionBase } from '~/web/components/atoms';
import { mqLarge, SectionFC } from '~/web/base';

export const AboutSection: SectionFC = ({ altBgColor }) => (
  <SectionBase innerCss={style} altBgColor={altBgColor} contentWidth={1000}>
    <img
      class="image"
      src="https://i.gyazo.com/dd06a2d9e1c98815cd69394911a5a29b.png"
    />
    <div class="text">
      <p>
        Kermiteは、自作キーボードのために開発された、新しいファームウェア/エコシステムです。
        ユーティリティソフトに統合された多数の機能で、キーボードの開発や運用をサポートします。
      </p>
      <p>
        Kermite is a new software platform for DIY keyboards. It supports your
        keyboard setup with many features integrated to the utility software.
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

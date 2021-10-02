import { css, FC, jsx } from 'qx';
import { colors, mqLarge } from '~/web/utils';

export const AboutSection: FC = () => (
  <div css={style}>
    <div class="content">
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
    </div>
  </div>
);

const style = css`
  color: ${colors.mainText};
  padding: 50px 40px;

  > .content {
    margin: 0 auto;
    max-width: 900px;
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
      max-width: 700px;
    }
  }
`;

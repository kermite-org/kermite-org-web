import { css, jsx } from 'qx';
import { SectionBase } from '~/web/components/atoms';
import { colors, langs, mqLarge, SectionFC } from '~/web/base';

type FeatureItem = {
  title: string;
  textEn: string;
  textJa: string;
  imageUrl: string;
  link?: {
    titleEn: string;
    titleJa: string;
    url: string;
  };
};

const featureItems: FeatureItem[] = [
  {
    title: 'MCU Boards Supported',
    imageUrl: 'https://i.gyazo.com/9200650e13090ebb8a5cb33ea85cfd99.png',
    textEn:
      'It is compatible with AVR and RP2040 microcontroller boards.\nYou can easily design your keyboard with them.',
    textJa:
      'AVRとRP2040のマイコンボードに対応しています。これらを使うことで、簡単にハードウェアを構成できます。',
  },
  {
    title: 'Easy Firmware Configuration',
    imageUrl: 'https://i.gyazo.com/0e437b6fe6a2850a99f653ca226accc4.png',
    textEn:
      'Standard firmware is provided to cover all common keyboard configurations. It is configured with GUI and generated firmware can be flashed into MCU on the fly.',
    textJa:
      '一般的なキーボードの構成をカバーできる、標準ファームウェアが提供されます。GUIで設定を行い、生成されたファームウェアをそのまま書き込めます。',
  },
  {
    title: 'Components Supported',
    imageUrl: 'https://i.gyazo.com/8ba330e98c4c0f9551c515fccb4c4711.png',
    textEn:
      'Kermite supports commonly used keyboard components like RGBLED, OLED, Rotary Encoders, Optical Sensors, ...etc',
    textJa:
      '自作キーボードでよく使われる周辺部品に対応しています。NeoPixel RGBLED, I2C OLED, ロータリーエンコーダなどが利用できます。',
  },
  {
    title: 'Intuitive Layout Editor',
    imageUrl: 'https://gyazo.com/9501d747d2dcceff49a577be4c46c6ce.png',
    textEn:
      'It come with layout editor that allows you to edit the key layout directly. Not only the key layout, but also the outline of the keyboard can be set to any desired shape.',
    textJa:
      '直感的にキー配置を編集できる、レイアウトエディタを搭載しています。キーの配置だけでなく、キーボードの外形も任意の形状で設定できます。',
  },
  {
    title: 'Share Profiles',
    imageUrl: 'https://i.gyazo.com/e1f465f7d7b75f89459250ef4794013e.png',
    textEn:
      'Kermite Server provides user-defined keymappings. You can publish your own keymappings and make them available to everyone.',
    textJa:
      'Kermite Serverではユーザが投稿したキーマッピングが提供されています。自分が作ったキーマッピングを公開して、誰でも使えるようにできます。',
    link: {
      titleEn: 'View user profiles',
      titleJa: 'ユーザの投稿を見る',
      url: 'https://dev.server.kermite.org',
    },
  },
];

export const FeatureSection: SectionFC = ({ altBgColor }) => (
  <SectionBase
    id="features"
    innerCss={style}
    altBgColor={altBgColor}
    contentWidth={1100}
  >
    <div class="items-box">
      {featureItems.map((item, idx) => (
        <div key={idx} class="item">
          <div class="image-part">
            <img class="image" src={item.imageUrl} />
          </div>
          <div class="text-part">
            <h3>{item.title}</h3>
            <div class="text" qxIf={langs.en}>
              {item.textEn}
            </div>
            <div class="text" qxIf={langs.ja}>
              {item.textJa}
            </div>
            {item.link && (
              <div>
                <a
                  href={item.link.url}
                  target="_blank"
                  qxIf={langs.en}
                  rel="noreferrer"
                >
                  {item.link.titleEn}
                </a>
                <a
                  href={item.link.url}
                  target="_blank"
                  qxIf={langs.ja}
                  rel="noreferrer"
                >
                  {item.link.titleJa}
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </SectionBase>
);

const style = css`
  padding: 50px 40px;

  > .items-box {
    display: flex;
    flex-direction: column;
    gap: 60px;

    > .item {
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-size: 22px;
      line-height: 1.5em;

      > .image-part {
        width: 400px;
        height: 300px;
        flex-shrink: 0;

        > img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }

      > .text-part {
        display: flex;
        flex-direction: column;
        gap: 20px;
        > h3 {
          font-size: 32px;
          color: ${colors.headerText};
        }
      }
    }
  }

  ${mqLarge} {
    > .items-box {
      > .item {
        width: 100%;
        flex-direction: row;

        &:nth-child(even) {
          flex-direction: row-reverse;
        }

        > .text-part {
          flex-grow: 1;
        }
      }
    }
  }
`;

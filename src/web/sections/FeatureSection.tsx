import { css, jsx } from 'qx';
import { SectionBase } from '~/web/components/atoms';
import { mqLarge, SectionFC } from '~/web/base';

type FeatureItem = {
  title: string;
  text: string;
  imageUrl: string;
};

const featureItems: FeatureItem[] = [
  {
    title: 'MCU Boards Supported',
    imageUrl: 'https://i.gyazo.com/9200650e13090ebb8a5cb33ea85cfd99.png',
    text: 'AVR and RP2040 boards supported.\nYou can easily design your keyboard with them.',
  },
  {
    title: 'Easy Firmware Configuration',
    imageUrl: 'https://i.gyazo.com/0e437b6fe6a2850a99f653ca226accc4.png',
    text: 'Standard firmware covers typical keyboard design. It can be setup without code.',
  },
  {
    title: 'Components Supported',
    imageUrl: 'https://i.gyazo.com/8ba330e98c4c0f9551c515fccb4c4711.png',
    text: 'Kermite supports commonly used keyboard components like RGBLED, OLED, Rotary Encoders, Optical Sensors, Joystick, ...etc',
  },
  {
    title: 'Intuitive Layout Editor',
    imageUrl: 'https://gyazo.com/9501d747d2dcceff49a577be4c46c6ce.png',
    text: 'GUI layout editor is integrated.',
  },
  {
    title: 'Share Profiles',
    imageUrl: 'https://i.gyazo.com/e1f465f7d7b75f89459250ef4794013e.png',
    text: 'Kermite Server enables you to find keymapping by other users. You can also publish your profile to others.',
  },
];

export const FeatureSection: SectionFC = ({ altBgColor }) => (
  <SectionBase innerCss={style} altBgColor={altBgColor} contentWidth={1100}>
    <div class="items-box">
      {featureItems.map((item, idx) => (
        <div key={idx} class="item">
          <div class="image-part">
            <img class="image" src={item.imageUrl} />
          </div>
          <div class="text-part">
            <h3>{item.title}</h3>
            <div class="text">{item.text}</div>
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
      font-size: 20px;

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

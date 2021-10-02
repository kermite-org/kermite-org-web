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
    imageUrl: 'https://i.gyazo.com/00257ad39eff1b34e010ea461e4d72c1.png',
    text: 'AVR and RP2040 boards supported.\nYou can easily design your keyboard with them.',
  },
  {
    title: 'Easy Firmware Configuration',
    imageUrl: 'https://i.gyazo.com/00257ad39eff1b34e010ea461e4d72c1.png',
    text: 'Standard firmware covers typical keyboard design. It can be configured without code.',
  },
  {
    title: 'Components Supported',
    imageUrl: 'https://i.gyazo.com/00257ad39eff1b34e010ea461e4d72c1.png',
    text: 'Kermite supports commonly used keyboard components like RGBLED, OLED, Rotary Encoders, Optical Sensors, Joystick, ...etc',
  },
  {
    title: 'Intuitive Layout Editor',
    imageUrl: 'https://i.gyazo.com/00257ad39eff1b34e010ea461e4d72c1.png',
    text: 'GUI layout editor is integrated.',
  },
  {
    title: 'Share Profiles',
    imageUrl: 'https://i.gyazo.com/00257ad39eff1b34e010ea461e4d72c1.png',
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

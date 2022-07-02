import { css, jsx } from 'alumina';
import { Icon, SectionBase } from '~/components/atoms';
import { mqLarge, SectionFC } from '~/base';

type LinkItem = {
  text: string;
  iconSpec: string;
  url: string;
};

const linkItems: LinkItem[] = [
  {
    text: 'Github',
    iconSpec: 'fab fa-github-square',
    url: 'https://github.com/kermite-org/Kermite',
  },
  {
    text: 'Discord Server',
    iconSpec: 'fab fa-discord',
    url: 'https://discord.gg/PNpEn3Z2kT',
  },
];

export const LinkSection: SectionFC = ({ altBgColor }) => (
  <SectionBase innerCss={style} altBgColor={altBgColor} contentWidth={1100}>
    <div class="block">
      <h2>Links</h2>
      <div class="items-box">
        {linkItems.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            class="item"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icon-part">
              <Icon spec={item.iconSpec} />
            </div>
            <div class="detail-part">
              <div class="text">{item.text}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </SectionBase>
);

const style = css`
  padding: 50px 40px;

  > .block {
    width: 100%;
    margin: 0 auto;

    > h2 {
      font-size: 32px;
    }

    > .items-box {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;

      flex-direction: column;

      > .item {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 18px;
        color: #668;
        line-height: 1.5em;

        > .icon-part {
          flex-shrink: 0;
          font-size: 50px;
        }

        > .detail-part {
          flex-grow: 1;
          font-size: 24px;
        }
      }
    }
  }

  ${mqLarge} {
    > .block > .items-box {
      flex-direction: row;
    }
  }
`;

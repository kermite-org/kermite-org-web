import { css, jsx } from 'alumina';
import { SectionBase } from '~/web/components/atoms';
import { mqLarge, SectionFC } from '~/web/base';

type AuthorItem = {
  name: string;
  text: string;
  avatarImageUrl: string;
};

const authorItems: AuthorItem[] = [
  {
    name: 'yahiro',
    text: 'Core developer, firmware and utility software',
    avatarImageUrl: 'https://i.gyazo.com/16321689cfd7d0a0d89744ab058ef002.png',
  },
  {
    name: 'reo',
    text: 'Kermite Server',
    avatarImageUrl: 'https://i.gyazo.com/cd7b3e56882b7f35fda07b7595c54974.png',
  },
];

export const AuthorSection: SectionFC = ({ altBgColor }) => (
  <SectionBase innerCss={style} altBgColor={altBgColor} contentWidth={1100}>
    <div class="block">
      <h2>Developers</h2>
      <div class="items-box">
        {authorItems.map((item, idx) => (
          <div key={idx} class="item">
            <div class="avatar-part">
              <img src={item.avatarImageUrl} />
            </div>
            <div class="detail-part">
              <h3>{item.name}</h3>
              <div class="text">{item.text}</div>
            </div>
          </div>
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
        gap: 30px;
        font-size: 18px;
        line-height: 1.5em;

        > .avatar-part {
          width: 80px;
          height: 80px;
          flex-shrink: 0;

          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        > .detail-part {
          flex-grow: 1;

          > h3 {
            font-size: 24px;
            font-weight: normal;
          }

          > .text {
            margin-top: 5px;
          }
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

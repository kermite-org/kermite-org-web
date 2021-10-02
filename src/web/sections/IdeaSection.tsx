import { css, jsx } from 'qx';
import { SectionBase } from '~/web/components/atoms';
import { mqLarge, SectionFC } from '~/web/base';

type IdeaItem = {
  title: string;
  text: string;
  imageUrl: string;
};

const ideaItems: IdeaItem[] = [
  {
    title: 'Beginner Friendly',
    imageUrl: 'https://i.gyazo.com/00257ad39eff1b34e010ea461e4d72c1.png',
    text: 'ソフト単体でファームウェアの書き込みやキーマッピングの設定が簡単にできます。',
  },
  {
    title: 'Batteries Included',
    imageUrl: 'https://i.gyazo.com/00257ad39eff1b34e010ea461e4d72c1.png',
    text: '対応キーボードのファームウェアやキーマッピングのプリセットなどが同梱されており、すぐに使い始めることができます。',
  },
  {
    title: 'Open Source',
    imageUrl: 'https://i.gyazo.com/00257ad39eff1b34e010ea461e4d72c1.png',
    text: 'ファームウェアとユーティリティソフトのソースコードがMITライセンスで提供されています。',
  },
];

export const IdeaSection: SectionFC = ({ altBgColor }) => (
  <SectionBase innerCss={style} altBgColor={altBgColor} contentWidth={1100}>
    <div class="items-box">
      {ideaItems.map((item, idx) => (
        <div key={idx} class="item">
          <h3 class="text">{item.title}</h3>
          <img class="image" src={item.imageUrl} />
          <div>{item.text}</div>
        </div>
      ))}
    </div>
  </SectionBase>
);

const style = css`
  padding: 50px 40px;

  > .items-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    flex-direction: column;

    > .item {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      line-height: 1.5em;

      > h3 {
        font-size: 28px;
      }
    }

    ${mqLarge} {
      flex-direction: row;
      align-items: flex-start;
    }
  }
`;

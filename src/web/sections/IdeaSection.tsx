import { css, jsx } from 'alumina';
import { Icon, SectionBase } from '~/web/components/atoms';
import { langs, mqLarge, SectionFC } from '~/web/base';

type IdeaItem = {
  title: string;
  textEn: string;
  textJa: string;
  iconSpec: string;
};

const ideaItems: IdeaItem[] = [
  {
    title: 'Beginner Friendly',
    textEn:
      'You can flash firmware and config keymapping easily with single app.',
    textJa:
      'ソフト単体でファームウェアの書き込みやキーマッピングの設定が簡単にできます。',
    iconSpec: 'fa fa-child',
  },
  {
    title: 'Ready to Use',
    textEn:
      'Since it includes firmware and preset resources for supported keyboards, you can start using it right away.',
    textJa:
      '対応キーボードのファームウェアやキーマッピングのプリセットなどが同梱されており、すぐに使い始めることができます。',
    iconSpec: 'fa fa-cube',
  },
  {
    title: 'Open Source',
    textEn:
      'The source code for firmware and utility software is available under MIT license.',
    textJa:
      'ファームウェアとユーティリティソフトのソースコードがMITライセンスで提供されています。',
    iconSpec: 'fab fa-github-alt',
  },
];

export const IdeaSection: SectionFC = ({ altBgColor }) => (
  <SectionBase innerCss={style} altBgColor={altBgColor} contentWidth={1100}>
    <div class="items-box">
      {ideaItems.map((item, idx) => (
        <div key={idx} class="item">
          <h3>{item.title}</h3>
          <Icon spec={item.iconSpec} />
          <div class="text" qxIf={langs.en}>
            {item.textEn}
          </div>
          <div class="text" qxIf={langs.ja}>
            {item.textJa}
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
    justify-content: center;
    align-items: center;
    gap: 40px;

    flex-direction: column;

    > .item {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      font-size: 18px;
      line-height: 1.5em;

      > h3 {
        font-size: 28px;
      }

      > i {
        color: #888;
        font-size: 144px;
      }
    }

    ${mqLarge} {
      flex-direction: row;
      align-items: flex-start;
    }
  }
`;

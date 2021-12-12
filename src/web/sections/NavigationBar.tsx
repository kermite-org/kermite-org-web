import { css, FC, jsx } from 'alumina';
import { colors, langs, zOrders } from '~/web/base';
import { LanguageSelectorPart } from '~/web/components/organisms/LanguageSelectorPart';

type NavigationItem = {
  targetUrl: string;
  textEn: string;
  textJa: string;
};

const navigationItems: NavigationItem[] = [
  { targetUrl: '#concept', textEn: 'concept', textJa: '概要' },
  { targetUrl: '#features', textEn: 'features', textJa: '特徴' },
  { targetUrl: '#download', textEn: 'download', textJa: 'ダウンロード' },
];
export const NavigationBar: FC = () => (
  <div css={style}>
    <div class="site-title">Kermite</div>
    <ul class="link-items">
      {navigationItems.map((item) => (
        <li key={item.targetUrl} class="link-item">
          <a href={item.targetUrl} qxIf={langs.en} class="link">
            {item.textEn}
          </a>
          <a href={item.targetUrl} qxIf={langs.ja} class="link">
            {item.textJa}
          </a>
        </li>
      ))}
    </ul>
    <LanguageSelectorPart className="lang-sel" />
  </div>
);

const style = css`
  background: ${colors.topBar};
  height: 60px;
  position: sticky;
  top: 0;
  color: ${colors.white};
  display: flex;
  align-items: center;
  z-index: ${zOrders.topBar};

  > .site-title {
    font-size: 30px;
    margin-left: 20px;
  }

  > ul.link-items {
    margin-left: auto;
    display: flex;
    font-size: 20px;
    gap: 30px;
    margin-right: 40px;
    > li.link-item {
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        opacity: 0.7;
        color: blue;
      }
    }
  }

  > .lang-sel {
    margin-right: 20px;
  }
`;

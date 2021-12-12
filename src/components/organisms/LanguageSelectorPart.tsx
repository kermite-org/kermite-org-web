import { css, FC, jsx } from 'alumina';
import { langs, reflectValue, setUiLanguage } from '~/base';

type Props = {
  className?: string;
};

export const LanguageSelectorPart: FC<Props> = ({ className }) => {
  return (
    <div css={style} className={className}>
      <select value={langs.current} onChange={reflectValue(setUiLanguage)}>
        <option value="English">US</option>
        <option value="Japanese">JP</option>
      </select>
    </div>
  );
};

const style = css`
  > select {
    cursor: pointer;
    outline: none;
    padding: 2px;
  }
`;

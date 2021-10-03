type UiLanguage = 'English' | 'Japanese';

const uiLanguage: UiLanguage =
  localStorage.getItem('uiLanguage') === 'Japanese' ? 'Japanese' : 'English';

export const langs = {
  get current(): UiLanguage {
    return uiLanguage;
  },
  get en(): boolean {
    return uiLanguage === 'English';
  },
  get ja(): boolean {
    return uiLanguage === 'Japanese';
  },
};

export function setUiLanguage(lang: UiLanguage) {
  localStorage.setItem('uiLanguage', lang);
  location.reload();
}

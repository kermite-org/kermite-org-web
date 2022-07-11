type UiLanguage = 'English' | 'Japanese';

function loadUiLanguage(): UiLanguage {
  let isJapanese = false;
  const lang = localStorage.getItem('uiLanguage');
  if (lang) {
    isJapanese = lang === 'Japanese';
  } else {
    isJapanese = navigator.language === 'ja';
  }
  return isJapanese ? 'Japanese' : 'English';
}

const uiLanguage: UiLanguage = loadUiLanguage();

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

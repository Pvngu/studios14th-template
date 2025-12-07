import { getRelativeLocaleUrl } from 'astro:i18n';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

type Translations = typeof en; 

const TRANSLATIONS = {
    en,
    es,
};

export function useTranslations(locale: string | undefined) {
  const lang = locale === 'en' ? 'en' : 'es';
  
  return function t(key: keyof Translations) {
    return TRANSLATIONS[lang][key] ?? TRANSLATIONS['es'][key];
  }
}

export function getLang(locale: string | undefined) {
  return locale === 'en' ? 'en' : 'es';
}

export function useNestedTranslations(locale: string | undefined) {
  const lang = getLang(locale);

  return function t(key: string): string {
    const keys = key.split('.');
    let result: any = TRANSLATIONS[lang];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    
    return String(result);
  }
}

export function getTranslation(item: { translations: any[] }, lang: string) {
  if (!item || !item.translations) return { title: '', description: '' };

  // Try to find the exact language match
  const translation = item.translations.find((t) => t.languages_code === lang);

  // Fallback to English (or the first available translation) if missing
  const fallback = item.translations.find((t) => t.languages_code === 'en') || item.translations[0];

  return translation || fallback || { title: '', description: '' };
}

export function getLocalizedPath(path: string | undefined, locale: string | undefined) {
  if (!path) return undefined;

  // Ensure path is a string
  if (typeof path !== 'string') {
    console.error('getLocalizedPath received non-string path:', path);
    return undefined;
  }

  // Handle fragment anchors: localize them so they include the locale prefix
  if (path.startsWith('#') || path.startsWith('/#')) {
    const fragment = path.startsWith('#') ? path : path.slice(1); // '/#x' -> '#x'
    const base = getRelativeLocaleUrl(locale || 'en', '/');
    const normalizedBase = base.endsWith('/') ? base : base + '/';
    return normalizedBase + fragment;
  }

  // Check for external links
  const isExternal = path.startsWith('http') || 
                     path.startsWith('//') || 
                     path.startsWith('mailto:') || 
                     path.startsWith('tel:');

  if (isExternal) {
    return path;
  }

  // Ensure we fallback to 'en'
  return getRelativeLocaleUrl(locale || 'en', path);
}
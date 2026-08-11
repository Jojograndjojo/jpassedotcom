import en from "../i18n/en.json";
import fr from "../i18n/fr.json";

const translations: Record<string, Record<string, string>> = { en, fr };

export function getTranslation(locale: string, key: string): string {
  const t = translations[locale] ?? translations["en"];
  return t[key] ?? key;
}

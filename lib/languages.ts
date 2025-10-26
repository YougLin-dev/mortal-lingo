import type { LanguageCode } from "./types";

export const SUPPORTED_LANGUAGES: Record<
  Exclude<LanguageCode, "auto">,
  { name: string; nativeName: string }
> = {
  en: { name: "English", nativeName: "English" },
  zh: { name: "Chinese (Simplified)", nativeName: "简体中文" },
  "zh-TW": { name: "Chinese (Traditional)", nativeName: "繁體中文" },
  ja: { name: "Japanese", nativeName: "日本語" },
  ko: { name: "Korean", nativeName: "한국어" },
  es: { name: "Spanish", nativeName: "Español" },
  fr: { name: "French", nativeName: "Français" },
  de: { name: "German", nativeName: "Deutsch" },
  ru: { name: "Russian", nativeName: "Русский" },
  ar: { name: "Arabic", nativeName: "العربية" },
  pt: { name: "Portuguese", nativeName: "Português" },
  it: { name: "Italian", nativeName: "Italiano" },
  nl: { name: "Dutch", nativeName: "Nederlands" },
  pl: { name: "Polish", nativeName: "Polski" },
  tr: { name: "Turkish", nativeName: "Türkçe" },
  vi: { name: "Vietnamese", nativeName: "Tiếng Việt" },
  th: { name: "Thai", nativeName: "ไทย" },
  id: { name: "Indonesian", nativeName: "Bahasa Indonesia" },
  hi: { name: "Hindi", nativeName: "हिन्दी" },
};

export const getLanguageName = (code: LanguageCode): string => {
  if (code === "auto") {
    return "Auto Detect";
  }
  return SUPPORTED_LANGUAGES[code]?.nativeName || code;
};

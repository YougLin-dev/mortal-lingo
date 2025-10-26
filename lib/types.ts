import { scope } from "arktype";

const types = scope({
  ModelType: '"OPENAI" | "ANTHROPIC"',
  LanguageCode:
    '"auto" | "en" | "zh" | "zh-TW" | "ja" | "ko" | "es" | "fr" | "de" | "ru" | "ar" | "pt" | "it" | "nl" | "pl" | "tr" | "vi" | "th" | "id" | "hi"',
  AIModel: {
    id: "string", // unique id
    name: "string", // display name
    modelId: "string", // real model id
    modelType: "ModelType",
    url: "string.url", // complete url
    apiKey: "string",
  },
  TranslationStyle: '"underline" | "dashed" | "highlight"',
  OutputFormat: '"json" | "plain"',
  TranslationSetting: {
    sourceLanguage: "LanguageCode",
    targetLanguage: "LanguageCode",
    translationStyle: "TranslationStyle",
    translationModelId: "string | null",
    summaryModelId: "string | null",
    enablePageSummary: "boolean",
    enableTerminologyExtraction: "boolean",
    terminologyCount: "number",
    maxBatchSizePerRequest: "number",
    maxTextLengthPerRequest: "number",
    requestTimeout: "number",
    temperature: "number",
    preContextItems: "number",
    postContextItems: "number",
    preserveMarkup: "boolean",
    outputFormat: "OutputFormat",
    summarySystemPrompt: "string",
    summaryUserPrompt: "string",
    translationSystemPrompt: "string",
    translationUserPrompt: "string",
  },
  AppSettings: {
    isTranslationActive: "boolean",
    models: "AIModel[]",
    activeModelId: "string | null",
    translationSettings: "TranslationSetting",
  },
}).export();

export const AIModelSchema = types.AIModel;
export const LanguageCodeSchema = types.LanguageCode;
export const TranslationStyleSchema = types.TranslationStyle;
export const AppSettingsSchema = types.AppSettings;

export type AIModel = typeof AIModelSchema.infer;
export type LanguageCode = typeof LanguageCodeSchema.infer;
export type TranslationStyle = typeof TranslationStyleSchema.infer;
export type AppSettings = typeof AppSettingsSchema.infer;

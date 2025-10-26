import { nanoid } from "nanoid";
import type { AIModel, AppSettings } from "./types";

const defaultModel: AIModel = {
  id: nanoid(),
  name: "GPT-4 Omni",
  url: "https://api.302.ai/v1/chat/completions",
  apiKey: "",
  modelId: "gpt-4o-mini",
  modelType: "OPENAI",
};

export const settingsStorage = storage.defineItem<AppSettings>(
  "local:settings",
  {
    defaultValue: {
      isTranslationActive: false,
      models: [defaultModel],
      activeModelId: defaultModel.id,
      translationSettings: {
        sourceLanguage: "auto",
        targetLanguage: "zh",
        translationStyle: "dashed",
        translationModelId: defaultModel.id,
        summaryModelId: defaultModel.id,
        enablePageSummary: true,
        enableTerminologyExtraction: true,
        terminologyCount: 15,
        maxBatchSizePerRequest: 4,
        maxTextLengthPerRequest: 2000,
        requestTimeout: 60,
        temperature: 0.3,
        preContextItems: 2,
        postContextItems: 2,
        preserveMarkup: true,
        outputFormat: "json",
        summarySystemPrompt:
          "你是一名专业的翻译助理。阅读网页内容，提取用于后续翻译的背景知识与术语。遵循：不臆测、不发散、保持客观。",
        summaryUserPrompt:
          '输入为网页主要文本（可包含标题、导航、正文）。请：\n1) 提炼背景：主题、领域、目标读者、风格/语气、关键模块/功能、重要实体/缩略词。\n2) 提取术语（最多 {{terminologyCount}} 个）：术语、标准译法、说明（简要依据或注意事项）。\n输出只用JSON对象：{"background": string, "glossary":[{"term": string, "translation": string, "notes": string}]}\n不要输出额外文本。',
        translationSystemPrompt:
          "你是一名专业的翻译助理。要求：\n- 严格遵循术语表中的译法；未明确时依据背景知识给出最贴切译法。\n- 保留原有格式与标记（HTML/Markdown标签、代码、变量{{like_this}}、URL、数字与单位）。\n- 不添加解释、不扩写、不省略；按输入顺序逐条输出。\n- 译文应自然流畅，符合目标语言的表达习惯。",
        translationUserPrompt:
          '[背景知识]\n{{summary}}\n\n[术语表]\n{{terminology}}\n\n[前文]\n{{preMessages}}\n\n[待翻译内容]\n{{curMessages}}\n\n[后文]\n{{nextMessages}}\n\n请将[待翻译内容]中的每一条分别翻译为 {{targetLanguage}}，保持与输入条目一一对应。\n只输出JSON数组，按输入顺序，每项格式：\n{"src": string, "dst": string}\n若需要保留不译的标记/代码/URL，请原样保留。',
      },
    },
  }
);

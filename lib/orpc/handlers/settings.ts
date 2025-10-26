import { settingsStorage } from "@/lib/storage";
import type { AppSettings } from "@/lib/types";

export const settingsHandlers = {
  getSettings: async () => await settingsStorage.getValue(),

  updateSettings: async ({ input }: { input: Partial<AppSettings> }) => {
    const current = await settingsStorage.getValue();
    const updated = { ...current, ...input };
    await settingsStorage.setValue(updated);
    return updated;
  },
};

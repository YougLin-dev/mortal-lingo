// use background
import { os } from "@orpc/server";
import { type } from "arktype";
import { itemHandlers } from "./handlers/item";
import { settingsHandlers } from "./handlers/settings";
import { userHandlers } from "./handlers/user";

export const router = {
  hello: os.handler(async () => `${i18n.t("hello")} orpc`),

  getUser: os.input(type({ id: "string" })).handler(userHandlers.getUser),

  updateUser: os
    .input(type({ id: "string", name: "string" }))
    .handler(userHandlers.updateUser),

  deleteItem: os.input(type({ id: "string" })).handler(itemHandlers.deleteItem),

  getSettings: os.handler(settingsHandlers.getSettings),

  updateSettings: os
    .input(type({ isTranslationActive: "boolean | undefined" }))
    .handler(settingsHandlers.updateSettings),
};

export type AppRouter = typeof router;

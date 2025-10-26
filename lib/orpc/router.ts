// use background
import { os } from "@orpc/server";
import { z } from "zod";
import { itemHandlers } from "./handlers/item";
import { userHandlers } from "./handlers/user";

export const router = {
  hello: os.handler(async () => `${i18n.t("hello")} orpc`),

  getUser: os.input(z.object({ id: z.string() })).handler(userHandlers.getUser),

  updateUser: os
    .input(z.object({ id: z.string(), name: z.string() }))
    .handler(userHandlers.updateUser),

  deleteItem: os
    .input(z.object({ id: z.string() }))
    .handler(itemHandlers.deleteItem),
};

export type AppRouter = typeof router;

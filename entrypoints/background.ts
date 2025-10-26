import { RPCHandler } from "@orpc/server/message-port";
import consola from "consola";
import { router } from "@/lib/orpc/router";

const handler = new RPCHandler(router);

export default defineBackground(() => {
  browser.runtime.onConnect.addListener((port) => {
    handler.upgrade(port, { context: {} });
  });
  consola.log(`${i18n.t("hello")} background!`, { id: browser.runtime.id });
});

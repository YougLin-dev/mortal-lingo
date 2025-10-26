import consola from "consola";

export default defineContentScript({
  matches: ["*://*.google.com/*"],
  main() {
    consola.success("Hello from mortal lingo!");
  },
});

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import consola from "consola";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";

const queryClient = new QueryClient();

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
} else {
  consola.error("Could not found the root element");
}

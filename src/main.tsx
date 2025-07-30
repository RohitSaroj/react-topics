import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Context from "./context/provider.ts";
import { ErrorBoundary } from "./containers/ErrorBoundary.js";

const rootElement = document.getElementById("root");
const contextValue = {
  contextValue: "Context Value",
};

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Context.Provider value={contextValue}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Context.Provider>
    </StrictMode>,
  );
} else {
  console.error("Root element not found!");
}

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./wagmi";
import App from "./App.tsx";
import "./index.css";

const qc = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <WagmiProvider config={config}>
          <QueryClientProvider client={qc}>
            <App />
          </QueryClientProvider>
        </WagmiProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { theme } from "./const";
import { BrowserRouter } from "react-router-dom";
import WatchSheetProvider from "./context/WatchSheetProvider";
import WatchProvider from "./context/WatchProvider";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <WatchProvider>
        <WatchSheetProvider>
          <App />
        </WatchSheetProvider>
      </WatchProvider>
    </ChakraProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

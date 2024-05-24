import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

const clientSideID = process.env.REACT_APP_LAUNCHDARKLY_CLIENTSIDE_ID;

const renderApp = async () => {
  const LDProvider = await asyncWithLDProvider({ clientSideID });

  ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <LDProvider>
            <App />
          </LDProvider>
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderApp();

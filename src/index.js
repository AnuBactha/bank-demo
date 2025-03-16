import React from "react"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from "./../src/components/home/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Appplying the theme colours for primary and secondary 

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

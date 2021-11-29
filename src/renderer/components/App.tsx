import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../theme";
import Greetings from "./Greetings";
import { chromium } from "playwright";

async function initiaizeBrowser(): Promise<void> {
  const browser = await chromium.launch({
    // executablePath:
    //   "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    channel: "chrome",
    headless: false,
  });

  const browserContext = await browser.newContext({ viewport: null });

  // ovveride browser
  const enabledEvasions = [
    "chrome.app",
    "chrome.csi",
    "chrome.loadTimes",
    "navigator.webdriver",
    "sourceurl",
    "webgl.vendor",
    "window.outerdimensions",
  ];

  const evasions = enabledEvasions.map((e) =>
    require(`puppeteer-extra-plugin-stealth/evasions/${e}/index.js`)
  );
  const stealth = {
    callbacks: [],
    async evaluateOnNewDocument(...args) {
      this.callbacks.push({ cb: args[0], a: args[1] });
    },
  };
  evasions.forEach((e) => {
    e().onPageCreated(stealth);
  });
  for (const evasion of stealth.callbacks) {
    await browserContext.addInitScript(evasion.cb, evasion.a);
  }

  const page0 = await browserContext.newPage();
  await page0.goto("https://bot.sannysoft.com/");
  const page1 = await browserContext.newPage();
  await page1.goto("https://pixelscan.net/");
  const page2 = await browserContext.newPage();
  await page2.goto("https://abrahamjuliot.github.io/creepjs/");
  const page3 = await browserContext.newPage();
  await page3.goto("https://bot.incolumitas.com/");
}

export default function App(): JSX.Element {
  return (
    // Setup theme and css baseline for the Material-UI app
    // https://mui.com/customization/theming/
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* This is where your app content should go */}
          <Greetings />
          <Button variant="contained"  onClick={initiaizeBrowser}>
            Open playwright Chrome Browser
          </Button>
        </main>
      </Box>
    </ThemeProvider>
  );
}

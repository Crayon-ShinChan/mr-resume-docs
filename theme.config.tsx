import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>M.R. Resume</span>,
  project: {
    link: "https://github.com/Crayon-ShinChan/mr-resume",
  },
  chat: {
    link: "https://discord.gg/A7pBTZjFjF",
  },
  docsRepositoryBase: "https://github.com/Crayon-ShinChan/mr-resume-docs",
  footer: {
    text: "M.R. Resume Documentation",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – M.R. Resume",
    };
  },
  head: (
    <>
      <meta
        property="og:description"
        content="A framework to create new generation resume with power of React and Markdown."
      />
      <link rel="icon" href="./favicon.ico" />
    </>
  ),
};

export default config;

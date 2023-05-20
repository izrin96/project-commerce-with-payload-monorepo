"use client";

import { CssBaseline, GeistProvider as Provider } from "@geist-ui/core";
import { useTheme } from "next-themes";

import React from "react";

function GeistProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  return (
    <Provider themeType={resolvedTheme}>
      {/* <CssBaseline /> */}
      {children}
    </Provider>
  );
}

export default GeistProvider;

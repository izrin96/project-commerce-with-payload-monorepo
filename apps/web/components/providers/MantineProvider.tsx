"use client";

import React from "react";
import {
  type ColorScheme,
  MantineProvider as Provider,
  createEmotionCache,
} from "@mantine/core";
import { useTheme } from "next-themes";
import { Notifications } from "@mantine/notifications";
import { useMounted } from "@/hooks/use-mounted";

const mantineCache = createEmotionCache({
  key: "mantine",
  prepend: false,
});

function MantineProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <Provider
      theme={{
        colorScheme: resolvedTheme as ColorScheme,
        primaryColor: resolvedTheme === "dark" ? "blue" : "dark",
        focusRing: "always",
        fontFamily: "inherit",
      }}
      emotionCache={mantineCache}
    >
      <Notifications />
      {children}
    </Provider>
  );
}

export default MantineProvider;

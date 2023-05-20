"use client";

import React from "react";
import { NextUIProvider as Provider } from "@nextui-org/react";

function NextUIProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}

export default NextUIProvider;

"use client";
import { CacheProvider } from "@emotion/react";
import { useLocale } from "next-intl";
import { getTheme } from "./theme";
import createCache from "@emotion/cache";
// import rtlPlugin from "stylis-plugin-rtl";
import { ThemeProvider } from "@mui/material";

export default function NextIntlProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const cache = createCache({
    key: `mui-${dir}`,
    // stylisPlugins: dir === "rtl" ? [rtlPlugin] : [],
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={getTheme(locale)}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

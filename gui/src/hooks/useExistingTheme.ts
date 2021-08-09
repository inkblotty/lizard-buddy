import { useEffect, useState } from "react"
import { BaseTheme } from "@lb/shared";

const useExistingTheme = (code?: string) => {
  const [theme, setTheme] = useState<Partial<BaseTheme>>({});

  useEffect(() => {
    // request theme
  }, [code]);

  return theme;
}

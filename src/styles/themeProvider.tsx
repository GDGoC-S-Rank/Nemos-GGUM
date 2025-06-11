import type { ReactNode } from "react";
import { fontWrapper } from './global.css'; 
import { themeClass } from "./theme.css";
interface ThemeProviderProps {
  children: ReactNode;
  theme?: string;
  className?: string;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <div className={`${themeClass} ${fontWrapper}`}>{children}</div>;
}
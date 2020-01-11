import React from "react";

export interface AppContextInterface {
  view: string;
  setView: (view: string) => void;
  themeStyle: string;
  setThemeStyle: (themeStyle: string) => void;
}

const context = React.createContext<AppContextInterface | null>(null);
export { context };

import { createContext } from "react";
import { Theme } from "./constants&Enums";

const contextTheme = createContext<[Theme, (newTheme: Theme) => void]>(["light", (a: Theme) => { }]);

export { contextTheme };
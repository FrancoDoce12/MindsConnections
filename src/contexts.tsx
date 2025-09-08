import { createContext } from "react";
import { Theme } from "./constants&Enums";

const contextTheme = createContext<Theme>("light");

export { contextTheme };
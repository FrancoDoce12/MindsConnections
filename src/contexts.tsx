import { createContext } from "react";
import { Mode } from "./constants&Enums";

const contextMode = createContext<Mode>("light");

export { contextMode };
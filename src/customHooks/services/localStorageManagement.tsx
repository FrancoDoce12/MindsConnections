import { Theme, localStorageKeys } from "../../constants&Enums";
const { THEME_KEY } = localStorageKeys;

const getItem = (key: string, showError: boolean = true) => {
    const value = localStorage.getItem(key);

    if (value === null) {
        if (showError) { console.error(`key: \"${key}\" not found on localStorage`); };
        return null;
    };
    return JSON.parse(value);
};

const setItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getTheme = (): Theme | null => {
    return getItem(THEME_KEY, false) as Theme | null;
};

const setTheme = (theme: Theme) => {
    setItem(THEME_KEY, theme);
};

export { getTheme, setTheme };
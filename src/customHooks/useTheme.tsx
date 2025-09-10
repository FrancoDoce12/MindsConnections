import { useCallback, useEffect, useState } from "react";
import { Theme } from "../constants&Enums";
import { getTheme, setTheme as setStorageTheme } from "./services/localStorageManagement";

const useTheme = (): [Theme, (newTheme: Theme) => void] => {
    const [theme, setTheme] = useState<Theme>(getSystemTheme);

    // if the stored theme is different, change it
    // is being suppose that the user diden't change
    // the system prefered theme after the first render
    useEffect(() => {
        const storageTheme = getTheme();
        // null means the theme hasn't been saved in localStorage yet
        if (storageTheme === null) { return; };
        // will set if the value is different
        setTheme(storageTheme);
    }, []);

    // this functions dosen't need dependecies, because it uses
    // the "Functional update" form of the set state, that gives
    // you the last ref to the previus state by it self
    const newSetTheme = useCallback((newTheme: Theme) => {
        setTheme((prev: Theme) => {
            // if its different, save it on the local storage
            if (!(Object.is(prev, newTheme))) { setStorageTheme(newTheme); };
            return newTheme;
        });
    }, []);

    return [theme, newSetTheme];
};


// uses the user's system theme
const getSystemTheme = () => {
    return window.matchMedia("prefers-color-scheme: dark").matches ? 'dark' : 'light' as Theme;
};

export default useTheme;
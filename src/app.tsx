import { contextTheme } from "./contexts";
import useTheme from "./customHooks/useTheme";

const App = () => {

    // triggers a re render if the localStorage theme values is setted or
    // it's different thean the "prefers-color-scheme" of the user system
    const [theme, setTheme] = useTheme();

    return (
        <contextTheme.Provider value={[theme, setTheme]}>
            <h1 className={`${theme}`} >App Runing!!</h1>
        </contextTheme.Provider>
    );
};


export default App;
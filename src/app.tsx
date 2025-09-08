import { useState } from "react";
import { Theme } from "./constants&Enums";
import { contextTheme } from "./contexts";

const App = () => {

    const [theme, setTheme] = useState<Theme>("light");

    return (
        <contextTheme.Provider value={"light"}>
            <h1 className='text-blue-600' >App Runing!!</h1>
        </contextTheme.Provider>
    );
}


export default App;
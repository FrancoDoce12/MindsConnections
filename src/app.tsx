import { useState } from "react";
import { Mode } from "./constants&Enums";
import { contextMode } from "./contexts";

const [mode, setMode] = useState<Mode>("light");

const App = () => {
    return (
        <contextMode.Provider value={mode}>
            <h1>App Runing!!</h1>
        </contextMode.Provider>
    );
}


export default App;
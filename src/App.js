import React, { useState } from "react";
import PropTypes from "prop-types";

function App() {
    const [counter, setCounter] = useState(0);
    const onClick = () => setCounter((prev) => prev + 1);
    return (
        <div>
            <button onClick={onClick}>{counter}</button>
        </div>
    );
}

export default App;
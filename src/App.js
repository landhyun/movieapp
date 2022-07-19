import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Btn({text, changeValue, fontSize}) {
    return (
        <button
            onClick={changeValue}
            style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
                fontSize: {fontSize}
            }}>
            {text}
        </button>
    );
}

const MemorizedBtn = React.memo(Btn);
Btn.propTypes = {
    text: PropTypes.string,
    fontSize: PropTypes.number
}

function App() {
    const [value, setValue] = React.useState("save change");
    const changeValue = () => setValue("Revert change");
    return (
        <div>
            <Btn text={value} changeValue={changeValue} fontSize={20}/>
        </div>
    );
}

export default App;
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Hello() {
    function effectFn() {
        console.log("생성됨. 해당 function의 return 요소를 보여줌");
        return () => console.log("사라짐. 여기서 return을 한번 더 해주어 반대가 되었기 때문에 해당 function의 return 요소가 없음");
    }
    useEffect(effectFn, [])
    return <h1>Hello</h1>;
}

function App() {
    const [show, setShow] = useState(false);
    const onClick = () => {
        setShow((prev) => !prev);
    }
    return (
        <div>
            <button onClick={onClick}>{show ? "hide" : "show"}</button>   
            {show ? <Hello/> : null}
        </div>
    );
}

export default App;
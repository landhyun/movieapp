import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = () => setCounter((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    useEffect(() => {
        console.log("call the API (한 번만 실행되는 함수)")
    }, []);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("keyword가 변화할 때")}
    }, [keyword]);
    useEffect(() => {
      console.log("counter가 변화할 때");
    }, [counter]);

    return (
        <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here"></input>
        <h3>{counter}</h3>
        <button onClick={onClick}>click</button>
      </div>
    );
}

export default App;
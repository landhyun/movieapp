import React from 'react';

function MinutesToHours() {
    const [amount, setAmount] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);

    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const reset = () => setAmount(0);
    const onFlip = () => {
        setFlipped((current) => !current);
        reset();
    };

    return (
    <div>
        <h3>Minutes to Hours</h3>
        <div>
        <label htmlFor="minutes">Minutes</label>
        <input
            value={flipped ? amount * 60 : amount}
            id="minutes"
            placeholder="Minutes"
            type="number"
            onChange={onChange}
            disabled={flipped}
        />
        </div>
        <div>
        <label htmlFor="hours">Hours</label>
        <input
            value={flipped ? amount : Math.round(amount / 60)}
            id=" hours"
            placeholder="Hours"
            type="number"
            onChange={onChange}
            disabled={!flipped}
        />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onFlip}>{flipped ? "Minutes->Hours" : "Hours->Minutes"}</button>
    </div>
    );
}

function CmToM() {
    const [length, setLength] = React.useState(0);
    const [switched, setSwitched] = React.useState(false);

    const onChange = (event) => {
    setLength(event.target.value);
    };
    const reset = () => setLength(0);
    const onSwitch = () => {
    setSwitched((current) => !current);
    reset();
    };

    return (
    <div>
        <h3>CM to M</h3>
        <div>
        <label htmlFor="cm">Cm</label>
        <input
            value={switched ? length * 100 : length}
            id="cm"
            placeholder="cm"
            type="number"
            onChange={onChange}
            disabled={switched}
        />
        </div>
        <div>
        <label htmlFor="m">m</label>
        <input
            value={switched ? length : length / 100}
            id="m"
            placeholder="m"
            type="number"
            onChange={onChange}
            disabled={!switched}
        />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onSwitch}>{switched ? "CM->M" : "M->CM"}</button>
    </div>
    );
}

function UnitConverter() {
    const [index, setIndex] = React.useState("xx");
    const onSelect = (event) => {
    setIndex(event.target.value);
    };

    return (
    <div>
        <h1>단위 변환기</h1>
        <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">cm & m</option>
        </select>
        <hr />
        {index === "xx" ? "메뉴를 선택하세요! 😎" : null}
        {index === "0" ? <MinutesToHours /> : null}
        {index === "1" ? <CmToM /> : null}
    </div>
    );
}

export default UnitConverter;

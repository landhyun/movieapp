import React, {useState, useEffect} from "react";

function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(!loading);
            });
    }, []);
    return (
        <>
        <h1>코인 {loading ? "" : `(${coins.length})`}</h1>
        {loading ? (<strong>Loading...</strong>) : (
            <select>
                { coins.map((coin) => (
                    <option>
                        {coin.name}({coin.symbol}) : ${Math.round(coin.quotes.USD.price)}
                    </option>))
                }
            </select>
        )}
    </>
  );
}

export default Coin;
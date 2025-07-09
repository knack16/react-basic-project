import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {

    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setCurrencyInfo(res[currency]))
        .catch((err) => {
            console.error("Error fetching currency data:", err);
            setCurrencyInfo({});
        });
    },[currency])

    return currencyInfo
}

export default useCurrencyInfo;
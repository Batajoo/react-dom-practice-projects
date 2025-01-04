import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const api = `https://api.currencyapi.com/v3/latest?apikey=GETAPIKEYHERE&currencies=&base_currency=${currency}`;
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(api)
        .then((res)=>res.json())
        .then(res=>setData(res.data));
        console.log(data);
        },[currency])
        console.log(data);
        return data;
}

export default useCurrencyInfo;
import { useEffect, useState} from "react";
import { useLoaderData } from "react-router";

function Github(){

    // const [data, setData] = useState(0);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/batajoo')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //         console.log(data);
    // });
    // },[]);

    const data = useLoaderData();

    return (
        
        <>
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center">Github : {data.followers}
            <img src={data.avatar_url} alt="pic" width="300" className=""/>
        </div>
        </>
    );
}

export default Github

export const githubInfoData = async ()=>{
    const res = await fetch('https://api.github.com/users/batajoo');
    return res.json();
}
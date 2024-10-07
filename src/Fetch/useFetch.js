import { useEffect, useState } from "react";
import useToken from "./useToken";

function useFetch(url_fetch) {
    const token = useToken()
    const [data, setData] = useState({})
    console.log(token);
    
    var authParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + token
        },
      }
    useEffect(()=>{
        async function fetching(url, authParameters) {
            try {
                const response = await fetch(url, authParameters );
                const json = await response.json();
                setData(json)
            } catch (error) {
                return console.error("Error:", error);
            }
        }
        setTimeout(()=>{
            fetching(url_fetch, authParameters)
        },5000)
        
    },[ ])
    return data
}

export default useFetch
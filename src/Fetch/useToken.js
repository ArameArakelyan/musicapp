import { useEffect, useState } from "react";
var client_id = '2a2ef50c8c4e4c3a80911a1775a3ab39';
var client_secret = 'c855c5a7237546d69b3ea36b09256e53';

function useToken() {
    const [token, setToken] = useState("")
    var authParameters = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
      }
    useEffect(()=>{
        async function fetching() {
            try {
                const response = await fetch('https://accounts.spotify.com/api/token',authParameters);
                const json = await response.json();
                setToken(json.access_token)
            } catch (error) {
                return console.error("Error:", error);
            }
        }
        fetching()
    },[])
    return token
}

export default useToken
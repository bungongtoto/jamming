import { clientId, clientSecret } from "./credentials";

const tokenEndpoint = "https://accounts.spotify.com/api/token";

const requestAccessToken = async () => {

    try {
        const response = await  fetch(tokenEndpoint, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
        });

        if (response.ok) {
            const data = await response.json();
            return data.access_token;
        }else {
            throw new Error("Network Error")
        }
    } catch (error) {
        console.log(error)
    }
}

export {requestAccessToken}
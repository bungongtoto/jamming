import { clientId, clientSecret } from "./credentials";

const tokenEndpoint = "https://accounts.spotify.com/api/token";
const endpoint = "https://api.spotify.com/v1/search"

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
        }
    } catch (error) {
        console.log(error)
    }
}

const searchSpotify = async (searchInput, artistInput, albumInput) =>{
    const accessToken = localStorage.getItem("access_token");
    let requestEndpoint = '';
    let q = "?q="+searchInput+"&type=track";
    requestEndpoint = endpoint+q;
    try {
        const response = await fetch(requestEndpoint, {
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const responseJSON = await response.json();
            const tracklist = responseJSON.tracks.items.map((track) => {
                return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }
            }) 
            return tracklist ;
        }

    } catch (error) {
        console.log(error)
    }
}

export {requestAccessToken, searchSpotify}
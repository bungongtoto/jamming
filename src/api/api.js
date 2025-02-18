import { clientId, clientSecret } from "./credentials";
const searchEndpoint = "https://api.spotify.com/v1/search";
const endpoint = 'https://api.spotify.com/v1/';
const redirectUri = 'http://localhost:5173/'; 
let accessToken;

const requestAccessToken = async () => {
    if (accessToken) {
        return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
        return accessToken;
    } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public playlist-modify-private&redirect_uri=${redirectUri}`;
        window.location = accessUrl;
    }
}

const searchSpotify = async (searchInput) => {
    const accessToken = await requestAccessToken();
    let requestEndpoint = '';
    let q = "?q=" + searchInput + "&type=track";
    requestEndpoint = searchEndpoint + q;
    try {
        const response = await fetch(requestEndpoint, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`
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
            return tracklist;
        }

    } catch (error) {
        console.log(error)
    }
}

const getUserId = async () => {
    const accessToken = await requestAccessToken();
    try {
        const response = await fetch("https://api.spotify.com/v1/me", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const responseJSON = await response.json();
            return responseJSON.id;
        }
    } catch (error) {
        console.log(error)
    }
}

const createPlayList = async (name) => {
    const userId = await getUserId();
    const accessToken = await requestAccessToken();
    let requestEndpoint = endpoint + `users/${userId}/playlists`;
    if (!userId) {
        return;
    }
    try {
        const response = await fetch(requestEndpoint, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                name: name,
                public: false,
                description: "created from jamming web app"
            })
        });

        if (response.ok) {
            const responseJSON = await response.json();
            return responseJSON.id;
        }

    } catch (error) {
        console.log(error)
    }
}

const addTracksToPlaylist = async (uris, name) => {
    const playlistId = await createPlayList(name);
    const accessToken = await requestAccessToken();
    console.log("playlist ID: ", playlistId)
    let requestEndpoint = endpoint + `playlists/${playlistId}/tracks`;

    try {
        const response = await fetch(requestEndpoint, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                uris: uris,
                position: 0
            })
        });

        if (response.ok) {
            const responseJSON = await response.json();
            return responseJSON.snapshot_id;
        }
    } catch (error) {
        console.log(error)
    }
}

export { requestAccessToken, searchSpotify, addTracksToPlaylist }
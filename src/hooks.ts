import md5 from 'md5';
import * as cookie from 'cookie';

async function sendApi(url) {
    let sURL = "https://gamejolt.com/api/game/v1" + encodeURI(url) + ((url.indexOf("/?") === -1) ? '?' : '&') + "game_id=721633&format=json";
    
    // generate MD5 signature
    sURL += "&signature=" + md5(sURL + import.meta.env.VITE_GAME_KEY);
    console.log(sURL)
    return await (await fetch(sURL)).json()
}

export async function getSession({ locals }) {
    if (!locals.user) return {}

    return {
        ...locals
    }
}

export async function handle({ event, resolve }) {
    const cookieHeader = event.request.headers.get('cookie')
    const cookies = cookie.parse(cookieHeader ?? '')

    if (!cookies.token) {
      return await resolve(event)
    }

    const user = await sendApi(`/users/?username=${cookies.username}`)

    event.locals.user = user.response.users[0];
    
    return await resolve(event)
}
import * as cookie from 'cookie';

export async function get(event) {
    console.log(event)
    return {
        status: 303,
        headers: {
                'Set-Cookie': [
                    cookie.serialize('token', event.params.token, {
                        // send cookie for every page
                        path: '/',
                        // server side only cookie so you can't use `document.cookie`
                        httpOnly: true,
                        // only requests from same site can send cookies
                        // and serves to protect from CSRF
                        // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
                        sameSite: 'strict',
                        // only sent over HTTPS
                        secure: process.env.NODE_ENV === 'production',
                        // set cookie to expire after a month
                        maxAge: 60 * 60 * 24 * 30,
                    }),
                    cookie.serialize('username', event.params.username, {
                        // send cookie for every page
                        path: '/',
                        // server side only cookie so you can't use `document.cookie`
                        httpOnly: true,
                        // only requests from same site can send cookies
                        // and serves to protect from CSRF
                        // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
                        sameSite: 'strict',
                        // only sent over HTTPS
                        secure: process.env.NODE_ENV === 'production',
                        // set cookie to expire after a month
                        maxAge: 60 * 60 * 24 * 30,
                    })
                ],
                Location: '/'
            },
            body: {
                text: event.params.token
            }
        }
    }
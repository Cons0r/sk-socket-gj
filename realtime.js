/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function realtimeapp(io) {
    io.on('connection', ()=>{
        console.log("Hello user.")
    })
}
import Cookies from "js-cookie"


export function handleCookie(type,token){
    if(type==="login" && token){
        Cookies.set('token',token,{expires:1})
    }
}
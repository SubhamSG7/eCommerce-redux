import Cookies from "js-cookie"


export function handleCookie(type,token){
    if(type==="login" && token){
        Cookies.set('token',JSON.stringify(token),{expires:1})
    }
    if(type==="logout"){
        Cookies.remove('token')
    }
}
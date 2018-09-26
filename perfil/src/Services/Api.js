export function showProfile(){

    const URL_API = "https://randomuser.me/api/";

    return fetch(URL_API).then(resultado => resultado.json());
}
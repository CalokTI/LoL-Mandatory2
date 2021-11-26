const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const name = URLParams.get("name");

//TODO virker ikke endnu, der skal kigges på dette den skriver at summonerId = null
fetch(baseURL + "/api/summoners/" + name)
    .then(response => response.json())
    .then(summoner => console.log(summoner));


document.getElementById("avatar-icon").addEventListener("click", killAvatar);

function killAvatar() {
    document.getElementById("avatar-icon").style.visibility = "hidden";
    document.getElementById("avatar-icon").style.opacity = "0";
    document.getElementById("avatar-icon").style.transition = "visibility 0s 2s, opacity 1s linear";

}

function reviveAvatar() {
    document.getElementById("avatar-icon").style.visibility = "visible";
    document.getElementById("avatar-icon").style.opacity = "1";
    document.getElementById("avatar-icon").style.transition = "opacity 1s linear";
}

setInterval(reviveAvatar, 5000)
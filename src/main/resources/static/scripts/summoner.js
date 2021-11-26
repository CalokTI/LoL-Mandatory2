const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const summonerId = URLParams.get("summonerId");

//TODO virker ikke endnu, der skal kigges på dette den skriver at summonerId = null
fetch("http://localhost:8080/api/summoners/"+summonerId)
.then(response => response.json())
.then(summoner => console.log(summoner));

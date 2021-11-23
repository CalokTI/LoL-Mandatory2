document.getElementById("fetch-player").addEventListener("click", fetchSummoner)
const key = "?api_key=RGAPI-d7474dfd-c5e4-40a7-96db-483c07a92085";

function fetchSummoner() {
    const name = document.getElementById("import-player-name").value;

    fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name + key)
        .then(result => result.json())
        .then(console.log)
}
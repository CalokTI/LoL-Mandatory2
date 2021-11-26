document.getElementById("fetch-player").addEventListener("click", fetchSummoner)
const key = "?api_key=RGAPI-d7474dfd-c5e4-40a7-96db-483c07a92085";

let newSummoner = {};

function fetchSummoner() {
    const summonerName = document.getElementById("import-player-name").value;
    fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + key)
        .then(response => response.json())
        .then(result => {
            newSummoner = result;
            postSummoner();
        })

}

function postSummoner() {
    fetch("http://localhost:8080/api/summoners", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newSummoner)
    }).then(response => response.json());
    console.log("Player added to DB")
}


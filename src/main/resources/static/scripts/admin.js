document.getElementById("fetch-player").addEventListener("click", fetchSummoner);

let newSummoner = {};

function fetchSummoner() {
    const summonerName = document.getElementById("import-player-name").value;
    fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + apiKey)
        .then(response => response.json())
        .then(result => {
            newSummoner = result;
            postSummoner();
        })

}

function postSummoner() {
    fetch(baseURL + "/api/summoners", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newSummoner)
    }).then(response => response.json());
    console.log("Player added to DB");
}

document.getElementById("fetch-champions").addEventListener('click', fetchAllChampions);

function fetchAllChampions(){
    const ddragonData = "https://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion.json";

    fetch(ddragonData)
        .then(result => result.json())
        .then(object => {
            const data = Object.entries(object.data);
            data.map(createChampion);
        })
}

function createChampion(champion){
    const ddragonImageBase = "https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/";
    const championKey = Object.values(champion[1]);

    let championId = championKey[2];
    let championName = championKey[3];
    let championTitle = championKey[4];
    let championImage = ddragonImageBase + championName.replaceAll(" ","").replaceAll(".","").replaceAll("'","") + ".png";
    let championTagOne = championKey[8][0];
    let championTagTwo = championKey[8][1];

    const newChampion = {
        id:championId,
        name:championName,
        title:championTitle,
        image:championImage,
        tagOne:championTagOne,
        tagTwo:championTagTwo
    }

    fetch(baseURL + "/api/champions", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newChampion)
    })
}


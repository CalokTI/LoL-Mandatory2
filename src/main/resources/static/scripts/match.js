const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const matchId = URLParams.get("matchId");


fetch("https://americas.api.riotgames.com/lol/match/v5/matches/" + matchId + "?api_key=" + apiKey)
    .then(response => response.json())
    .then(result => {
        createTeams(result.info);
    })


function createTeams(info) {
    const matchSection = document.getElementById("match-section");
    const blueTeamDiv = document.createElement("div");
    blueTeamDiv.id = "match-team-blue";
    blueTeamDiv.classList.add("teams");
    matchSection.appendChild(blueTeamDiv);
    const redTeamDiv = document.createElement("div");
    redTeamDiv.id = "match-team-red";
    redTeamDiv.classList.add("teams");
    matchSection.appendChild(redTeamDiv);

    if (info.teams[0].win) { //0 = blue
        blueTeamDiv.classList.add("win");
        redTeamDiv.classList.add("defeat");
    } else {
        blueTeamDiv.classList.add("defeat");
        redTeamDiv.classList.add("win");
    }

    for (let i = 0; i < 5; i++) {
        blueTeamDiv.appendChild(playerCard(info.participants[i]));
    }

    for (let i = 5; i < 10; i++) {
        redTeamDiv.appendChild(playerCard(info.participants[i]));
    }

    /*
    baron kills
    dragon kills
    tower kills
    inhib kills
    win/loss -> glow / shadow effect
     */
}

function playerCard(participant) {
    const kills = participant.kills;
    const deaths = participant.deaths;
    const assists = participant.assists;
    const firstBlood = participant.firstBloodKill;
    const firstTower = participant.firstTowerKill;

    const playerDiv = document.createElement("div");
    playerDiv.id = participant.puuid;
    playerDiv.classList.add("card");

    playerDiv.innerHTML = `
        <img src="" alt="picture of ${participant.championName}"><br>
        <strong></strong>
        <hr>
        <p>${kills} / ${deaths} / ${assists}</p>
        <p>${participant.teamPosition}</p>
        `

    if (firstBlood) {
        const firstBloodParagraph = document.createElement('p');
        firstBloodParagraph.innerText = "🩸";
        playerDiv.appendChild(firstBloodParagraph);
    }
    if (firstTower) {
        const firstTowerParagraph = document.createElement('p');
        firstTowerParagraph.innerText = "♟";
        playerDiv.appendChild(firstTowerParagraph);
    }

    fetchChampionImage(participant.championId, participant.puuid);
    fetchSummonerName(participant.puuid)
    return playerDiv;

}

async function fetchChampionImage(championId, puuid) {
    fetch(baseURL + "/api/champions/" + championId)
        .then(response => response.json())
        .then(champion => {
            document.getElementById(puuid).children[0].src = champion.image;
        })
}


async function fetchSummonerName(puuid) {
    fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/" + puuid + "?api_key=" + apiKey)
        .then(response => response.json())
        .then(summoner => {
            document.getElementById(puuid).children[2].textContent = escapeHTML(summoner.name);
        })
}
let freeChampionIdsForNewPlayers;
let freeChampionIdsForAllPlayers;
let allFreeChampionsIds;

fetch(freeChampionsNA + "?api_key=" + apiKey)
    .then(response => response.json())
    .then(result => {
        freeChampionIdsForNewPlayers = result.freeChampionIdsForNewPlayers;
        console.log(freeChampionIdsForNewPlayers)

        freeChampionIdsForAllPlayers = result.freeChampionIds;
        console.log(freeChampionIdsForAllPlayers)

        allFreeChampionsIds = freeChampionIdsForNewPlayers.concat(freeChampionIdsForAllPlayers)
        console.log(allFreeChampionsIds)

        allFreeChampionsIds.map(championId => getChampion(championId))
    });

function getChampion(championId) {
    fetch(baseURL + "api/champions/" + championId)
        .then(respone => respone.json())
        .then(result => createChampionIcon(result))
}


const championsGallery = document.getElementById("free-champions");
function createChampionIcon(champion){

    innerhtml=
        <a><image>champion.image</image></a>
}


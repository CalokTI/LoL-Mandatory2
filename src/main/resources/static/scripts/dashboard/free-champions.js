let freeChampionIdsForNewPlayers;
let freeChampionIdsForAllPlayers;
let allFreeChampionsIds;

fetch(freeChampionsNA + "?api_key=" + apiKey)
    .then(response => response.json())
    .then(result => {
        freeChampionIdsForNewPlayers = result.freeChampionIdsForNewPlayers;

        freeChampionIdsForAllPlayers = result.freeChampionIds;

        allFreeChampionsIds = freeChampionIdsForNewPlayers.concat(freeChampionIdsForAllPlayers)

        allFreeChampionsIds = [...new Set([...freeChampionIdsForNewPlayers,...freeChampionIdsForAllPlayers])]

        allFreeChampionsIds.map(championId => getChampion(championId))
    });

function getChampion(championId) {
    fetch(baseURL + "/api/champions/" + championId)
        .then(respone => respone.json())
        .then(result => createChampionIcon(result))
}


const championsGallery = document.getElementById("free-champions");

function createChampionIcon(champion) {

    const iconElement = document.createElement("a");
    iconElement.href = "champion.html" + "?" + "id=" + champion.id;

    iconElement.innerHTML = `
    <img src="${escapeHTML(champion.image)}">
    `

    championsGallery.appendChild(iconElement);
}


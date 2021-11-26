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

        allFreeChampionsIds = [...new Set([...freeChampionIdsForNewPlayers,...freeChampionIdsForAllPlayers])]

        allFreeChampionsIds.map(championId => getChampion(championId))
    });

function getChampion(championId) {
    console.log("you got id:" + championId)
    fetch(baseURL + "/api/champions/" + championId)
        .then(respone => respone.json())
        .then(result => createChampionIcon(result))
}


const championsGallery = document.getElementById("free-champions");

function createChampionIcon(champion) {
    console.log("you got champion:" + champion.name)

    const iconElement = document.createElement("a");
    iconElement.href = "champion.html" + "?" + "name=" + champion.name;

    iconElement.innerHTML = `
    <img src="${escapeHTML(champion.image)}">
    `

    championsGallery.appendChild(iconElement);
}


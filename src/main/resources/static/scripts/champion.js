const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const championId = URLParams.get("id");

fetch(baseURL + "/api/champions/" + championId)
    .then(response => response.json())
    .then(champion => {
        const championContainer = document.getElementById("champion-container");

        const championName      = escapeHTML(champion.name);
        const championTitle     = escapeHTML(champion.title);
        const championImage     = escapeHTML(champion.image);
        const championStory     = escapeHTML(champion.story);
        const championTagOne    = escapeHTML(champion.tagOne);
        const championTagTwo    = escapeHTML(champion.tagTwo);

        championContainer.innerHTML = `
            <div class="champion-image"><img src="${championImage}" alt="picture of champion ${championName}"></div>
            <strong>${championName}</strong>
            <strong>${championTitle}</strong>
            <span>${championTagOne}  ${championTagTwo}</span>
            <p>${championStory}</p>
            
            
        `
        console.log(champion)
    })

/*
const newChampion = {
    id:championId,
    name:championName,
    title:championTitle,
    image:championImage,
    tagOne:championTagOne,
    tagTwo:championTagTwo
}*/
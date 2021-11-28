const highlightSection = document.getElementById("ranked");
const highlightList = ["Santorin", "Svenskeren", "Jensen", "Bjergsen"];

highlightList.map(highlightSummoner);

function highlightSummoner(name) {

    fetch(baseURL + "/api/summoners/name/" + name)
        .then(response => response.json())
        .then(summoner => {

            const highlightSummonerDiv = document.createElement("div");
            highlightSummonerDiv.classList.add("summoner");
//summoner.html" + "?" + "region=" + region + "&" + "name=" + name
            highlightSummonerDiv.innerHTML = `
        <a class="summoner-link" href="summoner.html?region=na&name=${escapeHTML(summoner.name)}">
        <div class="avatar-icon-div">
            <img id="avatar-icon" class="avatar-icon" src="../static/images/TeemoSquare.webp" alt="character avatar image">
        </div>
        <div class="summoner-info">
            <strong class="summoner-name">${escapeHTML(summoner.name)}</strong>
            <p class="summoner-level">Level: ${escapeHTML(summoner.summonerLevel.toString())}</p>
            <img class="react-img" src="../static/images/3044-pepe-clap.gif" alt="pepe clap">                                  
            <i id="like-counter">${escapeHTML(summoner.friendly.toString())} </i>
            <i id="dislike-counter"> ${escapeHTML(summoner.salty.toString())}</i>
            <img class="react-img" src="../static/images/SaltShake.gif" alt="Dislike Button">
        </div>
        </a>
        `;

            highlightSection.appendChild(highlightSummonerDiv);
        })
}
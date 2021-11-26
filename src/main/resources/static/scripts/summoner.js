const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const name = URLParams.get("name");

const summonerDivWrapper = document.getElementById("div-wrapper");

fetch(baseURL + "/api/summoners/name/" + name)
    .then(response => response.json())
    .then(summoner => {
        console.log(summoner)
        const summonerCard = document.createElement("div")
        summonerCard.className = "player-card";

        summonerCard.innerHTML = `
    <div class="avatar-icon-div">
            <img id="avatar-icon" class="avatar-icon" src="../static/images/TeemoSquare.webp"
                 alt="character avatar image">
                   <h3 id="summoner-name">${escapeHTML(summoner.name)}</h3>
                   <p class="summoner-level">Level: ${escapeHTML(summoner.summonerLevel.toString())}</p>
        </div>
     
         <div class="react-btn-div">
            <button id="like-btn" class="react-btn">
            <img class="react-img" src="../static/images/3044-pepe-clap.gif" alt="Like Button"></button>                                   
            <i id="like-counter">${escapeHTML(summoner.friendly.toString())}</i>
            <i id="dislike-counter">${escapeHTML(summoner.salty.toString())}</i>
            <button id="dislike-btn" class="react-btn">
            <img class="react-img" src="../static/images/SaltShake.gif" alt="Dislike Button"></button>                                                      
        </div>
        `
        summonerDivWrapper.appendChild(summonerCard);
        killShot();
    });


function killShot(){

    document.getElementById("avatar-icon").addEventListener("click", killAvatar);

    function killAvatar() {
        document.getElementById("avatar-icon").style.visibility = "hidden";
        document.getElementById("avatar-icon").style.opacity = "0";
        document.getElementById("avatar-icon").style.transition = "visibility 0s 2s, opacity 1s linear";

    }

    function reviveAvatar() {
        document.getElementById("avatar-icon").style.visibility = "visible";
        document.getElementById("avatar-icon").style.opacity = "1";
        document.getElementById("avatar-icon").style.transition = "opacity 1s linear";
    }

    setInterval(reviveAvatar, 5000)
}




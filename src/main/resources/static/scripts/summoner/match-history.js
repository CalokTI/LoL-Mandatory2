

function getSummonerMatchHistory() {
    count = 5

    fetch(matchHistoryAMERICAS + puuId + "/ids" + "?api_key=" + apiKey + "&" + "count=" + count)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            result.map(createMatchHistoryList)

        });
}

function createMatchHistoryList(match){


    // check for victory/loss
    let isVictorious = isVictory(match)
    console.log("is winner? " + isVictorious)


    // creates the list
    let matchLink = "match.html" + "?" + "matchId=" + match;

    const parent = document.getElementById("matches-list")
    const element = document.createElement("li")

    element.innerHTML=`
    <a id="${match}" href="${matchLink}">match <a/>
    `

    parent.appendChild(element);

}

async function isVictory(matchId){
    fetch("https://americas.api.riotgames.com/lol/match/v5/matches/" + matchId + "?api_key=" + apiKey)
        .then(response => response.json())
        .then(result => {
            let indexOfSummoner = result.metadata.participants.indexOf(puuId)
            result = result.info.participants[indexOfSummoner].win
            let state;
            if (result === true){
                state = matchId + ": Winner! ⭐"
            } else {
                state = matchId + ": Loser! 💩"
            }

            document.getElementById(matchId).innerText = state;

        })
}
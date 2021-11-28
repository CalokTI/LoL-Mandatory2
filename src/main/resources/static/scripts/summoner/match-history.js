

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

    let matchLink = "match.html" + "?" + "matchId=" + match;

    const parent = document.getElementById("matches-list")
    const element = document.createElement("li")

    element.innerHTML=`
    <a href="${matchLink}">match<a/>
    `

    parent.appendChild(element);

}

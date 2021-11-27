fetch(baseURL + "/api/champions")
    .then(response => response.json())
    .then(results => {
        results.map(champion);
    })

const championListSection = document.getElementById("champions-list");

function champion(champion){
    const championCard = document.createElement("div");

    const championName = escapeHTML(champion.name);
    championCard.id = championName;
    const tagOne = escapeHTML(champion.tagOne);

    championCard.classList.add("champion", tagOne);

    let tagTwo = escapeHTML(champion.tagTwo);
    if (tagTwo){
        championCard.classList.add(tagTwo);
    }

    championCard.innerHTML = `
    <a href="./champion.html?id=${escapeHTML(champion.id.toString())}">
    <div class="champion-image"><img src="${escapeHTML(champion.image)}" alt="picture of champion ${championName}"></div>
    <span>${championName}</span>
    <hr>
    <p>${tagOne} ${tagTwo}</p>
    </a>
    `

    championListSection.appendChild(championCard);
}

const input = document.getElementById("champions-search");
input.addEventListener('keyup', function (){
    console.log(this.value);
    const nodeList = document.querySelectorAll('.champion');

    for (let i = 0; i < nodeList.length; i++) {
        let a = nodeList[i].id;
        if (a.toUpperCase().indexOf(this.value.toUpperCase()) > -1) {
            nodeList[i].style.display = "";
        } else {
            nodeList[i].style.display = "none";
        }
    }
})
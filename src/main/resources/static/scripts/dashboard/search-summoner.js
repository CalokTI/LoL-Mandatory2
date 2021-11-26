// name, region and link
let region;
let name;

// updates region
document.getElementById("region").addEventListener("change", updateRegion)

function updateRegion() {
    region = document.getElementById("region").value
    console.log(region)
    document.getElementById("search-link").href = "summoner.html" + "?" + "region=" + region + "&" + "name=" + name

}

// updates name and can be used with the "Enter Key" instead of just clicking on a button.
document.getElementById("search-input").addEventListener("keyup", updateName)
document.getElementById("search-input").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        window.location.href = document.getElementById("search-link").href;
    }
});

function updateName() {
    name = document.getElementById("search-input").value
    console.log(name)
    document.getElementById("search-link").href = "summoner.html" + "?" + "region=" + region + "&" + "name=" + name
}
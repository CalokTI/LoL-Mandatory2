// name, region and link
let region;
let name;

// updates name
document.getElementById("search-input").addEventListener("keyup", updateName)
function updateName() {
    name = document.getElementById("search-input").value
    console.log(name)
    document.getElementById("search-link").href = region + "/" + name
}

// updates region
document.getElementById("region").addEventListener("change", updateRegion)
function updateRegion() {
    region = document.getElementById("region").value
    console.log(region)
    document.getElementById("search-link").href = region + "/" + name


}

// search button functionality
document.getElementById("search-button").addEventListener("click", searchForSummoner)
function searchForSummoner() {

    console.log(region + " " + name)

}
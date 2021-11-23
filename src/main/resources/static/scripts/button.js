let likeCounter = 0;
let dislikeCounter = 0;

const clickLikeButton = document.getElementById("like-btn");
const clickDislikeButton = document.getElementById("dislike-btn");


clickLikeButton.addEventListener("click", likeButtonClicked);
clickDislikeButton.addEventListener("click", dislikeButtonClicked);


function likeButtonClicked() {
    likeCounter++;
    document.getElementById("like-counter").innerText = likeCounter;
}

function dislikeButtonClicked() {
    dislikeCounter++;
    document.getElementById("dislike-counter").innerText = dislikeCounter;
}
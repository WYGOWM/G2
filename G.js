var numClicks = 0;
var homePages = ["index.html", "index2.html", "index3.html"]
var noPages = ["no.html", "no2.html"]
var valentinesPages = ["valentines1.html", "valentines2.html", "valentines3.html", "valentines4.html", "valentines5.html"]
var seenValentines = []

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function yesPage() {
    window.location.href = "yes.html";
}

function valentinesPage() {
    // Retrieve seenValentines from localStorage or initialize it as an empty array
    var seenValentines = JSON.parse(localStorage.getItem("seenValentines")) || [];

    var seenAllPages = valentinesPages.length === seenValentines.length;
    if (seenAllPages) {
        localStorage.removeItem("seenValentines"); // Reset for next time
        window.location.href = "valentines6.html";
        return;
    }

    var pageIndex = getRandomInt(valentinesPages.length);
    
    // Ensure uniqueness
    while (seenValentines.includes(pageIndex)) {
        pageIndex = getRandomInt(valentinesPages.length);
    }

    // Store the new page index
    seenValentines.push(pageIndex);
    localStorage.setItem("seenValentines", JSON.stringify(seenValentines));

    // Redirect to the selected page
    window.location.href = valentinesPages[pageIndex];
}

function goToLastValentinesPage() {
    window.location.href = "finalValentines.html"
}


function noPage() {
    if (numClicks >= 3) {
        window.location.href = noPages[getRandomInt(2)];
    } else {
        numClicks += 1;
        moveButton();
    }
}

function homePage() {
    window.location.href = "index.html";
}

function moveButton() {
    var noButton = document.getElementById('noButton');
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight) - 48;

    noButton.style.transition = "top 3s, left 3s"; // Add smooth movement
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

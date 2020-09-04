// Start
function start() {
    document.getElementById("stop").style.display = "block";
    document.getElementById("start").style.display = "none";
}

// Stop
function stop() {
    document.getElementById("start").style.display = "block";
    document.getElementById("stop").style.display = "none";
}

// Reset
function reset() {
    document.getElementById("hrs").innerHTML= "00";
    document.getElementById("mins").innerHTML= "00";
    document.getElementById("secs").innerHTML= "00";
}

const chk1 = document.getElementById('chk1')
const chk2 = document.getElementById('chk2')
const lightBody = document.getElementById('light-body')
const conteinedCheck = document.getElementById('contained-light-check')
const ldWidget = document.getElementById('ldWidget')
function lightCheck() {
    if (chk1.checked === true) {
        chk2.checked = true
        lightBody.style.backgroundColor = "black"
        lightBody.style.color = "white"

        conteinedCheck.style.backgroundColor = "black"
        conteinedCheck.style.color = "white"

    } else {
        chk2.checked = false
        lightBody.style.backgroundColor = "white"
        lightBody.style.color = "black"

        conteinedCheck.style.backgroundColor = "white"
        conteinedCheck.style.color = "black"
    }
}

function light2Check() {
    if (chk2.checked === true) {
        conteinedCheck.style.backgroundColor = "black"
        conteinedCheck.style.color = "white"
    } else {
        conteinedCheck.style.backgroundColor = "white"
        conteinedCheck.style.color = "black"
    }
}


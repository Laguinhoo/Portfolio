let header = document.getElementById("header")

window.addEventListener('scroll', onscroll)

function onscroll() {
    console.log(window.scrollY)

    if (window.scrollY <= 900) {
        header.style.backgroundColor = "#E1EBE2"
        header.style.color = "#222423"
    }

    if (window.scrollY >= 853) {
        header.style.backgroundColor = "#8C80C2"
        header.style.color = "#222423"
    }

    if (window.scrollY >= 1761) {
        header.style.backgroundColor = "#605AA0"
        header.style.color = "#222423"
    }
    
    if (window.scrollY > 2600) {
        header.style.backgroundColor = "#222423"
        header.style.color = "#E1EBE2"
    }
}
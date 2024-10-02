let header = document.getElementById("header")

window.addEventListener('scroll', onscroll)

function onscroll() {
    console.log(window.scrollY)
    if (window.scrollY >= 908) {
        header.style.backgroundColor = "#8C80C2"
    }
}
document.addEventListener('DOMContentLoaded', () => {
    function addone() {

        var compt = document.getElementById("compteur").textContent
        document.getElementById("compteur").textContent = ++compt
    }

    var bouton = document.querySelector('#button')
    bouton.addEventListener("click", () => {
        addone()
    })
}
)

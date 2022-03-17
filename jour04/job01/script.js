window.addEventListener("DOMContentLoaded",(event) => {
    let p = document.querySelector('p')
    let btn = document.querySelector('button')
    btn.addEventListener('click',function (){

        fetch('expression.txt')
        .then((response) => response.text())
        .then((response) => { 
            p.innerHTML = response
            console.log(response)
        })
        .catch((error) => console.log(error))
    })   
})









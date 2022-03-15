// document.addEventListener('DOMContentLoaded',(event)=> {
//     let citation = document.getElementById('citation').textContent
//     let button = document.getElementById("button")
//     button.addEventListener('click',()=>{
//         if(getComputedStyle(citation).display != "none"){
//             citation.style.display = "none"
//             } else {
//             citation.style.display = "block"
//             }
//         })
        
//         function showhide(){
//             if(getComputedStyle(citation).display != "none"){
//             citation.style.display = "none"
//             } else {
//             citation.style.display = "block"
//             }
//         }
//             showhide.onclick = showhide
            
//             }) 


            document.addEventListener('DOMContentLoaded', () => {
                function showhide() {
                    let citation=document.querySelector('citation')
                    if (citation ==null){
                        let x = document.createElement("citation")
                        let y = document.querySelector('body')
                        let z = y.z
                        y.insertBefore(x, z)
                        document.querySelector('citation').innerHTML = "L'important n'est pas la chute, mais l'atterrissage"
                    }
                    else {
                        citation.remove()
                    }
                }
            
                    let bouton = document.querySelector('#button')
                    bouton.addEventListener("click", () => {
                        showhide()
                    })
                }
            )

    
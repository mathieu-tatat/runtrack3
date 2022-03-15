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
                    var citation=document.querySelector('citation')
                    if (citation ==null){
                        var x = document.createElement("citation")
                        var y = document.querySelector('body')
                        var z = y.z
                        y.insertBefore(x, z)
                        document.querySelector('citation').innerHTML = "L'important n'est pas la chute, mais l'atterrissage"
                    }
                    else {
                        citation.remove()
                    }
                }
            
                    var bouton = document.querySelector('#button')
                    bouton.addEventListener("click", () => {
                        showhide()
                    })
                }
            )

    

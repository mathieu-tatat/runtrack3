
window.addEventListener('DOMContentLoaded',(event)=>{
            let nom = document.getElementById('nom')
            let prenom= document.getElementById('prenom')
            let email= document.getElementById('email')
            let password= document.getElementById('password')
            let password2= document.getElementById('password2')
            let error = 0
            let p = document.querySelectorAll('p')

            let regexLowerCase = /[a-z]{1,}/
            let regexUpperCase = /[A-Z]{1,}/
            let regexNumber = /[0-9]{1,}/
            let regexmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

            nom.addEventListener('keyup',function(){
                
                if(this.value.length < 3){
                    p[0].style.color='red'
                    p[0].innerHTML = "nom invalide"
                }else{
                    p[0].innerHTML=""
                }
               
                if(regexLowerCase.test(this.value)== false){
                    
                }else if(this.value.length >= 3){
                    p[0].style.color='green'
                    p[0].innerHTML= "nom valide"
                   
                    
                }
        })

            prenom.addEventListener('keyup',function(){
                
                if(this.value.length < 3){
                    p[1].style.color='red'
                    p[1].innerHTML = "prénom trop court"
                }else{
                    p[1].innerHTML=""
                }
               
                if(regexLowerCase.test(this.value)== false){
                    
                }else if(this.value.length >= 3){
                    p[1].style.color='green'
                    p[1].innerHTML= "prenom valide"
                   
                    
                }
            })
            email.addEventListener('keyup',function(){
                
                if(regexmail.test(this.value)== false){
                    p[2].style.color='red'
                    p[2].innerHTML = "email invalide"
                }else{
                    p[2].innerHTML=""
                }
               
                if(regexmail.test(this.value)== true){
                       p[2].style.color='green'
                    p[2].innerHTML= "email valide"
                }
            })
            password.addEventListener('keyup',function(){
                if(this.value.length < 3 || regexNumber.test(this.value)== false || regexUpperCase.test(this.value)== false || regexLowerCase.test(this.value)== false){
                    p[2].style.color='red'
                    p[2].innerHTML = "veuillez entrer au moins 1 majusculke 1 minuscule et un nombre"
                }
                
                else{
                    p[2].innerHTML=""
                }
               
                if(regexLowerCase.test(this.value)== true && regexNumber.test(this.value)== true && regexUpperCase.test(this.value)==true && this.value.length >= 3){
                    p[2].style.color='green'
                    p[2].innerHTML= "password valide"

            }
            
            })

            password2.addEventListener('keyup',function(){
                
                if(this.value !== password.value){
                    p[4].style.color='red'
                    p[4].innerHTML = "confirmation invalide"
                }
                else{
                    p[4].innerHTML=""
                }

                if(this.value === password.value){
                    p[4].style.color='green'
                    p[4].innerHTML= "confirmation ok "
                }
                
            })
    
})
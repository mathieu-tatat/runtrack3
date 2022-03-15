document.addEventListener('DOMContentLoaded', () => {
     var textearea = document.getElementById('keylogger')
     var word = ""
     document.addEventListener('keypress',(event)=> {
     word += event.key
     textearea.textContent = word

    })
})



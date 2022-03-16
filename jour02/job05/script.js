document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', (event) => {

        var footer = document.querySelector('footer')
        var scroll = Math.round (100 * window.scrollY / 4096)

        footer.setAttribute('style','--couleur:#FF'+scroll+scroll)
    })
})
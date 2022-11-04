var checkbox = document.querySelector('#options-hoverpause-checkbox')

var config = {
    type: 'carousel',
    perView: 1,
    peek: {
        before: 300, after: 300
        },
    autoplay: 3000,
    hoverpause: true
}

if (window.matchMedia("(max-width: 800px)").matches) {
    config = {
        type: 'carousel',
        perView: 1,
        peek: {
            before: 0, after: 0
            },
        autoplay: 3000,
        hoverpause: true
    }
}

new Glide('.glide', config).mount()
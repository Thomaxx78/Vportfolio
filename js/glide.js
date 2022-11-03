var checkbox = document.querySelector('#options-hoverpause-checkbox')

const config = {
    type: 'carousel',
    perView: 1,
    peek: {
        before: 300, after: 300
        },
    autoplay: 3000,
    hoverpause: true
}

new Glide('.glide', config).mount()
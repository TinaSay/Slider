const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const screensCounter = document.querySelectorAll('.sidebar>div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(screensCounter - 1) * 100}vh`

const slide = (direction) => {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === screensCounter) {
            activeSlideIndex = 0
        }
        sidebar.style.transform = `translateY(${activeSlideIndex * 100}vh)`
        mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`

    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = screensCounter - 1
        }
        sidebar.style.transform = `translateY(${activeSlideIndex * 100}vh)`
        mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`
    }
}

upBtn.addEventListener('click', () => {
    slide('up')
})

downBtn.addEventListener('click', () => {
    slide('down')
})
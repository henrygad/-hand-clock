const hour_hand = document.querySelector('.hour')
const minute_hand = document.querySelector('.minute')
const second_hand = document.querySelector('.second')

setInterval(clock, 1000)
function clock() {
    const time = new Date()
    let seconds = time.getSeconds() / 60
    let minutes = (seconds + time.getMinutes()) / 60
    let hours = (minutes + time.getHours()) /12

    rotate(second_hand, seconds)  
    rotate(minute_hand, minutes)
    rotate(hour_hand, hours)
}

function rotate(element, rotateRatio) {
    element.style.setProperty('--rotation', rotateRatio * 360)

}
clock()
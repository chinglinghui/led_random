/**
 * 我打算用不同的寫法
 */
input.onButtonPressed(Button.A, function () {
    if (燈數 < 24) {
        燈數 += 1
        if (狀態 == 0) {
            basic.clearScreen()
            basic.showString("" + (燈數))
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    狀態 = 1
    basic.clearScreen()
    led_random = []
    for (let index = 0; index <= 24; index++) {
        led_random.push(index)
    }
    for (let index2 = 0; index2 < 燈數; index2++) {
        亮起(randint(0, led_random.length))
    }
    basic.pause(1000)
    狀態 = 0
})
function 亮起 (索引值: number) {
    index = led_random[索引值]
    led_random.removeAt(索引值)
    X = index / 5
    Y = (index + 1) % 5
    led.plot(X, Y)
}
input.onButtonPressed(Button.B, function () {
    if (燈數 > 1) {
        燈數 += -1
        if (狀態 == 0) {
            basic.clearScreen()
            basic.showString("" + (燈數))
        }
    }
})
let Y = 0
let X = 0
let index = 0
let led_random: number[] = []
let 燈數 = 0
let 狀態 = 0
狀態 = 0
basic.forever(function () {
	
})

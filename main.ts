/**
 * 我打算用不同的寫法
 */
// 我讓
input.onButtonPressed(Button.A, function () {
    if (燈數 < 24) {
        燈數 += 1
        basic.showString("" + (燈數))
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    led_random = []
    // 先添加0~24進表單
    for (let index = 0; index <= 24; index++) {
        led_random.push(index)
    }
    // 然後隨機取一項
    // 這個"隨機取的項"，以   "目標項"  代稱
    for (let index2 = 0; index2 < 燈數; index2++) {
        亮起(randint(0, led_random.length - 1))
    }
    basic.pause(200)
})
function 亮起 (索引值: number) {
    // 得到目標項的值
    index = led_random[索引值]
    // 把目標項移除
    led_random.removeAt(索引值)
    // 得到X Y的值
    X = Math.floor(index / 5)
    Y = index % 5
    led.plot(X, Y)
}
input.onButtonPressed(Button.B, function () {
    if (燈數 > 1) {
        燈數 += -1
        basic.showString("" + (燈數))
        basic.clearScreen()
    }
})
let Y = 0
let X = 0
let index = 0
let led_random: number[] = []
let 燈數 = 0
let 狀態 = 0
燈數 = 1

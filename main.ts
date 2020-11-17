basic.forever(function () {
    for (let i = 0; i <= 3; i++) {
        if (i != 0) {
            led.plot(2 + i, 2)
            led.plot(2 - i, 2)
            led.plot(2, 2 + i)
            led.plot(2, 2 - i)
            basic.pause(200)
        } else {
            led.plot(2, 2)
            basic.pause(200)
        }
    }
    basic.clearScreen()
})
basic.forever(function () {
    led.plot(2, 2)
    basic.pause(200)
    for (let i = 0; i <= 2; i++) {
        led.plot(3 + i, 2)
        led.plot(1 - i, 2)
        led.plot(2, 3 + i)
        led.plot(2, 1 - i)
        basic.pause(200)
    }
    basic.clearScreen()
})

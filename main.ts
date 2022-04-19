basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
    } else {
        if (input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
        }
    }
})

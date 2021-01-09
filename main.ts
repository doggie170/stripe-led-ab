input.onButtonPressed(Button.A, function () {
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
	
})

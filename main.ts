input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < music.tempo(); index++) {
        basic.showArrow(ArrowNames.West)
        basic.pause(1000)
        basic.showArrow(ArrowNames.East)
        basic.pause(1000)
        basic.showArrow(ArrowNames.North)
        basic.pause(1000)
        basic.showArrow(ArrowNames.South)
        basic.pause(1000)
    }
})

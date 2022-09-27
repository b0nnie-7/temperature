let current_temperature = 0
// Create by: Bonnie Zhu
// Create on: Sep 27th
// This program is Current_Temperature
basic.forever(function () {
    current_temperature = input.temperature()
    basic.showNumber(current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})

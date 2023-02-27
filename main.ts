input.onButtonPressed(Button.A, function () {
    basic.showString("You've Fed Spot")
    health += 10
    score += 1
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("You've Given Medicine to Spot")
    health += 15
    score += 1
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Spot has gone to bed")
    health += 20
    score += 2
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("You've played with Spot")
    health += 5
    score += 1
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("You've scolded Spot")
    health += 0 - 10
    basic.showIcon(IconNames.No)
})
let score = 0
let health = 50
basic.showString("Hello! Im Spot your virtual dog!")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showNumber(health)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    if (health > 0) {
        if (health > 0) {
            if (input.buttonIsPressed(Button.A)) {
            	
            } else if (input.buttonIsPressed(Button.B)) {
            	
            } else if (input.buttonIsPressed(Button.AB)) {
            	
            } else if (input.isGesture(Gesture.Shake)) {
            	
            } else if (input.isGesture(Gesture.TiltLeft)) {
            	
            } else {
                health += 0 - 1
            }
        } else {
            if (input.buttonIsPressed(Button.AB)) {
                basic.showString("Spot has gone to bed")
                health += 20
                score += 2
                basic.showIcon(IconNames.Asleep)
            } else if (input.isGesture(Gesture.TiltLeft)) {
                basic.showString("You've Given Medicine to Spot")
                health += 15
                score += 1
                basic.showIcon(IconNames.Heart)
            } else {
                health += 0 - 1
            }
        }
    } else {
        basic.showIcon(IconNames.Skull)
        basic.showString("Spot has died! It needed more attention!")
        basic.pause(5000)
        health = 50
        score = 0
    }
})

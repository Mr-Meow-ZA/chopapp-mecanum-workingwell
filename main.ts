function carArcBL () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    speedFwd,
    robotbit.Motors.M1B,
    SpeedBwd
    )
}
function carArcFR () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    speedFwd,
    robotbit.Motors.M1A,
    SpeedBwd
    )
}
function carForward () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speedFwd,
    robotbit.Motors.M1B,
    speedFwd
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    speedFwd,
    robotbit.Motors.M2A,
    speedFwd
    )
}
function carFrontRight () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    speedFwd,
    robotbit.Motors.M1B,
    speedFwd
    )
}
function carClockwise () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    SpeedBwd,
    robotbit.Motors.M1B,
    SpeedBwd
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    speedFwd,
    robotbit.Motors.M2B,
    speedFwd
    )
}
function sliderSpeedSX () {
    speedFwd = valX
    SpeedBwd = -1 * valX
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
function carArcBR () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    SpeedBwd,
    robotbit.Motors.M1B,
    speedFwd
    )
}
function serialValFwdBwd () {
    serial.writeString("valX is ")
    serial.writeLine("" + (valX))
    serial.writeString("speedFWD is ")
    serial.writeLine("" + (speedFwd))
    serial.writeString("speedBWD is ")
    serial.writeString("" + (SpeedBwd))
    basic.pause(2000)
}
function _8butMode0 () {
    if (rx1 == "F") {
        carForward()
    } else if (rx1 == "FR") {
        carFrontRight()
    } else if (rx1 == "R") {
        carRight()
    } else if (rx1 == "BR") {
        carBackRight()
    } else if (rx1 == "B") {
        carBackward()
    } else if (rx1 == "BL") {
        carBackLeft()
    } else if (rx1 == "L") {
        carLeft()
    } else if (rx1 == "FL") {
        carFrontLeft()
    }
}
function carRight () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    SpeedBwd,
    robotbit.Motors.M1B,
    speedFwd
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    speedFwd,
    robotbit.Motors.M2A,
    SpeedBwd
    )
}
function carBackRight () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    SpeedBwd,
    robotbit.Motors.M1A,
    SpeedBwd
    )
}
function serialRxTx () {
    serial.writeString("rx1 is ")
    serial.writeLine(rx1)
    serial.writeString("rx2 is ")
    serial.writeLine(rx2)
    temp = 0
}
function carBackward () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    SpeedBwd,
    robotbit.Motors.M1B,
    SpeedBwd
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    SpeedBwd,
    robotbit.Motors.M2A,
    SpeedBwd
    )
}
function carFrontLeft () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    speedFwd,
    robotbit.Motors.M1A,
    speedFwd
    )
}
function carArcFL () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    SpeedBwd,
    robotbit.Motors.M1A,
    speedFwd
    )
}
function carLeft () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speedFwd,
    robotbit.Motors.M1B,
    SpeedBwd
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    SpeedBwd,
    robotbit.Motors.M2A,
    speedFwd
    )
}
function carCounterClockWise () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speedFwd,
    robotbit.Motors.M1B,
    speedFwd
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    SpeedBwd,
    robotbit.Motors.M2B,
    SpeedBwd
    )
}
function carBackLeft () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    SpeedBwd,
    robotbit.Motors.M1B,
    SpeedBwd
    )
}
function _8buttonMove () {
    if (toggleOne == 0) {
        _8butMode0()
    } else if (toggleOne == 1) {
        _8butMode1()
    }
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Comma), function () {
    rx1 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    rx2 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Comma))
    temp = 1
    if (rx2 == "D") {
        buttonDown = 1
    } else if (rx2 == "U") {
        buttonDown = 0
    } else if (rx1 == "T1") {
        if (rx2 == "1") {
            toggleOne = 1
            basic.showNumber(1)
        } else if (rx2 == "0") {
            toggleOne = 0
            basic.showNumber(0)
        }
    } else if (rx1 == "SX") {
        valX = Math.abs(Math.round(parseFloat(rx2.substr(0, 4))))
    } else {
    	
    }
})
function _8butMode1 () {
    if (rx1 == "F") {
        carForward()
    } else if (rx1 == "FR") {
        carArcFR()
    } else if (rx1 == "R") {
        carClockwise()
    } else if (rx1 == "BR") {
        carArcBR()
    } else if (rx1 == "B") {
        carBackward()
    } else if (rx1 == "BL") {
        carArcBL()
    } else if (rx1 == "L") {
        carCounterClockWise()
    } else if (rx1 == "FL") {
        carArcFL()
    }
}
let rx2 = ""
let rx1 = ""
let toggleOne = 0
let valX = 0
let SpeedBwd = 0
let speedFwd = 0
let buttonDown = 0
let temp = 0
bluetooth.startUartService()
basic.showIcon(IconNames.House)
temp = 0
buttonDown = 0
speedFwd = 150
SpeedBwd = -150
valX = 100
toggleOne = 0
basic.forever(function () {
    if (temp == 1) {
        if (buttonDown == 1) {
            _8buttonMove()
        } else if (buttonDown == 0) {
            robotbit.MotorStopAll()
        }
    }
    sliderSpeedSX()
})

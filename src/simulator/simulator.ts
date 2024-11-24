import * as TS from "typescript"

type ElevatorControllerClass = new () => ElevatorController

class TestFloor implements Floor {
	private floorNumber: number
	private upButtonPressed = false
	private downButtonPressed = false
	private buttonPressedCallback: (direction: ElevatorDirection) => void = () => { }

	constructor(floorNumber: number) {
		this.floorNumber = floorNumber
	}

	floorNum() {
		return this.floorNumber
	}

	onButtonPressed(callback: (direction: ElevatorDirection) => void) {
		this.buttonPressedCallback = callback
	}

	pressButton(direction: ElevatorDirection) {
		if (direction == ElevatorDirection.UP) this.upButtonPressed = true
		if (direction == ElevatorDirection.DOWN) this.downButtonPressed = true
		this.buttonPressedCallback(direction)
	}

	elevatorArrival(directions: ElevatorDirection[]) {
		directions.forEach((direction) => {
			if (direction == ElevatorDirection.UP) this.upButtonPressed = false
			if (direction == ElevatorDirection.DOWN) this.downButtonPressed = false
		})
	}

	getButtonsPressed() {
		const buttonsPressed = []
		if (this.upButtonPressed) buttonsPressed.push(ElevatorDirection.UP)
		if (this.downButtonPressed) buttonsPressed.push(ElevatorDirection.DOWN)
		return buttonsPressed
	}
}

export const parseSolution = (solution: string) => {
	const transpiledSolution = TS.transpileModule(solution, {
		compilerOptions: {
			target: TS.ScriptTarget.ES2015,
			noImplicitUseStrict: false,
			removeComments: true,
		},
	})

	return eval?.(`"use strict";(${transpiledSolution.outputText})`) as ElevatorControllerClass
}

export const executeSolution = (ElevatorController: ElevatorControllerClass) => {
	const ec = new ElevatorController()

	const floors: TestFloor[] = [new TestFloor(0)]
	const elevators: Elevator[] = []

	ec.init(elevators, floors)
	ec.update(0, elevators, floors)
} 
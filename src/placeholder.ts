// In order for it to be executed correctly, you must write all of your code inside this class.
class ElevatorSaga implements ElevatorController {
	/**
	 * Init is run right before the challenge starts. You can use init to set up event listeners and logic.
	 * @param elevators Each of the elevators in the challenge
	 * @param floors Each of floors in the challenge
	 */
	init(elevators: Elevator[], floors: Floor[]): void {
		let elevator = elevators[0]; // Let's use the first elevator

		// Whenever the elevator is idle (has no more queued destinations)...
		elevator.onIdle(() => {
			// let's go to all the floors (or did we forget one?)
			elevator.goToFloor(0);
			elevator.goToFloor(1);
		});
	}

	/**
	 * Update is run repatedly during the challenge.
	 * @param dt The number of seconds (based on in-game time) that have elapsed since the last call to update. 
	 * @param elevators Each of the elevators in the challenge
	 * @param floors Each of floors in the challenge
	 */
	update(dt: number, elevators: Elevator[], floors: Floor[]): void {
		// we often don't need to do anything here.
	}
}

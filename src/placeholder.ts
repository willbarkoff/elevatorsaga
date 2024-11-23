class ElevatorSaga extends ElevatorController {
    /**
     * Init is run right before the challenge starts. You can use init to set up event listeners and logic.
     * @param elevators Each of the elevators in the challenge
     * @param floors Each of floors in the challenge
     */
    init(elevators: Elevator[], floors: Floor[]): void {
        throw new Error("Init method is not implemented");
    }

    /**
     * Update is run repatedly during the challenge.
     * @param dt The number of seconds (based on in-game time) that have elapsed since the last call to update. 
     * @param elevators Each of the elevators in the challenge
     * @param floors Each of floors in the challenge
     */
    update(dt: number, elevators: Elevator[], floors: Floor[]): void {
        throw new Error("Update method is not implemented");
    }
}

declare enum ElevatorDirection {
    UP, DOWN
}

declare abstract class Elevator {
    /**
     * The current destination queue, meaning the floor numbers the elevator
     * is scheduled to go to. Can be modified and emptied if desired. Note that
     * you need to call checkDestinationQueue() for the change to take effect immediately.
     * 
     * @see checkDestinationQueue
     */
    destinationQueue: number[] = []

    /**
     * Checks the destination queue for any new destinations to go to. Note that you only need
     * to call this if you modify the destination queue explicitly.	
     * 
     * @see destinationQueue
     */
    abstract checkDestinationQueue(): void

    /**
     * Gets the currently pressed floor numbers as an array.
     */
    abstract getPressedFloors(): number[]
    /**
     * Sets callback called when the elevator has completed all its tasks and is not doing anything.	
     * @param callback 
     */
    abstract onIdle(callback: () => void): void

    /**
     * Sets callback called when a passenger has pressed a button inside the elevator.
     * @param callback 
     */
    abstract onFloorButtonPressed(callback: (floor: number) => void): void

    /**
     * Sets callback called slightly before the elevator will pass a floor. A good time to decide whether
     * to stop at that floor. Note that this event is not triggered for the destination floor.
     * @param callback 
     */
    abstract onPassingFloor(callback: (floor: number, direction: ElevatorDirection) => void): void

    /**
     * Sets callback called when the elevator has arrived at a floor.
     * @param callback 
     */
    abstract onStoppedAtFloor(callback: (floor: number) => void): void
}

declare abstract class Floor {
    /**
     * Gets the floor number of the floor object.	
     */
    abstract floorNum(): number;

    /**
     * Triggered when someone has pressed the button at a floor. Note that passengers will press the button
     * again if they fail to enter an elevator.
     * @param direction the direction of their destination 
     * @param callback 
     */
    abstract onButtonPressed(direction: ElevatorDirection, callback: () => void): void;
}

declare abstract class ElevatorController {
    /**
     * Runs 
     * @param elevators 
     * @param floors 
     */
    abstract init(elevators: Elevator[], floors: Floor[]): void
    abstract update(dt: number, elevators: Elevator[], floors: Floor[]): void
}
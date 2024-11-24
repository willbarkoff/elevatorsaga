/**
 * An ElevatorDirection represents a direction that an elevator can go. Either up or down.
 */
declare enum ElevatorDirection {
    UP, DOWN
}

/**
 * An Elevator represents a single elevator at an elevator bank. Note that your elevator system
 * may be composed of multiple elevators.
 */
declare interface Elevator {
    /**
     * The current destination queue, meaning the floor numbers the elevator
     * is scheduled to go to. Can be modified and emptied if desired. Note that
     * you need to call checkDestinationQueue() for the change to take effect immediately.
     * 
     * @see checkDestinationQueue
     */
    destinationQueue: number[]

    /**
     * Checks the destination queue for any new destinations to go to. Note that you only
     * need to call this if you modify the destination queue explicitly.	
     */
    checkDestinationQueue(): void

    /**
     * Queue the elevator to go to specified floor number. If you specify priority as true,
     * the elevator will go to that floor directly, and then go to any other queued floors. 
     * @param floor destination floor
     * @param priority true to add to the front of the queue, false to add to the back.
     */
    goToFloor(floor: number, priority?: boolean): void

    /**
     * Clear the destination queue and stop the elevator if it is moving. Note that you normally
     * don't need to stop elevators - it is intended for advanced solutions with in-transit
     * rescheduling logic. Also, note that the elevator will probably not stop at a floor, so
     * passengers will not get out.	
     */
    stop(): number

    /**
     * Gets the floor number that the elevator currently is on.
     */
    currentFloor(): number

    /**
     * Gets the going up indicator, which will affect passenger behaviour when stopping at floors.	
     */
    goingUpIndicator(): boolean

    /**
     * Gets the going up indicator, which will affect passenger behaviour when stopping at floors.
     * @param on true if the going up indicator should be on.
     */
    setGoingUpIndicator(on: boolean): void

    /**
     * Gets the going down indicator, which will affect passenger behaviour when stopping at floors.	
     */
    goingDownIndicator(): boolean

    /**
     * Gets the going down indicator, which will affect passenger behaviour when stopping at floors.
     * @param on true if the going down indicator should be on.
     */
    setGoingDownIndicator(on: boolean): void

    /**
     * Gets the maximum number of passengers that can occupy the elevator at the same time.	
     */
    maxPassengerCount(): number

    /**
     * Gets the load factor of the elevator. 0 means empty, 1 means full. Varies with passenger
     * weights, which vary - not an exact measure.	
     */
    loadFactor(): number

    /**
     * Gets the direction the elevator is currently going to move toward. Can be an
     * {@link ElevatorDirection}, or null if the elevator is stopped.
     */
    destinationDirection(): ElevatorDirection | null

    /**
     * Checks the destination queue for any new destinations to go to. Note that you only need
     * to call this if you modify the destination queue explicitly.	
     * 
     * @see destinationQueue
     */
    checkDestinationQueue(): void

    /**
     * Gets the currently pressed floor numbers as an array.
     */
    getPressedFloors(): number[]

    /**
     * Sets callback called when the elevator has completed all its tasks and is not doing anything.	
     * @param callback 
     */
    onIdle(callback: () => void): void

    /**
     * Sets callback called when a passenger has pressed a button inside the elevator.
     * @param callback 
     */
    onFloorButtonPressed(callback: (floor: number) => void): void

    /**
     * Sets callback called slightly before the elevator will pass a floor. A good time to decide whether
     * to stop at that floor. Note that this event is not triggered for the destination floor.
     * @param callback 
     */
    onPassingFloor(callback: (floor: number, direction: ElevatorDirection) => void): void

    /**
     * Sets callback called when the elevator has arrived at a floor.
     * @param callback 
     */
    onStoppedAtFloor(callback: (floor: number) => void): void
}

declare interface Floor {
    /**
     * Gets the floor number of the floor object.	
     */
    floorNum(): number;

    /**
     * Triggered when someone has pressed the button at a floor. Note that passengers will press the button
     * again if they fail to enter an elevator.
     * @param callback 
     */
    onButtonPressed(callback: (direction: ElevatorDirection) => void): void;
}

declare interface ElevatorController {
    /**
     * Runs 
     * @param elevators 
     * @param floors 
     */
    init(elevators: Elevator[], floors: Floor[]): void
    update(dt: number, elevators: Elevator[], floors: Floor[]): void
}
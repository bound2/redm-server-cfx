/**
 * Emit event to another server script
 * @param eventName - which event will be sent to the server script
 * @param args - arguments to be passed to another server script
 */
declare function emit(eventName: string, ...args: any[]): void;

/**
 * Emit event to a specific client or to all clients
 * @param eventName - which event will be passed to client scripts
 * @param target - player server id or -1 to send to all
 * @param args - arguments to be passed to client scripts
 */
declare function emitNet(eventName: string, target: number | string, ...args: any[]): void;

/**
 * Listen to events from client & server
 * @param eventName - event to listen to
 * @param callback  - function to execute
 */
declare function onNet(eventName: string, callback: Function): void;

/**
 * Listen to event from server only
 * @param eventName - event to listen to
 * @param callback - function to execute
 */
declare function on(eventName: string, callback: Function): void;

/**
 * This allows you to create a timer that ticks every game frame / server tick.
 * It can be used like a loop that runs forever unless cancelled.
 * @param callback - function to execute periodically
 */
declare function setTick(callback: Function): number;

/**
 * Cancel periodic loop.
 * @param callback - callback id obtained from `setTick` method
 */
declare function clearTick(callback: number): void;

/**
 * Use this to export functions so they can be called from other resources.
 * For example:
 * exports("dropPlayer", (src: string, reason: string) => {
 *     DropPlayer(src, reason);
 * });
 */
declare var exports: any; // eslint-disable-line no-var

/**
 * player's server id, which is present on client's `onNet` calls
 */
declare var source: string; // eslint-disable-line no-var

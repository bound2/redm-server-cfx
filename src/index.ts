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

declare function GetConvar(varName: string, default_: string): string;

declare function GetConvarInt(varName: string, default_: number): number;

declare function GetNumPlayerIdentifiers(playerSrc: number): number;

declare function GetNumPlayerIndices(): number;

declare function GetNumPlayerTokens(playerSrc: number): number;

declare function GetPlayerIdentifier(playerSrc: number, identifier: number): string;

declare function GetPlayerFromIndex(index: number): number;

/**
 * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). 
 * Or by entering them in the server console/through an RCON client (only works for server side registered commands). 
 * Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a /.
 * Commands registered using this function can also be executed by resources, using the ExecuteCommand native.
 * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
 * @param commandName - The command you want to register.
 * @param handler - A handler function that gets called whenever the command is executed.
 * @param restricted - If this is a server command and you set this to true, then players will need the command.yourCommandName ace permission to execute this command.
 */
declare function RegisterCommand(commandName: string, handler: Function, restricted: boolean): void;

/**
 * Cancels the currently executing event.
 */
declare function CancelEvent(): void;

/**
 * Returns the name of the currently executing resource.
 */
declare function GetCurrentResourceName(): string;

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
declare var source: number; // eslint-disable-line no-var

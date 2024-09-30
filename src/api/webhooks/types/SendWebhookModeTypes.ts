/**
 * Types of sending a Discord webhook message to channel.
 * 
 * @property "http" - Requires `@minecraft/server-net` module and must be enabled for this server, recommended for BDS.
 * @property "websocket" - Requires `@minecraft/server` only, works on worlds/Realms.
 */
type SendWebhookModeTypes = "http" | "websocket";

export type { SendWebhookModeTypes };
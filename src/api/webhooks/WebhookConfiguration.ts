import { SendWebhookModeTypes } from "./types/SendWebhookModeTypes";

/**
 * Class, that stores default properties of webhooks.
 * @private
 */
class WebhookConfiguration {
    /**
     * Types of sending a Discord webhook message to channel.
     * 
     * @property "http" - Requires `@minecraft/server-net` module and must be enabled for this server, recommended for BDS.
     * @property "websocket" - Requires `@minecraft/server` only, works on worlds/Realms. Not recommended for BDS.
     * @default "websocket" 
     */
    public static sendWebhookMode: SendWebhookModeTypes = "websocket";

    private constructor() {};
};

export { WebhookConfiguration };
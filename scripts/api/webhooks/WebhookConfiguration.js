/**
 * Class, that stores default properties of webhooks.
 * @private
 */
class WebhookConfiguration {
    /**
     * Types of sending a Discord webhook message to channel.
     * If you won't change anything here, all should work correctly.
     *
     * @property "http" - Requires `@minecraft/server-net` module and must be enabled for this server, recommended for BDS.
     * @default "http"
     */
    static sendWebhookMode = "http";
    constructor() { }
    ;
}
;
export { WebhookConfiguration };

import { EmbedUtility } from "../WebhookAPI";
import { WebhookConfiguration } from "./WebhookConfiguration";
import { world } from "@minecraft/server";
import { WEBHOOK_WEBSOCKET_DATA } from "./constants/WebhookWebsocketData";
/**
 * Class that allows you to send messages via webhook.
 * @private This class is private.
 */
class WebhookUtility {
    static dimension = world.getDimension("overworld");
    /**
     * Default properties for webhooks.
     * @readonly
     */
    static configuration = WebhookConfiguration;
    constructor() { }
    ;
    /**
     * Sends a messages via webhook to a channel.
     * @param webhookUri Link to a webhook.
     * @param messageContent Content of a message.
     * @returns Returns an empty result.
     */
    static async sendWebhook(webhookUri, { content = "", embeds = [] }) {
        const webhookContent = {
            content,
            embeds: embeds.map((embed) => embed instanceof EmbedUtility ? embed.toJSON() : embed),
        };
        switch (this.configuration.sendWebhookMode) {
            case "http":
                try {
                    const { http, HttpHeader, HttpRequestMethod, HttpRequest } = await import("@minecraft/server-net");
                    await http.request(new HttpRequest(webhookUri)
                        .setBody(JSON.stringify(webhookContent))
                        .setHeaders([
                        new HttpHeader("Content-Type", "application/json"),
                        new HttpHeader("Accept", "application/json")
                    ])
                        .setMethod(HttpRequestMethod.Post));
                }
                catch { }
                ;
                return;
            case "websocket":
                this.dimension.runCommandAsync(`tell @r ${WEBHOOK_WEBSOCKET_DATA.authorizationPrefix}${JSON.stringify({
                    webhookUri,
                    embeds: webhookContent.embeds,
                    content: webhookContent.content
                })}`);
                return;
        }
        ;
    }
    ;
}
;
export { WebhookUtility };

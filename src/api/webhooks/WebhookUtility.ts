import { IWebhookContent } from "./interfaces/IWebhookContent";
import { EmbedUtility, IRawEmbedUtility } from "../WebhookAPI";
import { WebhookConfiguration } from "./WebhookConfiguration";
import { world, Dimension } from "@minecraft/server";
import { WEBHOOK_WEBSOCKET_DATA } from "./constants/WebhookWebsocketData";

/**
 * Class that allows you to send messages via webhook.
 * @private This class is private.
 */
class WebhookUtility {
    private static readonly dimension: Dimension = world.getDimension("overworld");
    public static readonly configuration: typeof WebhookConfiguration = WebhookConfiguration;
    private constructor() {};

    /**
     * Sends a messages via webhook to a channel.
     * @param webhookUri Link to a webhook.
     * @param messageContent Content of a message.
     * @returns Returns an empty result.
     */
    public static async sendWebhook(webhookUri: string, { content = "", embeds = [] }: IWebhookContent): Promise<void> {
        const webhookContent: IWebhookContent = {
            content,
            embeds: embeds.map((embed: EmbedUtility | IRawEmbedUtility) => embed instanceof EmbedUtility ? embed.toJSON() : embed),
        };

        switch (this.configuration.sendWebhookMode) {
            case "http":
                try {
                    const { http, HttpHeader, HttpRequestMethod, HttpRequest } = await import("@minecraft/server-net");
        
                    await http.request(
                        new HttpRequest(webhookUri)
                            .setBody(JSON.stringify(webhookContent))
        
                            .setHeaders([
                                new HttpHeader("Content-Type", "application/json"),
                                new HttpHeader("Accept", "application/json")
                            ])
        
                            .setMethod(HttpRequestMethod.Post)
                    );
                } catch {};
                return;

            case "websocket":
                this.dimension.runCommandAsync(`tell @r ${WEBHOOK_WEBSOCKET_DATA.authorizationPrefix}${JSON.stringify({
                    webhookUri,
                    embeds: webhookContent.embeds,
                    content: webhookContent.content
                })}`);
                return;
        };
    };
};

export { WebhookUtility, IWebhookContent };
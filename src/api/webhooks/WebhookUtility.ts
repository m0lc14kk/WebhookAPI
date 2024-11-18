import { IWebhookContent } from "./interfaces/IWebhookContent";
import { EmbedUtility, IRawEmbedUtility } from "../WebhookAPI";
import { WebhookConfiguration } from "./WebhookConfiguration";
import { world, Dimension } from "@minecraft/server";

/**
 * Class that allows you to send messages via webhook.
 * @private This class is private.
 */
class WebhookUtility {
    private static readonly dimension: Dimension = world.getDimension("overworld");

    /**
     * Default properties for webhooks.
     * @readonly
     */
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

        try {
            const { http, HttpHeader, HttpRequestMethod, HttpRequest } = await import("@minecraft/server-net");

            await http.request(
                new HttpRequest(webhookUri)
                    .setBody(JSON.stringify(webhookContent))

                    .setHeaders([
                        new HttpHeader("Content-Type", "application/json"),
                        new HttpHeader("Accept", "application/json")
                    ])

                    .setMethod(HttpRequestMethod.POST)
            );
        } catch {};
    };
};

export { WebhookUtility, IWebhookContent };
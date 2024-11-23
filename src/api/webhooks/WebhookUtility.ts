import { IWebhookContent } from "./interfaces/IWebhookContent";
import { EmbedUtility, IRawEmbedUtility } from "../WebhookAPI";
import { WebhookConfiguration } from "./WebhookConfiguration";
import { world, Dimension } from "@minecraft/server";

/**
 * Class that allows you to send messages via webhook.
 * @private This class is private.
 * @remarks To send webhook, use static method:
 * ```ts
 * WebhookUtility.sendWebhook(webhookUri: string, { content = "", embeds = [] }: IWebhookContent);
 * ```
 */
class WebhookUtility {
    /**
     * Default properties for webhooks.
     * @readonly
     */
    public static readonly configuration: typeof WebhookConfiguration = WebhookConfiguration;

    /**
     * Class that allows you to send messages via webhook.
     * @private This class is private.
     * @remarks To send webhook, use static method:
     * ```ts
     * WebhookUtility.sendWebhook(webhookUri: string, { content = "", embeds = [] }: IWebhookContent);
     * ```
     */
    private constructor() {};

    /**
     * Sends a messages via webhook to a channel.
     * @param webhookUri Link to a webhook.
     * @param messageContent Content of a message.
     * @returns Method does return whether webhook was succesfully sent.
     */
    public static async sendWebhook(webhookUri: string, { content = "", embeds = [] }: IWebhookContent): Promise<boolean> {
        const webhookContent: IWebhookContent = {
            content,
            embeds: embeds.map((embed: EmbedUtility | IRawEmbedUtility) => embed instanceof EmbedUtility ? embed.toJSON() : embed),
        };

        try {
            const { http, HttpHeader, HttpRequestMethod, HttpRequest } = await import("@minecraft/server-net");

            const request = await http.request(
                new HttpRequest(webhookUri)
                    .setBody(JSON.stringify(webhookContent))

                    .setHeaders([
                        new HttpHeader("Content-Type", "application/json"),
                        new HttpHeader("Accept", "application/json")
                    ])

                    .setMethod(HttpRequestMethod.POST)
            );

            return request.status === 200;
        } catch {
            return false;
        };
    };
};

export { WebhookUtility, IWebhookContent };
import { IWebhookContent } from "./interfaces/IWebhookContent";
import { EmbedUtility, IRawEmbedUtility, validateDiscordWebhookUrl } from "../WebhookAPI";
import { WebhookConfiguration } from "./WebhookConfiguration";
import { world, Dimension } from "@minecraft/server";

/**
 * Class that allows you to send messages via webhook.
 * @private This class is private.
 * @remarks To send webhook, use static method:
 * ```ts
 * WebhookUtility.sendWebhook(webhookUrl: string, { content = "", embeds = [] }: IWebhookContent);
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
     * WebhookUtility.sendWebhook(webhookUrl: string, { content = "", embeds = [] }: IWebhookContent);
     * ```
     */
    private constructor() {};

    /**
     * Sends a messages via webhook to a channel.
     * @param webhookUrl Link to a webhook.
     * @param messageContent Content of a message.
     * @returns Method does return whether webhook was succesfully sent.
     */
    public static async sendWebhook(webhookUrl: string, { content = "", embeds = [] }: IWebhookContent): Promise<boolean> {
        if (!validateDiscordWebhookUrl(webhookUrl)) throw new Error("This is not a valid URL!");

        const webhookContent: IWebhookContent = {
            content,
            embeds: embeds.map((embed: EmbedUtility | IRawEmbedUtility) => embed instanceof EmbedUtility ? embed.toJSON() : embed),
        };

        try {
            const { http, HttpHeader, HttpRequestMethod, HttpRequest } = await import("@minecraft/server-net");

            const request = await http.request(
                new HttpRequest(webhookUrl)
                    .setBody(JSON.stringify(webhookContent))

                    .setHeaders([
                        new HttpHeader("Content-Type", "application/json"),
                        new HttpHeader("Accept", "application/json")
                    ])

                    .setMethod(HttpRequestMethod.POST)
            );

            return `${request.status}`[0] === "2";
        } catch {
            return false;
        };
    };
};

export { WebhookUtility, IWebhookContent };
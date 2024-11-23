import { IWebhookContent } from "./interfaces/IWebhookContent";
import { WebhookConfiguration } from "./WebhookConfiguration";
/**
 * Class that allows you to send messages via webhook.
 * @private This class is private.
 * @remarks To send webhook, use static method:
 * ```ts
 * WebhookUtility.sendWebhook(webhookUri: string, { content = "", embeds = [] }: IWebhookContent);
 * ```
 */
declare class WebhookUtility {
    /**
     * Default properties for webhooks.
     * @readonly
     */
    static readonly configuration: typeof WebhookConfiguration;
    /**
     * Class that allows you to send messages via webhook.
     * @private This class is private.
     * @remarks To send webhook, use static method:
     * ```ts
     * WebhookUtility.sendWebhook(webhookUri: string, { content = "", embeds = [] }: IWebhookContent);
     * ```
     */
    private constructor();
    /**
     * Sends a messages via webhook to a channel.
     * @param webhookUri Link to a webhook.
     * @param messageContent Content of a message.
     * @returns Method does return whether webhook was succesfully sent.
     */
    static sendWebhook(webhookUri: string, { content, embeds }: IWebhookContent): Promise<boolean>;
}
export { WebhookUtility, IWebhookContent };

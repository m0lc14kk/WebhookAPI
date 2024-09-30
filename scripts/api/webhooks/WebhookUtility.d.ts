import { IWebhookContent } from "./interfaces/IWebhookContent";
import { WebhookConfiguration } from "./WebhookConfiguration";
/**
 * Class that allows you to send messages via webhook.
 * @private This class is private.
 */
declare class WebhookUtility {
    private static readonly dimension;
    static readonly configuration: typeof WebhookConfiguration;
    private constructor();
    /**
     * Sends a messages via webhook to a channel.
     * @param webhookUri Link to a webhook.
     * @param messageContent Content of a message.
     * @returns Returns an empty result.
     */
    static sendWebhook(webhookUri: string, { content, embeds }: IWebhookContent): Promise<void>;
}
export { WebhookUtility, IWebhookContent };

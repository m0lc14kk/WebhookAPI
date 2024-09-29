import { IWebhookContent } from "./IWebhookContent";
/**
 * Class that allows you to send messages via webhook.
 * @private This class is private.
 */
declare class WebhookUtility {
    private constructor();
    /**
     * Sends a messages via webhook to a channel.
     * @param webhookUri Link to a webhook.
     * @param messageContent Content of a message.
     * @returns Returns a boolean, if messages was successfully sent.
     */
    static sendWebhook(webhookUri: string, { content, embeds, components }: IWebhookContent): Promise<boolean>;
}
export { WebhookUtility, IWebhookContent };

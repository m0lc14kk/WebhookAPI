import { EmbedUtility, IRawEmbedUtility } from "../../WebhookAPI";

interface IWebhookContent {
    /**
     * Content of a webhook.
     * @readonly
     */
    readonly content?: string,

    // TO-DO: add embed/component objects instances,

    /**
     * Embeds of a message.
     * If object is `EmbedUtility` instance, it will be automaticly converted to JSON object.
     * @readonly
     */
    readonly embeds?: (EmbedUtility | IRawEmbedUtility)[],
};

export { IWebhookContent };
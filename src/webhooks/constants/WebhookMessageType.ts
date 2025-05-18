/* eslint-disable no-unused-vars */

/**
 * Type of a message structure.
 */
enum WebhookMessageType {
    /**
     * Old layout of Discord messages.
     * @remarks It applies `IWebhookOldMessageStructure` interface to a message.
     */
    OLD,

    /**
     * New layout of Discord messages. (Components V2)
     * @remarks It applies `IWebhookNewMessageStructure` interface to a message.
     */
    NEW,
}

export { WebhookMessageType }

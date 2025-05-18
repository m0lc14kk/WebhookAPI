/* eslint-disable no-unused-vars */

/**
 * Webhooks flags, that are chaning behavior of a message.
 */
enum WebhookMessageFlagsType {
    /**
     * If flag is applied, all embeds from a message are hidden.
     */
    SUPPRESS_EMBEDS = 1 << 2,

    /**
     * If flag is applied, message does not send notifications to anyone.
     */
    SUPPRESS_NOTIFICATIONS = 1 << 12,
}

export { WebhookMessageFlagsType }

/* eslint-disable no-unused-vars */

/**
 * Types of a webhook.
 */
enum WebhookType {
    /**
     * Incoming Webhooks can post messages to channels with a generated token.
     */
    INCOMING = 1,

    /**
     * Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels.
     */
    CHANNEL_FOLLOWER,

    /**
     * Application webhooks are webhooks used with Interactions.
     */
    APPLICATION,
}

export { WebhookType }

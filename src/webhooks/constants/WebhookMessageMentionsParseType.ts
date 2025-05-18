/* eslint-disable no-unused-vars */

/**
 * Webhook message mentions types.
 */
enum WebhookMessageMentionsParseType {
    /**
     * Role mentioned.
     */
    ROLES = "roles",

    /**
     * User mentioned.
     */
    USERS = "users",

    /**
     * Everyone mentioned.
     */
    EVERYONE = "everyone",
}

export { WebhookMessageMentionsParseType }

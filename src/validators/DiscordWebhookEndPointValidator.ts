const DISCORD_WEBHOOK_URL_REGEXP: Readonly<RegExp> = /^https:\/\/(canary\.|ptb\.)?discord\.com\/api\/webhooks\/\d{17,20}\/[A-Za-z0-9_-]{60,70}$/

/**
 * A class to validate Discord Webhook URLs.
 */
class DiscordWebhookEndPointValidator {
    private constructor() {}

    /**
     * Checks if a provided URL is a valid Discord Webhook URL.
     * @param snowflake Unrecognized Discord Webhook URL.
     * @returns Returns a boolean based on if provided argument is a valid Discord Webhook URL.
     */
    public static isDiscordWebhookEndPoint(webhookUrl: unknown): webhookUrl is string {
        return typeof webhookUrl === "string" && DISCORD_WEBHOOK_URL_REGEXP.test(webhookUrl)
    }
}

export { DiscordWebhookEndPointValidator }
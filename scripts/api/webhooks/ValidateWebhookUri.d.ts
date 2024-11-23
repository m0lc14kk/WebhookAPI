/**
 * Checks if provided Discord webhook is a valid one.
 * This does not includes if it's a real one.
 *
 * @param webhookUrl URL of a Discord webhook.
 * @returns Returns a boolean whether provided URL is valid.
 */
declare function validateDiscordWebhookUrl(webhookUrl: string): boolean;
export { validateDiscordWebhookUrl };

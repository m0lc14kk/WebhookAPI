/**
 * Checks if provided Discord webhook is a valid one.
 * This does not includes if it's a real one.
 *
 * @param webhookUrl URL of a Discord webhook.
 * @returns Returns a boolean whether provided URL is valid.
 */
function validateDiscordWebhookUrl(webhookUrl) {
    return /^https:\/\/discord\.com\/api\/webhooks\/\d+\/[\w-]+$/.test(webhookUrl);
}
;
export { validateDiscordWebhookUrl };

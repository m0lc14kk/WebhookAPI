// Import a webhook class.
import { WebhookUtility } from "../../api/WebhookAPI";

// Send a basic webhook to channel.
WebhookUtility.sendWebhook("YOUR_WEBHOOK_LINK", {
    content: "test"
});
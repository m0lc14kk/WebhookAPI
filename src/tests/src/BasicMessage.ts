// Import a webhook class.
import { EmbedUtility, WebhookUtility } from "../../api/WebhookAPI";

// Send a message with almost every possible embed property.
WebhookUtility.sendWebhook("YOUR_WEBHOOK_URL_HERE", {
    content: "test",
    embeds: [
        new EmbedUtility()
            .setTitle("Some title.")
            .setDescription("Some description.")
            .setColor(0xFFAA00)
            .setAuthor({
                name: "Author",
                url: "https://github.com/m0lc14kk",
                iconURL: "https://avatars.githubusercontent.com/u/145808327?v=4"
            })

            .setFooter({
                text: "Footer",
                iconURL: "https://avatars.githubusercontent.com/u/145808327?v=4"
            })

            .setThumbnail("https://avatars.githubusercontent.com/u/145808327?v=4")
            .setTimestamp(new Date())
            .setURL("https://github.com/m0lc14kk")
    ]
});
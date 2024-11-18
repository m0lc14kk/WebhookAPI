// Import webhook classes.
import { EmbedUtility, WebhookUtility } from "../../api/WebhookAPI";

/**
 * Send a message with almost every possible embed property.
 * @remarks Change API link with your webhook URL.
 */
WebhookUtility.sendWebhook("https://discord.com/api/webhooks/1289853542290554911/OuRGTWP93yTzo15dqmM0CjtSi2UGFAeNNZRu68xJ42cSjJpcuQHSDuhXAB36rZe0rDcr", {
    content: "test",
    embeds: [
        new EmbedUtility()
            .setTitle("Some title.")
            .setDescription("Some description.")
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
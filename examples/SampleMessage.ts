/**
 * This is a sample test for checking, if API has loaded correctly.
 * It should send a basic message to your Discord channel.
 */

import { world } from "@minecraft/server"
import { ContainerComponent, MediaGalleryComponent, TextDisplayComponent, Webhook, WebhookMessageType } from "../src" // Change path to your's index file.

// Change Webhook's URL.
const WEBHOOK_URL = "YOUR_WEBHOOK_URL"
const webhook: Webhook = new Webhook(WEBHOOK_URL)

world.afterEvents.worldLoad.subscribe((): void => {
    webhook.sendMessage(
        {
            version: WebhookMessageType.NEW,
            components: [
                new ContainerComponent().setAccentColor(null).setComponents(
                    new TextDisplayComponent().setContent([
                        "# 🔥 Webhook API",
                        "Thanks for using my API in your project. This is a sample code, that will be sent after the world loads, if an API is set-up correctly. If you see this message on your channel, congrats!",
                        "",
                        "- GitHub: [Webhook API](https://github.com/m0lc14kk/WebhookAPI)",
                    ]),
                    new MediaGalleryComponent().setImages({
                        media: {
                            url: "https://github.com/m0lc14kk/WebhookAPI/blob/main/.github/assets/banner.png?raw=true",
                        },
                    }),
                ),
            ],
        },
        {
            withComponents: true,
        },
    )
})

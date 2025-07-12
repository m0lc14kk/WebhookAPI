/**
 * This example is a sample code, that will log every player's message
 * from a chat to Discord channel.
 *
 * @author m0lc14kk
 * @see https://github.com/m0lc14kk/WebhookAPI
 */

import { ChatSendBeforeEvent, system, world } from "@minecraft/server"
import { TextDisplayComponent, Webhook, WebhookMessageType } from "../src" // Change path to your's index file.

// Change Webhook's URL.
const WEBHOOK_URL: string = "YOUR_WEBHOOK_URL"
const webhook: Webhook = new Webhook(WEBHOOK_URL)

world.beforeEvents.chatSend.subscribe((eventData: ChatSendBeforeEvent): void => {
    const { sender: player, message } = eventData
    eventData.cancel = true

    world.sendMessage(`${player.name}: ${message}`)

    /**
     * You don't have to call the method using await, but most of
     * standards might throw a warning about ignoring a promise.
     */
    system.run(async (): Promise<void> => {
        await webhook.sendMessage(
            {
                version: WebhookMessageType.NEW,
                components: [new TextDisplayComponent().setContent(`${player.name}: ${message}`)],
            },
            {
                withComponents: true,
            },
        )
    })
})

/**
 * This example is a sample code, that will log every player's join
 * and leave to a Minecraft server as themselves.
 *
 * @author m0l1c4kk
 * @see https://github.com/m0lc14kk/WebhookAPI
 */

import { PlayerJoinAfterEvent, PlayerLeaveBeforeEvent, system, world } from "@minecraft/server"
import { TextDisplayComponent, Webhook, WebhookMessageType } from "../src" // Change path to your's index file.

// Change Webhook's URL.
const WEBHOOK_URL: string = "YOUR_WEBHOOK_URL"
const webhook: Webhook = new Webhook(WEBHOOK_URL)

world.afterEvents.playerJoin.subscribe(({ playerName }: PlayerJoinAfterEvent): void => {
    system.run((): void => {
        webhook.sendMessage({
            version: WebhookMessageType.NEW,
            username: playerName,
            components: [new TextDisplayComponent().setContent("I just joined a server!")],
        }, {
            withComponents: true
        })
    })
})

world.beforeEvents.playerLeave.subscribe(({ player }: PlayerLeaveBeforeEvent): void => {
    /**
     * You must save player's name, beacuse in system.run player will be undefined
     * due to privilege system.
     */
    const { name: playerName } = player
    system.run((): void => {
        webhook.sendMessage({
            version: WebhookMessageType.NEW,
            username: playerName,
            components: [new TextDisplayComponent().setContent("I just left a server!")],
        }, {
            withComponents: true
        })
    })
})

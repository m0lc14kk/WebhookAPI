import { Component } from "../../components/Component"
import type { WebhookMessageType } from "../constants/WebhookMessageType"
import type { IWebhookMessageStructure } from "./IWebhookMessageStructure"

/**
 * Structure for new message system on Discord.
 */
interface IWebhookNewMessageStructure extends IWebhookMessageStructure {
    /**
     * Version of a message content.
     * @default WebhookMessageType.NEW
     */
    version: WebhookMessageType.NEW

    /**
     * New component system for messages.
     */
    components: Component[]
}

export { IWebhookNewMessageStructure }

import type { WebhookType } from "../constants/WebhookType"
import type { IWebhookStructure } from "./IWebhookStructure"

/**
 * Structure of an application webhook.
 */
interface IWebhookApplicationStructure extends IWebhookStructure {
    /**
     * Type of a webhook.
     * @readonly This property is in read-only mode.
     */
    readonly type: WebhookType.APPLICATION

    /**
     * Identifier of a webhook.
     */
    id: string

    /**
     * Name of a webhook.
     */
    name: string

    /**
     * Avatar of a webhook in Base64 format.
     */
    avatar: string
    channel_id: null
    guild_id: null

    /**
     * Identifier of an application identifier.
     */
    application_id: string
}

export type { IWebhookApplicationStructure }

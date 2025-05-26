import type { WebhookType } from "../constants/WebhookType"

/**
 * Base structure of a Webhook.
 */
interface IWebhookStructure {
    /**
     * Type of a webhook.
     * @readonly
     */
    readonly type: WebhookType

    /**
     * Identifier of a webhook.
     */
    id: string

    /**
     * Optional channel's identifier of a webhook.
     */
    channel_id: string | null

    /**
     * Optional application's identifier of a webhook.
     */
    application_id: string | null

    /**
     * Optional webhook's name.
     */
    name: string | null

    /**
     * Optional webhook's avatar.
     * @remarks Avatar is in Base64 format.
     */
    avatar: string | null
}

export type { IWebhookStructure }

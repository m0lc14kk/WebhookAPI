import type { WebhookType } from "../constants/WebhookType"
import type { IWebhookStructure } from "./IWebhookStructure"

/**
 * Structure of an incoming webhook.
 */
interface IWebhookIncomingStructure extends IWebhookStructure {
    /**
     * Type of a webhook.
     * @readonly This property is in read-only mode.
     */
    type: WebhookType.INCOMING

    /**
     * Name of a webhook.
     */
    name: string

    /**
     * Identifier of a channel.
     */
    channel_id: string

    /**
     * Token of a webhook.
     */
    token: string

    /**
     * Nullified avatar.
     */
    avatar: null

    /**
     * Identifier of a guild.
     */
    guild_id: string

    /**
     * Identifier of a webhook.
     */
    id: string

    /**
     * Nullified identifier of an application.
     */
    application_id: null

    /**
     * Information about user.
     */
    user: {
        /**
         * Username of an user.
         */
        username: string

        /**
         * User's discriminator.
         * @remarks This is an old tag element.
         */
        discriminator: string

        /**
         * Identifier of a user.
         */
        id: string

        /**
         * Avatar of a user in Base64 format.
         */
        avatar: string

        /**
         * Public flags of an user.
         */
        public_flags: number
    }
}

export type { IWebhookIncomingStructure }

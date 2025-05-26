import type { WebhookType } from "../constants/WebhookType"
import type { IWebhookStructure } from "./IWebhookStructure"

/**
 * Structure of a channel follower webhook.
 */
interface IWebhookChannelFollowerStructure extends IWebhookStructure {
    /**
     * Type of a webhook.
     * @readonly This property is in read-only mode.
     */
    readonly type: WebhookType.CHANNEL_FOLLOWER

    /**
     * Name of a webhook.
     */
    name: string

    /**
     * Avatar of a webhook in Base64 format.
     */
    avatar: string

    /**
     * Identifier of a channel.
     */
    channel_id: string

    /**
     * Identifier of a guild.
     */
    guild_id: string
    application_id: null

    /**
     * Information about source guild.
     */
    source_guild: {
        /**
         * Identifier of a guild.
         */
        id: string

        /**
         * Name of a guild.
         */
        name: string

        /**
         * Icon of a guild in Base64 format.
         */
        icon: string
    }

    /**
     * Information about source channel.
     */
    source_channel: {
        /**
         * Identifier of a channel.
         */
        id: string

        /**
         * Name of a channel.
         */
        name: string
    }

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

export type { IWebhookChannelFollowerStructure }

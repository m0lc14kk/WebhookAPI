import { Component } from "../../components/Component"
import { ActionRowComponent } from "../../components/new/grouping/ActionRowComponent"
import { EmbedBuilder } from "../../components/old/embeds/EmbedBuilder"
import { PollBuilder } from "../../components/old/polls/PollBuilder"

type IWebhookDiscordMessageStructure = {
    /**
     * Identifier of a message.
     */
    id: string

    /**
     * Identifier of a channel.
     */
    channel_id: string

    /**
     * Information about an author of a message.
     */
    author: {
        /**
         * Username of an author.
         */
        username: string

        /**
         * Discriminator of an author.
         * @remarks This is an old tag system.
         */
        discriminator: string

        /**
         * Identifier of an author.
         */
        id: string

        /**
         * Avatar of an author in Base64 format
         */
        avatar: string
    }

    /**
     * Identifier of a Discord webhook.
     */
    webhook_id: string

    /**
     * Timestamp of a message when it was sent.
     */
    timestamp: string

    /**
     * Optional timestamp of a last edit of a message.
     * @remarks If it's undefined, it hasn't been edited.
     */
    edited_timestamp?: string

    /**
     * If a message is text-to-speech.
     * @default false
     */
    tts: boolean

    /**
     * If a message is able to mention everyone.
     * @default true
     */
    mention_everyone: boolean

    /**
     * If a message is pinned.
     */
    pinned: boolean

    /**
     * Bitfield of flags of a message.
     */
    flags: number

    /**
     * Thread of a message.
     * @remarks This field will be defined, it message was originally sent in a thread. 
     */
    thread?: {
        /**
         * Identifier of a thread.
         */
        id: string

        /**
         * Name of a thread.
         */
        name: string
    }
} & (
        | {
            /**
             * Content of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            content?: string
            /**
             * Old components of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            components?: ActionRowComponent[]
            /**
             * Embeds of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            embeds?: EmbedBuilder[]
            /**
             * Poll of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            poll?: PollBuilder
        }
        | {
            /**
             * Components of a message.
             */
            components: Component[]
        }
    )

export type { IWebhookDiscordMessageStructure }

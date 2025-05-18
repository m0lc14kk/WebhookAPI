import { ActionRowComponent } from "../../components/new/grouping/ActionRowComponent"
import { EmbedBuilder } from "../../components/old/embeds/EmbedBuilder"
import { PollBuilder } from "../../components/old/polls/PollBuilder"
import type { WebhookMessageType } from "../constants/WebhookMessageType"
import type { IWebhookMessageStructure } from "./IWebhookMessageStructure"

/**
 * Structure for old message system on Discord.
 */
type IWebhookOldMessageStructure = IWebhookMessageStructure & {
    /**
     * Version of a message content.
     * @default WebhookMessageType.OLD
     */
    version: WebhookMessageType.OLD
} & (
        | {
            /**
             * Content of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            content: string

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
            
            /**
             * Components of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            components?: ActionRowComponent[]
        }
        | {
            /**
             * Content of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            content?: string

            /**
             * Embeds of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            embeds: EmbedBuilder[]

            /**
             * Poll of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            poll?: PollBuilder

            /**
             * Components of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            components?: ActionRowComponent[]
        }
        | {
            /**
             * Content of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            content?: string

            /** 
             * Embeds of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            embeds?: EmbedBuilder[]

            /**
             * Poll of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            poll: PollBuilder

            /**
             * Components of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            components?: ActionRowComponent[]
        }
        | {
            /**
             * Content of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            content?: string

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

            /**
             * Components of a message.
             * @remarks One of `content`, `components`, `embeds` and `poll` must be defined.
             */
            components: ActionRowComponent[]
        }
    )

export { IWebhookOldMessageStructure }

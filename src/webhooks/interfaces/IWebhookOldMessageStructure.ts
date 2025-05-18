import { ActionRowComponent } from "../../components/new/grouping/ActionRowComponent"
import { EmbedBuilder } from "../../components/old/embeds/EmbedBuilder"
import { PollBuilder } from "../../components/old/polls/PollBuilder"
import type { WebhookMessageType } from "../constants/WebhookMessageType"
import type { IWebhookMessageStructure } from "./IWebhookMessageStructure"

type IWebhookOldMessageStructure = IWebhookMessageStructure & {
    version: WebhookMessageType.OLD
} & (
        | {
            content: string
            embeds?: EmbedBuilder[]
            poll?: PollBuilder
            components?: ActionRowComponent[]
        }
        | {
            content?: string
            embeds: EmbedBuilder[]
            poll?: PollBuilder
            components?: ActionRowComponent[]
        }
        | {
            content?: string
            embeds?: EmbedBuilder[]
            poll: PollBuilder
            components?: ActionRowComponent[]
        }
        | {
            content?: string
            embeds?: EmbedBuilder[]
            poll?: PollBuilder
            components: ActionRowComponent[]
        }
    )

export { IWebhookOldMessageStructure }

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
          }
        | {
              content?: string
              embeds: EmbedBuilder[]
              poll?: PollBuilder
          }
        | {
              content?: string
              embeds?: EmbedBuilder[]
              poll: PollBuilder
          }
    )

export { IWebhookOldMessageStructure }

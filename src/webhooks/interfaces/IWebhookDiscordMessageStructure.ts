import { Component } from "../../components/Component"
import { ActionRowComponent } from "../../components/new/grouping/ActionRowComponent"
import { EmbedBuilder } from "../../components/old/embeds/EmbedBuilder"
import { PollBuilder } from "../../components/old/polls/PollBuilder"

type IWebhookDiscordMessageStructure = {
    id: string
    channel_id: string
    author: {
        username: string
        discriminator: string
        id: string
        avatar: string
    }
    webhook_id: string
    timestamp: string
    edited_timestamp?: string
    tts: boolean
    mention_everyone: boolean
    pinned: boolean
    flags: number
    thread?: {
        id: string
        name: string
    }
} & (
    | {
          content?: string
          components?: ActionRowComponent[]
          embeds?: EmbedBuilder[]
          poll?: PollBuilder
      }
    | {
          components: Component[]
      }
)

export type { IWebhookDiscordMessageStructure }

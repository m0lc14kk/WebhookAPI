import { WebhookType } from "../constants/WebhookType"
import { IWebhookStructure } from "./IWebhookStructure"

interface IWebhookChannelFollowerStructure extends IWebhookStructure {
    type: WebhookType.CHANNEL_FOLLOWER
    name: string
    avatar: string
    channel_id: string
    guild_id: string
    application_id: null
    source_guild: {
        id: string
        name: string
        icon: string
    }
    source_channel: {
        id: string
        name: string
    }
    user: {
        username: string
        discriminator: string
        id: string
        avatar: string
        public_flags: number
    }
}

export type { IWebhookChannelFollowerStructure }

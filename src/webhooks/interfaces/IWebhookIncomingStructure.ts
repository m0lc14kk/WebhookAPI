import { WebhookType } from "../constants/WebhookType"
import { IWebhookStructure } from "./IWebhookStructure"

interface IWebhookIncomingStructure extends IWebhookStructure {
    type: WebhookType.INCOMING
    name: string
    channel_id: string
    token: string
    avatar: null
    guild_id: string
    id: string
    application_id: null
    user: {
        username: string
        discriminator: string
        id: string
        avatar: string
        public_flags: number
    }
}

export type { IWebhookIncomingStructure }

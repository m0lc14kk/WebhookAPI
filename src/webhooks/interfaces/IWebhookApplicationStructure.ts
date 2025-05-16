import type { WebhookType } from "../constants/WebhookType"
import type { IWebhookStructure } from "./IWebhookStructure"

interface IWebhookApplicationStructure extends IWebhookStructure {
    type: WebhookType.APPLICATION
    id: string
    name: string
    avatar: string
    channel_id: null
    guild_id: null
    application_id: string
}

export type { IWebhookApplicationStructure }

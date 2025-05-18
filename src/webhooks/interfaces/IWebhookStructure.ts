import type { WebhookType } from "../constants/WebhookType"

interface IWebhookStructure {
    type: WebhookType
    id: string
    channel_id: string | null
    application_id: string | null
    name: string | null
    avatar: string | null
}

export type { IWebhookStructure }

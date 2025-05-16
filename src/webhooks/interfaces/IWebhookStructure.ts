import type { WebhookType } from "../constants/WebhookType"

interface IWebhookStructure {
    id: string
    type: WebhookType
    channel_id: string | null
    application_id: string | null
    name: string | null
    avatar: string | null
}

export type { IWebhookStructure }

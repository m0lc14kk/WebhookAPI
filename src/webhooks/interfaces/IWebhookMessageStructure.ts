import { WebhookMessageMentionsParseType } from "../constants/WebhookMessageMentionsParseType"
import { WebhookMessageType } from "../constants/WebhookMessageType"

interface IWebhookMessageStructure {
    version: WebhookMessageType
    username?: string
    avatar_url?: string
    tts?: boolean
    allowed_mentions?: {
        parse?: WebhookMessageMentionsParseType[]
        roles?: string[]
        users?: string[]
        replied_user?: boolean
    }
    components: unknown[]
    thread_name: string
}

export { IWebhookMessageStructure }

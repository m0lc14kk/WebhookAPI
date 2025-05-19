import type { WebhookMessageMentionsParseType } from "../constants/WebhookMessageMentionsParseType"
import type { WebhookMessageType } from "../constants/WebhookMessageType"

interface IWebhookMessageStructure {
    /**
     * Version of a message content.
     */
    version: WebhookMessageType

    /**
     * Optional username of an author.
     * @remarks If you won't provide this, it'll be replaced with username saved on Discord.
     */
    username?: string

    /**
     * Optional URL to an avatr of an author.
     * @remarks If you won't provide this, it'll be replaced with username saved on Discord.
     */
    avatar_url?: string

    /**
     * If a message will be text-to-speech.
     * @default false
     */
    tts?: boolean

    /**
     * Optional object of allowed mentions
     */
    allowed_mentions?: {
        /**
         * Mentions that will be parsed.
         */
        parse?: WebhookMessageMentionsParseType[]

        /**
         * Roles that will be allowed to be pinged.
         */
        roles?: string[]

        /**
         * Users that will be allowed to be pinged.
         */
        users?: string[]
    }

    /**
     * Components of a message.
     */
    components: unknown[]

    /**
     * Name of a thread.
     */
    thread_name?: string
}

export { IWebhookMessageStructure }

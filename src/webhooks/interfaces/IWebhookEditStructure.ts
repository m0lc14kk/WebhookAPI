/**
 * Structure of a editWebhook method options.
 * @remarks You can only provide fields, that you want to change.
 */
interface IWebhookEditStructure {
    /**
     * New name of a webhook.
     */
    name?: string

    /**
     * New avatar of a webhook.
     * @remarks Avatar must be in Base64 format.
     */
    avatar?: string
}

export type { IWebhookEditStructure }

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

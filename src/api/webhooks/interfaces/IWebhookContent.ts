interface IWebhookContent {
    /**
     * Content of a webhook.
     * @readonly
     */
    readonly content?: string,

    // TO-DO: add embed/component objects instances,

    /**
     * Embeds of a message.
     * @readonly
     */
    readonly embeds?: [],
    
    /**
     * Compontents of a message. This option can have
     * buttons or dropdowns.
     * @readonly
     */
    readonly components?: []
};

export { IWebhookContent };
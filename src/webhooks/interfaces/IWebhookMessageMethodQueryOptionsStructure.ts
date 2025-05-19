interface IWebhookMessageMethodQueryOptionsStructure {
    /**
     * Waits for server confirmation of message send before response,
     * and returns the created message body (defaults to `false`; when false a message that is not saved does not return an error)
     */
    wait?: boolean

    /**
     * If components in old format should be respected.
     */
    withComponents?: boolean

    /**
     * Optional identifier of a thread.
     * @remarks If it is not provided, it'll send in a main channel.
     */
    threadId?: string
}

export { IWebhookMessageMethodQueryOptionsStructure }

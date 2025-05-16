import { WebhookMessageType } from "../constants/WebhookMessageType"

interface IWebhookNewMessageStructure {
    version: WebhookMessageType.NEW
}

export { IWebhookNewMessageStructure }
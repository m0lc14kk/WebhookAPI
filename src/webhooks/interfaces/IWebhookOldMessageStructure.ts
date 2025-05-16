import { WebhookMessageType } from "../constants/WebhookMessageType"
import { IWebhookMessageStructure } from "./IWebhookMessageStructure"

type IWebhookOldMessageStructure = IWebhookMessageStructure & {
    version: WebhookMessageType.OLD
}

export { IWebhookOldMessageStructure }

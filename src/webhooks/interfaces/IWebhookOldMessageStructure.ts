import { WebhookMessageType } from "../constants/WebhookMessageType";
import { IWebhookMessageStructure } from "./IWebhookMessageStructure";

interface IWebhookOldMessageStructure extends IWebhookMessageStructure {
    version: WebhookMessageType.OLD
}

export { IWebhookOldMessageStructure }
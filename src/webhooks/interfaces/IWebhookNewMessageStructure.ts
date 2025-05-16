import { Component } from "../../components/Component"
import type { WebhookMessageType } from "../constants/WebhookMessageType"
import type { IWebhookMessageStructure } from "./IWebhookMessageStructure"

interface IWebhookNewMessageStructure extends IWebhookMessageStructure {
    version: WebhookMessageType.NEW
    components: Component[]
}

export { IWebhookNewMessageStructure }

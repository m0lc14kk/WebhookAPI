import { Component } from "../../components/Component"
import { WebhookMessageType } from "../constants/WebhookMessageType"
import { IWebhookMessageStructure } from "./IWebhookMessageStructure"

interface IWebhookNewMessageStructure extends IWebhookMessageStructure {
    version: WebhookMessageType.NEW
    components: Component[]
}

export { IWebhookNewMessageStructure }

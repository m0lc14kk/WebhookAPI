import type { IWebhookApplicationStructure } from "../interfaces/IWebhookApplicationStructure"
import type { IWebhookChannelFollowerStructure } from "../interfaces/IWebhookChannelFollowerStructure"
import type { IWebhookIncomingStructure } from "../interfaces/IWebhookIncomingStructure"

type WebhookTypeUnion = IWebhookApplicationStructure | IWebhookChannelFollowerStructure | IWebhookIncomingStructure

export type { WebhookTypeUnion }

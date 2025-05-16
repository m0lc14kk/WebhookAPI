/**
 * WEBHOOK API
 *
 * Webhook API is a library that allows developers to easily send
 * their webhooks from Minecraft Vanilla server, without having to
 * struggle with entire set-up of HTTP.
 *
 * @author m0lc14kk
 * @license Apache-2.0
 * @version 1.0.0
 */

export * from "./webhooks/Webhook"
export * from "./webhooks/interfaces/IWebhookApplicationStructure"
export * from "./webhooks/interfaces/IWebhookChannelFollowerStructure"
export * from "./webhooks/interfaces/IWebhookEditStructure"
export * from "./webhooks/interfaces/IWebhookIncomingStructure"
export * from "./webhooks/interfaces/IWebhookStructure"
export * from "./webhooks/constants/WebhookType"
export * from "./webhooks/types/WebhookTypeUnion"

export * from "./components/old/embeds/EmbedBuilder"
export * from "./components/old/embeds/EmbedDefaultProperties"
export * from "./components/old/embeds/interfaces/IEmbedAuthorStructure"
export * from "./components/old/embeds/interfaces/IEmbedFieldStructure"
export * from "./components/old/embeds/interfaces/IEmbedFooterStructure"
export * from "./components/old/embeds/interfaces/IEmbedMediaStructure"

export * from "./components/old/polls/PollBuilder"
export * from "./components/old/polls/interfaces/IPollAnswerStructure"

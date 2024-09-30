import { SendWebhookModeTypes } from "./types/SendWebhookModeTypes";

class WebhookConfiguration {
    public static sendWebhookMode: SendWebhookModeTypes = "websocket";

    private constructor() {};
};

export { WebhookConfiguration };
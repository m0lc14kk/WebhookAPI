import { http, HttpHeader, HttpRequest, HttpRequestMethod, HttpResponse } from "@minecraft/server-net";
import { IWebhookContent } from "./interfaces/IWebhookContent";
import { REQUEST_HEADERS } from "./constants/RequestHeaders";

class WebhookUtility {
    private constructor() {};

    /**
     * Sends a messages via webhook to a channel.
     * @param webhookUri Link to a webhook.
     * @param messageContent Content of a message.
     * @returns Returns a boolean, if messages was successfully sent.
     */
    public static async sendWebhook(webhookUri: string, { content = "", embeds = [], components = [] }: IWebhookContent): Promise<boolean> {
        try {
            const requestResponse: HttpResponse = await http.request(
                new HttpRequest(webhookUri)
                    .setBody(JSON.stringify({
                        content,

                        // It will be compiled to JSON forms in future.
                        embeds,
                        components  
                    }))

                    .setHeaders(REQUEST_HEADERS as HttpHeader[])
                    .setMethod(HttpRequestMethod.Post)
            );

            return requestResponse.status.toString().startsWith("2");
        } catch {
            return false;
        };
    };
};

export { WebhookUtility };
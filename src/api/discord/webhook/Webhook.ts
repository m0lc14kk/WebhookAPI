import { IWebhookContent } from "./interfaces/IWebhookContent";
import { http, HttpHeader, HttpRequest, HttpRequestMethod } from "@minecraft/server-net";

class WebhookServer {
    private webhookURL: string;
    private webhookContent: IWebhookContent;

    public setWebhookURL(url: string): WebhookServer {
        this.webhookURL = url;
        return this;
    };

    public setWebhookContent(content: IWebhookContent): WebhookServer {
        this.webhookContent = content;
        return this;
    };

    public sendWebhook(): void {
        const request = new HttpRequest(this.webhookURL)
            .setBody(JSON.stringify(
                this.webhookContent
            ))

            .setHeaders([
                new HttpHeader('Content-Type', 'application/json'),
                new HttpHeader('Accept', 'application/json')
            ])

            .setMethod(HttpRequestMethod.Post);

        try {
            http.request(request);
        } catch (error) {
            console.warn(error);
        };
    };
};

export { WebhookServer };
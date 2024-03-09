import { IWebhookContent } from "./interfaces/IWebhookContent";
import { http, HttpHeader, HttpRequest, HttpRequestMethod } from "@minecraft/server-net";

class WebhookServer {
    private webhookURL: string;
    private webhookContent: IWebhookContent;

    /**
     * Funkcja od ustawiania linku URL webhooka.
     * @param url URL webhooka, na którego kanał wyśle wiadomość.
     * @returns Zwraca element, by ułatwić szybkość pisania.
     */
    public setWebhookURL(url: string): WebhookServer {
        this.webhookURL = url;
        return this;
    };

    /**
     * Funkcja od ustawiania zawartości wiadomości webhooka.
     * @param content Treść wiadomości.
     * @returns Zwraca element, by ułatwić szybkość pisania.
     */
    public setWebhookContent(content: IWebhookContent): WebhookServer {
        this.webhookContent = content;
        return this;
    };

    /**
     * Funkcja od wysyłania wiadomości webhooka na kanał. W przypadku BeforeEventów, należy przeczekać ticka.
     */
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
import type { DocumentationReferenceType } from "./types/DocumentationReferenceType";

const documentationReference: readonly DocumentationReferenceType<any>[] = [
    {
        categoryName: "class",
        itemName: "WebhookUtility",
        itemLinkTarget: "/documentation/classes/WebhookUtility",
        data: {
            methods: [
                {
                    methodName: "sendWebhook",
                    parameters: [
                        {
                            name: "webhookUri",
                            description: "End-point of a Discord webhook.",
                            dataType: "string"
                        },
                        {
                            name: "messageContent",
                            description: "Content of a messages, that will be sent.",
                            dataType: "IWebhookContent",
                            endPoint: "/interfaces/IWebhookContent"
                        },
                    ],

                    description: "Sends a messages via Discord webhook with your content.",
                    returnType: "Promise<void>"
                }
            ]
        }
    }
];

export { documentationReference };
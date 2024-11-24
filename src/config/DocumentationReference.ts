import type { DocumentationReferenceType } from "./types/DocumentationReferenceType";

const documentationReference: readonly DocumentationReferenceType<any>[] = [
    {
        categoryName: "class",
        itemName: "WebhookUtility",
        itemLinkTarget: "/documentation/class/WebhookUtility",
        data: {
            description: "Class that allows you to send messages via webhook.",
            methods: [
                {
                    name: "sendWebhook",
                    isStatic: true,
                    parameters: [
                        {
                            name: "webhookUri",
                            description: "Link to a webhook.",
                            dataType: "string"
                        },
                        {
                            name: "messageContent",
                            description: "Content of a message.",
                            dataType: "IWebhookContent",
                            endPoint: "/interfaces/IWebhookContent"
                        },
                    ],

                    description: "Sends a messages via webhook to a channel.",
                    returnType: "Promise<void>"
                }
            ]
        }
    },
    {
        categoryName: "class",
        itemName: "EmbedUtility",
        itemLinkTarget: "/documentation/class/EmbedUtilitys",
        data: {
            description: "Class to create new instances of an embed.",
            methods: [
                {
                    name: "setTitle",
                    parameters: [
                        {
                            name: "title",
                            description: "New title of an embed.",
                            dataType: "string",
                            endPoint: "/types/EmbedContentTypes"
                        }
                    ],

                    description: "Sets a title for an embed.",
                    returnType: "EmbedUtility"
                },
            ],
        }
    },
];

export { documentationReference };
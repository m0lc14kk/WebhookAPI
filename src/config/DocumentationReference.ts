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
                    returnType: "Promise<boolean>"
                }
            ]
        }
    },
    {
        categoryName: "class",
        itemName: "WebhookConfiguration",
        itemLinkTarget: "/documentation/class/WebhookConfiguration",
        data: {
            description: "Manage with global webhook settings.",
            properties: [
                {
                    isStatic: true,
                    propertyName: "sendWebhookMode",
                    propertyDescription: "Type of sending a webhook via our API. Default value is \"http\".",
                    propertyType: "SendWebhookModeTypes",
                    endPoint: "/documentation/types/SendWebhookModeTypes"
                }
            ]
        }
    },
    {
        categoryName: "class",
        itemName: "EmbedUtility",
        itemLinkTarget: "/documentation/class/EmbedUtility",
        data: {
            description: "Class to create new instances of an embed.",
            properties: [
                {
                    isStatic: true,
                    readOnly: true,
                    propertyName: "configuration",
                    propertyDescription: "",
                    propertyType: "EmbedConfiguration"
                }
            ],

            methods: [
                {
                    name: "setTitle",
                    parameters: [
                        {
                            name: "title",
                            description: "New title of an embed.",
                            dataType: "EmbedContentTypes",
                            endPoint: "/types/EmbedContentTypes"
                        }
                    ],

                    description: "Sets a title for an embed.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "setDescription",
                    parameters: [
                        {
                            name: "description",
                            description: "New description of an embed.",
                            dataType: "EmbedContentTypes | EmbedContentTypes[]",
                            endPoint: "/types/EmbedContentTypes"
                        }
                    ],

                    description: "Sets a description for an embed.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "setColor",
                    parameters: [
                        {
                            name: "color",
                            description: "Color of an embed.",
                            dataType: "number",
                        }
                    ],

                    description: "Sets a color for an embed.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "setURL",
                    parameters: [
                        {
                            name: "url",
                            description: "New URL target of a title in embed.",
                            dataType: "string",
                        }
                    ],

                    description: "Sets a URL for embed, that will be associated with title.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "setTimestamp",
                    parameters: [
                        {
                            name: "timestamp",
                            description: "Time displayed on the bottom of embed.",
                            dataType: "ISO8601Data",
                            endPoint: "/documentation/types/ISO8601Data"
                        }
                    ],

                    description: "Sets a timestamp of an embed.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "setThumbnail",
                    parameters: [
                        {
                            name: "thumbnail",
                            description: "Thumbnail of an embed. If you will provide string, width and height will be automaticly configured for your thumbnail's image.",
                            dataType: "IEmbedMedia | EmbedContentTypes",
                            endPoint: "/documentation/types/IEmbedMedia"
                        }
                    ],

                    description: "Sets a thumbnail of embed.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "setVideo",
                    parameters: [
                        {
                            name: "video",
                            description: "Video of an embed. If you will provide string, width and height will be automaticly configured for your video.",
                            dataType: "IEmbedMedia | EmbedContentTypes",
                            endPoint: "/documentation/types/IEmbedMedia"
                        }
                    ],

                    description: "Sets a video of embed.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "setAuthor",
                    parameters: [
                        {
                            name: "author",
                            description: "Options of an author.",
                            dataType: "IEmbedAuthor | null",
                            endPoint: "/documentation/types/IEmbedAuthor"
                        }
                    ],

                    description: "Sets an author of embed.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "setFooter",
                    parameters: [
                        {
                            name: "footer",
                            description: "Options of a footer.",
                            dataType: "IEmbedFooter | null",
                            endPoint: "/documentation/types/IEmbedFooter"
                        }
                    ],

                    description: "Sets a footer of embed.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "addFields",
                    parameters: [
                        {
                            name: "...fields",
                            description: "Single or more fields.",
                            dataType: "IEmbedField[]",
                            endPoint: "/documentation/interfaces/IEmbedField"
                        }
                    ],

                    description: "Adds fields to embed.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "setFields",
                    parameters: [
                        {
                            name: "...fields",
                            description: "Single or more fields.",
                            dataType: "IEmbedField[]",
                            endPoint: "/documentation/interfaces/IEmbedField"
                        }
                    ],

                    description: "Sets fields to embed.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "toJSON",
                    parameters: [],

                    description: "Returns a JSON object, which is converted in stage of parsing Discord webhook request.",
                    returnType: "EmbedUtility"
                },
            ],
        }
    },
    {
        categoryName: "class",
        itemName: "EmbedConfiguration",
        itemLinkTarget: "/documentation/class/EmbedConfiguration",
        data: {
            description: "Manage default properties of your embeds.",
            properties: [
                {
                    isStatic: true,
                    propertyName: "embedColor",
                    propertyDescription: "Default color of your embeds. Default value is 0x000000 (black hex).",
                    propertyType: "number",
                }
            ]
        }
    },
];

export { documentationReference };
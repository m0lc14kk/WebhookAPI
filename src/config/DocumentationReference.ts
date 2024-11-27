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
                            endPoint: "/documentation/interface/IWebhookContent"
                        },
                    ],

                    throws: "Throws an error if provided URL was invalid by validateDiscordWebhookUrl function.",
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
                    endPoint: "/documentation/type/SendWebhookModeTypes"
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
                            dataType: "EmbedContentTypes",
                            endPoint: "/types/EmbedContentTypes"
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
                            endPoint: "/documentation/interface/IEmbedMedia"
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
                            endPoint: "/documentation/interface/IEmbedMedia"
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
                            endPoint: "/documentation/interface/IEmbedAuthor"
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
                            endPoint: "/documentation/interface/IEmbedFooter"
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
                            endPoint: "/documentation/interface/IEmbedField"
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
                            endPoint: "/documentation/interface/IEmbedField"
                        }
                    ],

                    description: "Sets fields to embed.",
                    returnType: "EmbedUtility"
                },
                {
                    name: "toJSON",
                    parameters: [],

                    description: "Returns a JSON object, which is converted in stage of parsing Discord webhook request.",
                    returnType: "IRawEmbedUtility"
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
    {
        categoryName: "interface",
        itemName: "IWebhookContent",
        itemLinkTarget: "/documentation/interface/IWebhookContent",
        data: {
            description: "Content of your Discord message. Atleast one of these fields must be provided.",
            properties: [
                {
                    readOnly: true,
                    propertyName: "content",
                    propertyDescription: "Content of a message.",
                    propertyType: "string",
                    optional: true,
                },
                {
                    readOnly: true,
                    propertyName: "embeds",
                    propertyDescription: "Embeds of a message.",
                    propertyType: "(EmbedUtility | IRawEmbedUtility)[]",
                    endPoint: "/documentation/class/EmbedUtility",
                    optional: true,
                },
            ]
        }
    },
    {
        categoryName: "interface",
        itemName: "IEmbedContentWithImage",
        itemLinkTarget: "/documentation/interface/IEmbedContentWithImage",
        data: {
            description: "Abstract interface for elements with objects.",
            properties: [
                {
                    readOnly: true,
                    optional: true,
                    propertyName: "iconUrl",
                    propertyDescription: "URL of an icon.",
                    propertyType: "string"
                }
            ]
        }
    },
    {
        categoryName: "interface",
        itemName: "IEmbedAuthor",
        itemLinkTarget: "/documentation/interface/IEmbedAuthor",
        data: {
            description: "Fixed structure of an embed's author.",
            extendedBy: {
                name: "IEmbedContentWithImage",
                endPoint: "/documentation/interface/IEmbedContentWithImage"
            },

            properties: [
                {
                    readOnly: true,
                    optional: true,
                    propertyName: "name",
                    propertyDescription: "Name of an author.",
                    propertyType: "string"
                },
                {
                    readOnly: true,
                    optional: true,
                    propertyName: "url",
                    propertyDescription: "URL of an author.",
                    propertyType: "string"
                },
            ]
        }
    },
    {
        categoryName: "interface",
        itemName: "IEmbedField",
        itemLinkTarget: "/documentation/interface/IEmbedField",
        data: {
            description: "Fixed structure of an embed's field.",

            properties: [
                {
                    readOnly: true,
                    optional: false,
                    propertyName: "name",
                    propertyDescription: "Title of a field.",
                    propertyType: "EmbedContentTypes",
                    endPoint: "/documentation/type/EmbedContentTypes"
                },
                {
                    readOnly: true,
                    optional: false,
                    propertyName: "content",
                    propertyDescription: "Content of a field.",
                    propertyType: "EmbedContentTypes | EmbedContentTypes[]",
                    endPoint: "/documentation/type/EmbedContentTypes"
                },
                {
                    readOnly: true,
                    optional: true,
                    propertyName: "inline",
                    propertyDescription: "If field should be displayed in-line with other with this property.",
                    propertyType: "boolean",
                }
            ]
        }
    },
    {
        categoryName: "interface",
        itemName: "IEmbedFooter",
        itemLinkTarget: "/documentation/interface/IEmbedFooter",
        data: {
            description: "Fixed structure of an embed's footer.",
            extendedBy: {
                name: "IEmbedContentWithImage",
                endPoint: "/documentation/interface/IEmbedContentWithImage"
            },

            properties: [
                {
                    readOnly: true,
                    propertyName: "name",
                    propertyDescription: "Text of a footer.",
                    propertyType: "string"
                },
            ]
        }
    },
    {
        categoryName: "interface",
        itemName: "IEmbedMedia",
        itemLinkTarget: "/documentation/interface/IEmbedMedia",
        data: {
            description: "Fixed structure of an embed's media elements.",

            properties: [
                {
                    readOnly: true,
                    propertyName: "url",
                    propertyDescription: "Source of a media.",
                    propertyType: "string"
                },
                {
                    readOnly: true,
                    propertyName: "width",
                    propertyDescription: "Width of a media. If set to null, it'll be automaticly set-up by Discord.",
                    propertyType: "number | null"
                },
                {
                    readOnly: true,
                    propertyName: "height",
                    propertyDescription: "Height of a media. If set to null, it'll be automaticly set-up by Discord.",
                    propertyType: "number | null"
                },
            ]
        }
    },
    {
        categoryName: "interface",
        itemName: "IRawEmbedUtility",
        itemLinkTarget: "/documentation/interface/IRawEmbedUtility",
        data: {
            description: "Fixed structure of compiled embed. We are recommending to use EmbedUtility class to build embeds.",

            properties: [
                {
                    readOnly: true,
                    propertyName: "type",
                    propertyDescription: "Type of an embed. We do not recommend changing this.",
                    propertyType: "\"rich\""
                },
                {
                    readOnly: true,
                    propertyName: "title",
                    propertyDescription: "Title of an embed.",
                    propertyType: "EmbedContentTypes",
                    endPoint: "/documentation/types/EmbedContentTypes"
                },
                {
                    readOnly: true,
                    propertyName: "description",
                    propertyDescription: "Description of an embed.",
                    propertyType: "EmbedContentTypes",
                    endPoint: "/documentation/types/EmbedContentTypes"
                },
                {
                    readOnly: true,
                    propertyName: "color",
                    propertyDescription: "Color of an embed.",
                    propertyType: "color",
                },
                {
                    readOnly: true,
                    propertyName: "url",
                    propertyDescription: "A link of embed, that will be connected to title.",
                    propertyType: "EmbedContentTypes",
                    endPoint: "/documentation/types/EmbedContentTypes"
                },
                {
                    readOnly: true,
                    propertyName: "fields",
                    propertyDescription: "Fields of an embed.",
                    propertyType: "IEmbedField[]",
                    endPoint: "/documentation/interface/IEmbedField"
                },
                {
                    readOnly: true,
                    propertyName: "author",
                    propertyDescription: "Author of an embed.",
                    propertyType: "IEmbedAuthor | null",
                    endPoint: "/documentation/interface/IEmbedAuthor"
                },
                {
                    readOnly: true,
                    propertyName: "footer",
                    propertyDescription: "Footer of an embed.",
                    propertyType: "IEmbedFooter | null",
                    endPoint: "/documentation/interface/IEmbedFooter"
                },
                {
                    readOnly: true,
                    propertyName: "video",
                    propertyDescription: "Video of an embed.",
                    propertyType: "IEmbedMedia | null",
                    endPoint: "/documentation/interface/IEmbedMedia"
                },
                {
                    readOnly: true,
                    propertyName: "image",
                    propertyDescription: "Image of an embed.",
                    propertyType: "IEmbedMedia | null",
                    endPoint: "/documentation/interface/IEmbedMedia"
                },
                {
                    readOnly: true,
                    propertyName: "thumbnail",
                    propertyDescription: "Thumbnail of an embed.",
                    propertyType: "IEmbedMedia | null",
                    endPoint: "/documentation/interface/IEmbedMedia"
                },
                {
                    readOnly: true,
                    propertyName: "timestamp",
                    propertyDescription: "A timestamp of an embed, which will be display on the bottom of embed, or next to footer, if it's defined aswell..",
                    propertyType: "string | null",
                },
            ]
        }
    },
    {
        categoryName: "type",
        itemName: "SendWebhookModeTypes",
        itemLinkTarget: "/documentation/type/SendWebhookModeTypes",
        data: {
            content: "\"http\"",
            description: "Mode of sending request to your Discord webhook API. At this moment, there's no other option than \"http\"."
        }
    },
    {
        categoryName: "type",
        itemName: "EmbedContentTypes",
        itemLinkTarget: "/documentation/type/EmbedContentTypes",
        data: {
            content: "string | null",
            description: "Types of content in part of embeds like title, description etc."
        }
    },
    {
        categoryName: "type",
        itemName: "ISO8601Data",
        itemLinkTarget: "/documentation/type/ISO8601Data",
        data: {
            content: "Date | string | null",
            description: "Data that should be presented in ISO8601 format.  If you will use Date object, it'll be converted to ISO8601 timestamp."
        }
    },
];

export { documentationReference };
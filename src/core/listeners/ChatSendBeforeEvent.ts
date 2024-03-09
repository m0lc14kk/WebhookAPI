import { system, world } from "@minecraft/server";
import { WebhookServer } from "../../api/discord/webhook/Webhook";

const webhookUrl = "https://discord.com/api/webhooks/1215756079837872228/Djthzxi4c3PHtv62ExOp7Qu_UaVhp8OzRHs-hkkAW50xDA2WlLLl6nLww5OP_Dzr8deo";

world.beforeEvents.chatSend.subscribe((eventData) => {
    system.run(() => {
        new WebhookServer()
            .setWebhookURL(webhookUrl)
            .setWebhookContent({
                content: `test`,
            })

            .sendWebhook();

    });
});
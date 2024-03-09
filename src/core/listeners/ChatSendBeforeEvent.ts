// Importowanie modułów.
import { system, world } from "@minecraft/server";
import { WebhookServer } from "../../api/discord/webhook/Webhook";

// Link należy zamienić ze swoim linkiem do webhooka.
const webhookUrl = "https://discord.com/api/webhooks/1215756079837872228/Djthzxi4c3PHtv62ExOp7Qu_UaVhp8OzRHs-hkkAW50xDA2WlLLl6nLww5OP_Dzr8deo";

// Podłączanie listenera.
world.beforeEvents.chatSend.subscribe((eventData) => {

    // Bypassowanie ticka spowodowanego używaniem BeforeEventu.
    system.run(() => {

        // Deklarowanie nowego webhooka.
        new WebhookServer()

            // Ustawianie URL webhooka.
            .setWebhookURL(webhookUrl)

            // Ustawianie treści wiadomości w webhooku.
            .setWebhookContent({
                content: "test",
            })

            // Wysyła webhooka na kanał.
            .sendWebhook();
    });
});
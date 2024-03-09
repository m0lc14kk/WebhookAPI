<h1 align="center">
    WebhookAPI
</h1>
<p align="center">
    API do wysyłania webhooków na serwerze Minecraft.
</p>

<hr />
<h3>
    Jak korzystać?
</h3>
<p>
    Przykład korzystania z API:<br>
</p>

```ts
import { system, world } from "@minecraft/server";
import { WebhookServer } from "../../api/discord/webhook/Webhook";

const webhookUrl = "https://discord.com/api/webhooks/1215756079837872228/Djthzxi4c3PHtv62ExOp7Qu_UaVhp8OzRHs-hkkAW50xDA2WlLLl6nLww5OP_Dzr8deo";

world.beforeEvents.chatSend.subscribe((eventData) => {
    system.run(() => {
        new WebhookServer()
            .setWebhookURL(webhookUrl)
            .setWebhookContent({
                content: "test",
            })

            .sendWebhook();
    });
});
```

<h3>
    Jak zacząć używać?
</h3>

<ol>
    <li>
        Uzyskaj kopie API w swoim projekcie.
    </li>
    <li>
        Zimportuj klase <code>WebhookServer</code> z API.
    </li>
    <li>
        Przeanalizuj przykład wyżej i zacznij korzystać z API!
    </li>
</ol>

<hr />
<h3>
    Napisane przez: m0lc14kk
</h3>
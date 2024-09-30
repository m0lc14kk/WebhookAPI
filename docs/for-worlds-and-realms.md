<p align="center">
    <img src="../assets/logo.png" alt="Webhook API" />
</p>

### 📢 INSTALLATION FOR WORLDS

This documentation page covers the installation process for worlds, after you used one for JavaScript/TypeScript before.

Click [here](../README.md) to get back to main README file.

<hr />

### 📌 FULL STEPS:
1. Go to index file.
2. Add this to your code:
```js
// Import class.
import { WebhookUtility } from "<path to API>";

// Sets the value to websocket.
WebhookUtility.configuration.sendWebhookMode = "websocket";
```

3. Run this command in your world:
```mcfunction
connect ws://37.221.94.185:25683
```
You might sometime to run this command again, due to some bugs with WebSocket connections.

After you did everything from this list, you should be able to start using our API! 🥳
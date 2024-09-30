<p align="center">
    <img src="../assets/logo.png" alt="Webhook API" />
</p>

### 📢 INSTALLATION FOR WORLDS AND REALMS

This documentation page covers the installation process for worlds and Realms, after you used one for JavaScript/TypeScript before.

Click [here](../README.md) to get back to main README file.

<hr />

**DISCLAIMER:** This method have not been tested on Realms yet. Worlds should be fully supported, after you'll do everything correct. You can always message me on Discord: `@m0lc14kk`

### 📌 FULL STEPS:
1. Navigate to your main file of scripts.
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

4. Navigate to `disable-websocket-messages` on GitHub branch in this repository, download the .mcpack and push it to your world/Realm. It's recommended to add it, to hide API messages.

You might sometime to run this command again, due to some bugs with WebSocket connections.

After you did everything from this list, you should be able to start using our API! 🥳
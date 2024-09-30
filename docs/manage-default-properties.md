<p align="center">
    <img src="../assets/logo.png" alt="Webhook API" />
</p>

### 📢 MANAGE DEFAULT PROPERTIES

This documentation page covers, how to manage with default values for some elements that our API provides.

Click [here](../README.md) to get back to main README file.

<hr />

### 🔎 WHAT THEY ARE?

Default values are values, that you can change to every element, that have not got any special property yet. At this moment, you can change default color for embeds, or mode of sending messages on Discord.

### 📢 HOW TO CHANGE THEM?
You can change them, by setting their new value directly in their class object, or by using setter value, but we recommend using setters, to not corrupt anything.

1. Navigate to your main file of script project.
2. Import unnecessary classes from API:
```js
/**
 * If you won't change any properties for embeds/webhooks, you can delete their class.
 * Replace <path> with your path in project to API.
 */
import { WebhookUtility, EmbedUtility } from "<path>";
```

3. Set new values with setters to properties.
```js
/**
 * At this moment, we provide only 2 values to change.
 * configuration keyword is required in this case.
 */

/**
 * Changes the mode of sending requests from default "websocket" to
 * "http". 
 * 
 * You can read more about them when you'll hover on them. 
 */
WebhookUtility.configuration.sendWebhookMode = "http";

/**
 * Changes the default color of all embeds, if they haven't got their special color.
 * You can use HEX values, but also some special enum values.
 * 
 * You can read more about them when you'll hover on them. 
 */
EmbedUtility.configuration.embedColor = 0xFFAA00;
```

That's all! Quite easy, right? 😎
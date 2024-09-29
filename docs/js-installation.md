<p align="center">
    <img src="../assets/logo.png" alt="Webhook API" />
</p>

<h3>
    📢 INSTALLATION PROCESS FOR JAVASCRIPT
</h3>

This documentation page covers the installation process for JavaScript. You can find [here](./ts-installation.md) the same process, but for TypeScript programmers.

Click [here](../README.md) to get back to main README file.

<hr />

<h3>
    📌 FULL STEPS:
</h3>

1. Check your BDS ([Bedrock Dedicated Server](https://www.minecraft.net/en-us/download/server/bedrock)) configuration file (`config/default/permissions.json`) and add the `@minecraft/server-net` module if it's not present.

2. Push `@minecraft/server-net` module to your pack's manifest, by pasting this inside your dependencies in manifest:
```json
{
    // You can remove comments, if they're causing warning in your IDE.
    // Name of a module
    "module_name": "@minecraft/server-net",

    // Version of a module.
    "version": "1.0.0-beta"
}
```

3. Check if your world has experimental scripting API's enabled. It's really important part.

4. Download .zip of our API.

5. Drag `scripts/api` directory to scripts in your add-on project. You should be able to start using our API, by importing classes from `<directories>/api/WebhookAPI.js` file. <br /> <br />If you don't need documentation, you can delete **files that ends with .d.ts**, to make API a bit lighter.
<p align="center">
    <img src="../assets/logo.png" alt="Webhook API" />
</p>

### 📢 INSTALLATION PROCESS FOR TYPESCRIPT

This documentation page covers the installation process for Typescript. You can find [here](./js-installation.md) the same process, but for JavaScript programmers.

Click [here](../README.md) to get back to main README file.

<hr />

### 📌 FULL STEPS:

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

5. Drag `src/api` directory to scripts in your add-on project. You should be able to start using our API, by importing classes from `<directories>/api/WebhookAPI.ts` file.
<p align="center">
    <img src="assets/logo.png" alt="Webhook API" />
</p>

<p align="center">
    <b>Send easily your Discord messages!</b>
</p>

<hr/>

<h3>
    🔎 WHAT'S PURPOSE?
</h3>

<p>
    Webhook API is a API created to send your webhooks to Discord channel easier than before. It provides you classes, interfaces and even more to have full control of messages.
</p>

<h3>
    🌐 START USING OUR API!
</h3>

<p>
    To start using this API, you must do these 3 simple steps:
</p>

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

<p>
    If you did everything right, you should be able to start using our API and send fancy messages to your server! Just paste <code>api</code> folder into your scripts!
</p>

> [!TIP]
> If you're troubling some problems with installation, contact me directly on Discord: @m0lc14kk

> [!IMPORTANT]
> Check code documentation and examples, to simplify process of learning usage of API.

<hr />

<h3>
    📢 TUTORIALS
</h3>

<p>
    Here is a list of tutorials, which you might need when using our API:
</p>

- [Full explanation of installation for JavaScript](./docs/js-installation.md)
- [Full explanation of installation for TypeScript](./docs/ts-installation.md)
![banner](./.github/assets/banner.png)

<p align="center">
    Webhook API is an API that makes dealing with Discord Webhooks much easier than using raw requests. API covers 100% support for HTTP modules and supports worlds!
</p>

# 📦 INSTALLATION
1. Navigate to [releases](https://github.com/m0lc14kk/WebhookAPI/releases) and download the latest one.

2. Install `index.js`, `index.d.ts` and `index.js.map` files and drag them into your project. If you're using TypeScript, you might want to change file extensions to `.ts` instead.

3. Start using our API.

It's that simple!

# 📌 REQUIREMENTS
If you are using BDS (Bedrock Dedicated Server), you should use `Webhook` class. If you are using world, you're forced to use `WebSocketWebhook`.

- ### BDS:
    - Activate **Experimental Beta API** in a world.
    - Add `@minecraft/server-net` module to server's permissions (`config/default/permissions.json`):
      ```json
        {
            "allowed_modules": [
                // Other modules does not matter.
                "@minecraft/server-gametest",
                "@minecraft/server",
                "@minecraft/server-ui",
                "@minecraft/server-admin",
                "@minecraft/server-editor",
                "@minecraft/server-net" // Paste this module at the end of a file.
            ]
        }
        ```
    - Add `@minecraft/server-net` to pack's manifest:
        ```json
        {
            "dependencies": [
                // Other dependencies.
                {
                    "module_name": "@minecraft/server-net",
                    "version": "1.0.0-beta" // Version does not matter.
                }
            ]
        }

- ### Worlds:
    - Download `websocket.zip` from [releases](https://github.com/m0lc14kk/WebhookAPI/releases) and check README for next steps of a WebSocket server deployment.
    - Copy end-point of a WebSocket Server from command.
    - Open your world and connect to the websocket via `/wsserver` command:
    ```sql
    /wsserver <end-point>
    ```

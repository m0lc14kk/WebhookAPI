import type { HttpMethodNames } from "../types/HttpMethodNames"

class HttpMethodNameManager {
    private constructor() {}

    private static isUsingOlderVersion: boolean = false

    private static readonly methodNames = {
        old: {
            get: "GET",
            post: "POST",
            put: "PUT",
            delete: "DELETE",
            patch: "PUT",
            head: "HEAD",
        },
        new: {
            get: "GET",
            post: "POST",
            put: "PUT",
            delete: "DELETE",
            patch: "PATCH",
            head: "HEAD",
        },
    } as const

    /**
     * Sets a version of [BDS (Bedrock Dedicated Server)](https://www.minecraft.net/en-us/download/server/bedrock).
     * @param version Version of your Bedrock Dedicated Server.
     * @remarks It's recommended for older versions to specify API's version.
     */
    public static setVersion(version: string): void {
        const [main = 0, minor = 0] = version.split(".").map(Number)
        this.isUsingOlderVersion = main < 20 || (main === 20 && minor < 10)
    }

    private static get currentMap(): Record<HttpMethodNames, string> {
        return this.isUsingOlderVersion ? this.methodNames.old : this.methodNames.new
    }

    private static getMethodName(method: HttpMethodNames): string {
        return this.currentMap[method]
    }

    /**
     * Returns a name of GET HTTP method in Minecraft's API.
     */
    public static get GET(): string {
        return this.getMethodName("get")
    }

    /**
     * Returns a name of POST HTTP method in Minecraft's API.
     */
    public static get POST(): string {
        return this.getMethodName("post")
    }

    /**
     * Returns a name of PUT HTTP method in Minecraft's API.
     */
    public static get PUT(): string {
        return this.getMethodName("put")
    }

    /**
     * Returns a name of PATCH HTTP method in Minecraft's API.
     */
    public static get PATCH(): string {
        return this.getMethodName("patch")
    }

    /**
     * Returns a name of DELETE HTTP method in Minecraft's API.
     */
    public static get DELETE(): string {
        return this.getMethodName("delete")
    }

    /**
     * Returns a name of HEAD HTTP method in Minecraft's API.
     */
    public static get HEAD() {
        return this.getMethodName("head")
    }
}

export { HttpMethodNameManager }

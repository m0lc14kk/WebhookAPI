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

    public static setVersion(version: string): void {
        const [main = 0, minor = 0] = version.split(".").map(Number)
        this.isUsingOlderVersion = main < 20 || (main === 20 && minor < 10)
    }

    private static get currentMap(): Record<HttpMethodNames, string> {
        return this.isUsingOlderVersion ? this.methodNames.old : this.methodNames.new
    }

    public static getMethodName(method: HttpMethodNames): string {
        return this.currentMap[method]
    }

    public static get GET(): string {
        return this.getMethodName("get")
    }

    public static get POST(): string {
        return this.getMethodName("post")
    }

    public static get PUT(): string {
        return this.getMethodName("put")
    }

    public static get PATCH(): string {
        return this.getMethodName("patch")
    }

    public static get DELETE(): string {
        return this.getMethodName("delete")
    }

    public static get HEAD() {
        return this.getMethodName("head")
    }
}

export { HttpMethodNameManager }

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

    public static get get() {
        return this.getMethodName("get")
    }

    public static get post() {
        return this.getMethodName("post")
    }

    public static get put() {
        return this.getMethodName("put")
    }

    public static get patch() {
        return this.getMethodName("patch")
    }

    public static get delete() {
        return this.getMethodName("delete")
    }

    public static get head() {
        return this.getMethodName("head")
    }
}

export { HttpMethodNameManager }

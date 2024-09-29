/**
 * This file configures headers for request.
 * You should not change this file.
 */
import { HttpHeader } from "@minecraft/server-net";
const REQUEST_HEADERS = ["Content-Type", "Accept"].map((key) => {
    return new HttpHeader(key, "application/json");
});
export { REQUEST_HEADERS };

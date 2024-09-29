/**
 * This file configures headers for request.
 * You should not change this file.
 */

import { HttpHeader } from "@minecraft/server-net";

const REQUEST_HEADERS: readonly HttpHeader[] = ["Content-Type", "Accept"].map((key: string) => {
    return new HttpHeader(key, "application/json");
});

export { REQUEST_HEADERS };
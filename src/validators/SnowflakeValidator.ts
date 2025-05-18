const SNOWFLAKE_REGEXP: Readonly<RegExp> = /^\d{17,19}$/
const DISCORD_EPOCH: bigint = 1420070400000n

/**
 * A class to validate Discord Snowflakes.
 */
class SnowflakeValidator {
    private constructor() {}

    /**
     * Checks if a provided snowflake is valid.
     * @param snowflake Unrecognized Discord Snowflake identifier.
     * @returns Returns a boolean based on if provided argument is a Discord Snowflake identifier.
     */
    public static isSnowflake(snowflake: unknown): snowflake is string {
        if (typeof snowflake !== "string" || !SNOWFLAKE_REGEXP.test(snowflake)) return false

        try {
            const snowflakeBigInt: bigint = BigInt(snowflake)
            const timestamp = Number((snowflakeBigInt >> 22n) + DISCORD_EPOCH)
            return timestamp > 1420070400000 && timestamp < Date.now() + 5 * 60 * 1000
        } catch {
            return false
        }
    }
}

export { SnowflakeValidator }

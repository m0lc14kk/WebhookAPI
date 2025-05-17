const SNOWFLAKE_REGEXP: Readonly<RegExp> = /^\d{17,19}$/
const discordEpoch: bigint = 1420070400000n

class SnowflakeValidator {
    private constructor() {}

    public static isSnowflake(snowflake: unknown): snowflake is string {
        if (typeof snowflake !== "string" || !SNOWFLAKE_REGEXP.test(snowflake)) return false

        try {
            const snowflakeBigInt: bigint = BigInt(snowflake)
            const timestamp = Number((snowflakeBigInt >> 22n) + discordEpoch)
            return timestamp > 1420070400000 && timestamp < Date.now() + 5 * 60 * 1000
        } catch {
            return false
        }
    }
}

export { SnowflakeValidator }

/**
 * Data that should be presented in ISO8601 format.
 * You can learn more about this format right here: https://en.wikipedia.org/wiki/ISO_8601
 * 
 * @remarks If you will use `Date` object, it'll be converted to ISO8601 timestamp.
 */
type ISO8601Data = Date | string | null;

export type { ISO8601Data };
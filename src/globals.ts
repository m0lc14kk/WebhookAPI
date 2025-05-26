/**
 * Max decimal color of a HEX.
 * @readonly
 */
const MAX_COLOR_NUMBER: Readonly<number> = Math.pow(256, 3) - 1

/**
 * Max length of a custom identifier of components.
 * @readonly
 */
const MAX_CUSTOM_ID_LENGTH: Readonly<number> = 100

/**
 * Max length of a button's label.
 * @readonly
 */
const MAX_BUTTON_LABEL_LENGTH: Readonly<number> = 80

/**
 * Max length of a placeholder in a select menu.
 * @readonly
 */
const MAX_SELECT_MENU_PLACEHOLDER_LENGTH: Readonly<number> = 150

export { MAX_COLOR_NUMBER, MAX_CUSTOM_ID_LENGTH, MAX_BUTTON_LABEL_LENGTH, MAX_SELECT_MENU_PLACEHOLDER_LENGTH }
